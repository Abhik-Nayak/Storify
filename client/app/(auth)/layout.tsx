import React from 'react';
import Image from "next/image";

type Props = {}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen'>
      {children}
    </div>
  )
}

export default Layout