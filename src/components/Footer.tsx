import React from 'react';
import { ExternalLink } from 'lucide-react';

function Footer() {
  const links = [
    { label: 'Legal', href: '#' },
    { label: 'Privacy Center', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'About Ads', href: '#' },
    { label: 'Accessibility', href: '#' }
  ];

  const socials = [
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Facebook', href: '#' }
  ];

  return (
    <footer className="bg-black text-white p-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Jobs</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">For the Record</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Communities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white transition">For Artists</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Developers</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Advertising</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Investors</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Vendors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Useful links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Support</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Free Mobile App</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {socials.map(social => (
            <a
              key={social.label}
              href={social.href}
              className="bg-zinc-800 hover:bg-zinc-700 transition p-3 rounded-full"
            >
              <span className="sr-only">{social.label}</span>
              <ExternalLink size={20} />
            </a>
          ))}
        </div>
        
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-zinc-400 text-sm mt-8">© 2024 Muziki</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 