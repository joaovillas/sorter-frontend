import React from 'react';
import Menu from '../../components/Menu';

export default function PageRoot({ children }) {
  return (
    <Menu>
      {children}
    </Menu>
  )
}