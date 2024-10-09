import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../assets';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isNavbar, setIsNavbar] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsNavbar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='w-full h-[80px] header fixed top-0 right-0 left-0 z-[1111] backdrop-blur-lg'>
            <div className='w-full h-full flex items-center justify-between px-5 sm:px-20'>
                <Link to='/' className='relative z-[111111]'>
                    <img src={Logo} className='w-[100px]' />
                </Link>
                <ul className='hidden sm:flex items-center gap-8 text-lg font-semibold'>
                    <li><NavLink to='/all'>All</NavLink></li>
                    <li><NavLink to='/mens'>Men</NavLink></li>
                    <li><NavLink to='/women'>Women</NavLink></li>
                    <li><NavLink to='/kids'>Kids</NavLink></li>
                </ul>

                <div className='sm:hidden'>
                    {isNavbar ? (
                        <FiX className='cursor-pointer' onClick={() => setIsNavbar(false)} />
                    ) : (
                        <FiMenu className='cursor-pointer' onClick={() => setIsNavbar(true)} />
                    )}
                </div>
            </div>

            <div
                ref={navRef}
                className={`fixed top-0 left-0 w-[45%] sm:w-[50%] h-screen bg-white shadow-md transition-transform duration-300 ${
                    isNavbar ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <ul className='flex flex-col gap-6 mt-20 p-10'>
                    <li>
                        <NavLink to='/all' onClick={() => setIsNavbar(false)}>All</NavLink>
                    </li>
                    <li>
                        <NavLink to='/mens' onClick={() => setIsNavbar(false)}>Men</NavLink>
                    </li>
                    <li>
                        <NavLink to='/women' onClick={() => setIsNavbar(false)}>Women</NavLink>
                    </li>
                    <li>
                        <NavLink to='/kids' onClick={() => setIsNavbar(false)}>Kids</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
