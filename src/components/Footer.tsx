import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const links = [
    { label: 'Legal', href: '/legal' },
    { label: 'Privacy Center', href: '/privacy' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'About Ads', href: '/about-ads' },
    { label: 'Accessibility', href: '/accessibility' }
  ];

  const socials = [
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Facebook', href: '#' }
  ];

  return (
    <footer className="bg-black text-white p-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/about')} 
                  className="text-zinc-400 hover:text-white transition"
                >
                  About
                </button>
              </li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Jobs</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">For the Record</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Communities</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/for-artists')} 
                  className="text-zinc-400 hover:text-white transition"
                >
                  For Artists
                </button>
              </li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Developers</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Advertising</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Investors</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition">Vendors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Useful links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/support')} 
                  className="text-zinc-400 hover:text-white transition"
                >
                  Support
                </button>
              </li>
              <li>
                <button 
                  className="text-zinc-400 hover:text-white transition"
                >
                  Free Mobile App
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Muziki Plans</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/premium/individual')} 
                  className="text-zinc-400 hover:text-white transition"
                >
                  Premium Individual
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/premium/duo')} 
                  className="text-zinc-400 hover:text-white transition"
                >
                  Premium Duo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/premium/family')} 
                  className="text-zinc-400 hover:text-white transition"
                >
                  Premium Family
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/premium/student')} 
                  className="text-zinc-400 hover:text-white transition"
                >
                  Premium Student
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/muziki-free')} 
                  className="text-zinc-400 hover:text-white transition"
                >
                  Muziki Free
                </button>
              </li>
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
              <button
                key={link.label}
                onClick={() => navigate(link.href)}
                className="hover:text-white transition"
              >
                {link.label}
              </button>
            ))}
          </div>
          <p className="text-zinc-400 text-sm mt-8">© 2024 Muziki</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 