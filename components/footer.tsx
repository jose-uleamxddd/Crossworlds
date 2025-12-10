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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px- py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start mb-11">
          {/* CrossWorlds Connections */}
          <div className="text-center md:text-left flex flex-col">
            <h3 className="font-bold text-xl mb-4">CrossWorlds Connections</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              {t.footer.aboutDescription}
            </p>
          </div>

          {/* Follow Us */}
          <div className="text-center flex flex-col items-center">
            <h4 className="font-bold text-xl mb-4">{t.footer.followUs}</h4>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/CrossWorldsCenterForConnections/ " 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/crossworldscenter_connections/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@crossworlds_connection?is_from_webapp=1&sender_device=pc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right flex flex-col md:items-end">
            <div>
              <h4 className="font-bold text-xl mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-3 inline-block text-left">
                <li>
                  <Link href="/about" className="hover:text-[#dbeafe] transition-colors font-medium text-base">
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href="/ministries" className="hover:text-[#dbeafe] transition-colors font-medium text-base">
                    {t.footer.ministries}
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="hover:text-[#dbeafe] transition-colors font-medium text-base">
                    {t.footer.getInvolved}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#dbeafe] transition-colors font-medium text-base">
                    {t.footer.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2025 CrossWorlds Connections. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
