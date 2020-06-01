import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ isAuth: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/user/');
        if (response.status !== 200) {
          setLoading(false);
        }
        setAuth({
          isAuth: true,
          planId: response.data.user.planId,
          name: response.data.user.name,
          gender: response.data.user.gender,
          email: response.data.user.email,
          born_date: response.data.user.born_date
        });
      } catch (e) {
        setLoading(false);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  async function login({ email, password }) {
    const data = { email, password };

    try {
      const response = await api.post('/user/login', data);
      setAuth({
        isAuth: true,
        planId: response.data.user.planId,
        name: response.data.user.name,
        gender: response.data.user.name,
        email: response.data.user.email,
        born_date: response.data.user.born_date,
      });

      sessionStorage.setItem('user', JSON.stringify(response.data.user));
      return true;
    } catch (e) {
      alert('Usuário ou senha incorretos');
      return false;
    }
  }

  async function logout() {
    if (auth.isAuth) {
      setAuth({ isAuth: false });
      await api.get('/user/logout');
    }
  }

  return !loading && (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

export { AuthContext, AuthProvider };
