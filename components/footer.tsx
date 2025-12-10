'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/i18n';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#0b5298] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">CrossWorlds Connections</h3>
            <p className="text-sm text-white/80">
              {t.footer.aboutDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#dbeafe] transition-colors">{t.footer.aboutUs}</Link></li>
              <li><Link href="/ministries" className="hover:text-[#dbeafe] transition-colors">{t.footer.ministries}</Link></li>
              <li><Link href="/get-involved" className="hover:text-[#dbeafe] transition-colors">{t.footer.getInvolved}</Link></li>
              <li><Link href="/contact" className="hover:text-[#dbeafe] transition-colors">{t.footer.contact}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.contactTitle}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+593 99 509 6160</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>Steve.crossworlds@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>{t.footer.location} <br />{t.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.followUs}</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/CrossWorldsConnections/" target="_blank" rel="noopener noreferrer" className="hover:text-[#dbeafe] transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/crossworldscenter_connections/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#dbeafe] transition-colors"><Instagram size={20} /></a>
              <a href="https://www.tiktok.com/@crossworlds_connection?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:text-[#dbeafe] transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 CrossWorlds Connections. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
