import { useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopHeader from './TopHeader.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import HomeFooter from './home/HomeFooter.jsx';
import useSiteEffects from '../hooks/useSiteEffects.js';

export default function Layout() {
    const { pathname } = useLocation();
    const isHome = pathname === '/';

    // Style landing page di-scope ke body.home (lihat style.css)
    useLayoutEffect(() => {
        document.body.classList.toggle('home', isHome);
        return () => document.body.classList.remove('home');
    }, [isHome]);

    // Kembali ke atas saat pindah halaman
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useSiteEffects(pathname);

    return (
        <>
            <TopHeader partner={isHome} />
            <Navbar />
            <Outlet />
            {isHome ? <HomeFooter /> : <Footer />}
        </>
    );
}
