import React from 'react';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isAdmin = false; 
  const userId = null;

  return (
    <html lang="en">
      <body>
        <nav className="navbar flex items-center justify-evenly p-3 shadow-md mb-10">
          <Link href="/" className="text-black! hover:underline! cursor-pointer">Home</Link>
          
          {userId ? (
            <>
              <Link href="/user/profile" className="text-black! hover:underline! cursor-pointer">Profile</Link>
              <Link href="/products" className="text-black! hover:underline! cursor-pointer">Products</Link>
              <Link href="/products/cart" className="text-black! hover:underline! cursor-pointer">Cart</Link>
              
              {isAdmin && (
                <Link href="/admin/dashboard" className="text-black! hover:underline! cursor-pointer">Dashboard</Link>
              )}
            </>
          ) : (
            <>
              <Link href="/user/login" className="text-black! hover:underline! cursor-pointer">Login</Link>
              <Link href="/user/register" className="text-black! hover:underline! cursor-pointer">Register</Link>
            </>
          )}
        </nav>

        <main className="container">
          {children}
        </main>

        <footer className="border-top absolute bottom-0 w-full h-20 flex items-center justify-center">
            fúter
        </footer>
      </body>
    </html>
  );
}
