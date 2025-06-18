import React from 'react';
import { 
  X, 
  FileText, 
  Award, 
  Shield, 
  Users, 
  Mail, 
  Home,
  Briefcase
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Briefcase, label: 'Internship Application', href: '#internship' },
  { icon: FileText, label: 'Offer Letter Generation', href: '#offer-letter' },
  { icon: Shield, label: 'Certificate Verification', href: '#certificate' },
  { icon: Users, label: 'Team Join Form', href: '#team-join' },
  { icon: Mail, label: 'Contact Info', href: '#contact' }
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleLinkClick = (href: string) => {
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:shadow-none lg:w-64`}
        onKeyDown={handleKeyDown}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">MITS</h2>
              <p className="text-xs text-gray-600">Navigation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleLinkClick(item.href)}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-left hover:bg-blue-50 hover:text-blue-700 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  tabIndex={0}
                >
                  <item.icon className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Need Help?</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}