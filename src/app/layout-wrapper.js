'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar/page';

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();

    // Define paths where Navbar should be hidden
    const hiddenNavbarPaths = ['/signin', '/signup'];

    const showNavbar = !hiddenNavbarPaths.includes(pathname);

    return (
        <>
            {showNavbar && <Navbar />}
            {children}``
        </>
    );
}
