"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="relative flex items-center justify-between w-full p-4">
        <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center retro-green"><span className="text-xs mr-1">++</span> CodeKaizen</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
            <Link href="/team" className="">Team</Link>
            <Link href="/projects" className="">Projects</Link>
        </div>
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} className="text-xl"/>
            </button>
        </div>
        {isOpen && (
            <div onClick={closeMenu} className="fixed top-0 left-0 w-full h-full bg-neutral-900/[.95] z-50 flex flex-col items-center justify-center gap-6"
            >
                <FontAwesomeIcon icon={faXmark} onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-xl cursor-pointer" />
                <Link href="/team" className="text-2xl">Team</Link>
                <Link href="/projects" className="text-2xl">Projects</Link>
            </div>
        )}
        </nav>
    );
}
