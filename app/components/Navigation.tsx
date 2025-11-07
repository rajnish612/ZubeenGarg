'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', assamese: 'ঘৰ' },
    { href: '/songs', label: 'Songs', assamese: 'গান' },
    { href: '/biography', label: 'Biography', assamese: 'জীৱনী' },
    { href: '/gallery', label: 'Gallery', assamese: 'গেলেৰী' },
    { href: '/tribute', label: 'Tribute', assamese: 'শ্ৰদ্ধাঞ্জলি' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-[var(--gold)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">ZG</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gradient">Zubeen Garg</h1>
              <p className="text-xs text-[var(--gold)] assamese-text">জুবিন গাৰ্গ</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Navigation Items */}
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-3 py-2 transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-[var(--gold)]'
                      : 'text-white hover:text-[var(--gold)]'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="block text-xs assamese-text opacity-70">
                    {item.assamese}
                  </span>
                  {pathname === item.href && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)]" />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Developer Link - Smaller */}
            <div className="border-l border-[var(--gold)]/30 pl-6 ml-2">
              <Link
                href="/developer"
                className={`text-sm transition-all duration-300 ${
                  pathname === '/developer'
                    ? 'text-[var(--gold)]'
                    : 'text-gray-400 hover:text-[var(--gold)]'
                }`}
              >
                <span className="font-normal">Developer</span>
                <span className="block text-xs assamese-text opacity-60">
                  ডেভেলপাৰ
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[var(--gold)] transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-[var(--gold)]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Main Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-[var(--gold)] bg-[var(--gold)]/10'
                    : 'text-white hover:text-[var(--gold)] hover:bg-[var(--gold)]/5'
                }`}
              >
                <span className="font-medium">{item.label}</span>
                <span className="block text-sm assamese-text opacity-70">
                  {item.assamese}
                </span>
              </Link>
            ))}
            
            {/* Developer Link - Smaller */}
            <div className="border-t border-[var(--gold)]/20 pt-2 mt-2">
              <Link
                href="/developer"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  pathname === '/developer'
                    ? 'text-[var(--gold)] bg-[var(--gold)]/10'
                    : 'text-gray-400 hover:text-[var(--gold)] hover:bg-[var(--gold)]/5'
                }`}
              >
                <span className="font-normal">Developer</span>
                <span className="block text-xs assamese-text opacity-60">
                  ডেভেলপাৰ
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;