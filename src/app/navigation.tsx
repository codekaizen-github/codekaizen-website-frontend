"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between w-full p-4 bg-stone-200">
        <div className="flex items-center space-x-4">
            <Link href="/" className="text-lg font-bold">CodeKaizen</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
            <Link href="/team" className="transform hover:scale-110 active:scale-90 transition-all duration-200">Team</Link>
            <Link href="/projects" className="transform hover:scale-110 active:scale-90 transition-all duration-200">Projects</Link>
        </div>
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-8-8a1 1 0 011.414-1.414l8 8zm0-6a1 1 0 01-1.414 1.414l-8-8a1 1 0 011.414-1.414l8 8z" clipRule="evenodd" />
                ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" clipRule="evenodd" />
                )}
            </svg>
            </button>
        </div>
        {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-white opacity-90 z-50 flex flex-col items-center justify-center space-y-4"
            >
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L12 10.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L13.4142 12L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L12 13.4142L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L10.5858 12L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z" clipRule="evenodd" />
                </svg>
            </button>
            <Link href="/team" className="text-2xl">Team</Link>
            <Link href="/projects" className="text-2xl">Projects</Link>
            </div>
        )}
        </nav>
    );
}
