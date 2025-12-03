'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b5298] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Grace Academy</h3>
            <p className="text-sm text-white/80">
              Music and English education united with spiritual growth through Christian faith.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#dbeafe] transition-colors">About Us</Link></li>
              <li><Link href="/ministries" className="hover:text-[#dbeafe] transition-colors">Ministries</Link></li>
              <li><Link href="/get-involved" className="hover:text-[#dbeafe] transition-colors">Get Involved</Link></li>
              <li><Link href="/contact" className="hover:text-[#dbeafe] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@graceacademy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Main Street</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/CrossWorldsConnections/" target="_blank" rel="noopener noreferrer" className="hover:text-[#dbeafe] transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/crossworldscenter_connections/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#dbeafe] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 Grace Academy. All rights reserved. | Designed for spiritual and educational growth</p>
        </div>
      </div>
    </footer>
  );
}
