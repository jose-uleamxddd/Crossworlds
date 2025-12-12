'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './language-toggle';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const navItems = [
    { label: getTranslation(language, 'nav.home'), href: '/' },
    { label: getTranslation(language, 'nav.about'), href: '/about' },
    { label: getTranslation(language, 'nav.ministries'), href: '/ministries' },
    { label: getTranslation(language, 'nav.contact'), href: '/contact' },
  ];

  return (
    <nav className="bg-[#0b5298] border-b border-white/10 sticky top-0 z-50 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3 group">
        <img 
          src="/images/logos/logo_cross-removebg-preview.png"
          alt="Crossworlds Connection" 
          className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
        />
        <span className="hidden md:inline font-bold text-white text-lg">Crossworlds</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Language Toggle & Mobile Menu */}
      <div className="flex items-center space-x-4">
        <LanguageToggle />
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>
</nav>

  );
}
