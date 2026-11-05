'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {
    const pathname=usePathname();
    const isActive=pathname===href
    return (
        <div>
          <Link className={isActive ? 'border-b border-blue-500' : 'border-b border-transparent'} href={href}>
            {children}
          </Link>
        </div>
    );
};

export default Navlink;