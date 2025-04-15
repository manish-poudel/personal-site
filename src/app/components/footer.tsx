import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-10  border-t border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-red-500" />
              Budhanilkantha, Kathmandu
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-red-500" />
              <a href="mailto:mnsh6313@gmail.com" className="hover:underline">
                mnsh6313@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-red-500" />
              <a href="tel:+9779818918867" className="hover:underline">
                +977 9818918867
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={18} className="text-red-500" />
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

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#works" className="hover:underline">
                My Works
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:underline">
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="text-sm text-gray-400 md:text-right flex flex-col justify-end">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Manish Poudel. All rights reserved.
          </p>
          <p>
            Thank you for your visit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;