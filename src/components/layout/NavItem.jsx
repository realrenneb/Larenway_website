import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const NavItem = ({ to, children, className, activeClassName = 'text-accent-teal font-semibold', ...props }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(className, isActive ? activeClassName : '')}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;