// components/Footer.tsx
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-orange-500" />
              Budhanilkantha, Kathmandu
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-orange-500" />
              <a href="mailto:mnsh6313@gmail.com" className="hover:underline">mnsh6313@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500" />
              <a href="tel:+9779818918867" className="hover:underline">+977 9818918867</a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={18} className="text-orange-500" />
              <a
                href="https://www.linkedin.com/in/manish-poudel-976787148/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm text-gray-400 md:text-right flex flex-col justify-end">
          <p>&copy; {new Date().getFullYear()} Manish Poudel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
