import { useConfig } from '@/hooks/use-config';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const { config } = useConfig();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={config.bot.avatar} 
              alt={config.bot.name} 
              className="w-10 h-10 rounded-full transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              {config.bot.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/commands" className="text-gray-300 hover:text-white transition-colors">
              Commands
            </Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms
            </Link>
            <a 
              href={config.bot.supportServer}
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>
            <a 
              href={config.bot.inviteUrl}
              className="bg-purple-600/80 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Discord
            </a>
            {config.navigation.showDashboard && (
              <Link 
                to={config.navigation.dashboardUrl}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all hover:scale-105"
              >
                Dashboard
              </Link>
            )}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 bg-black/90 p-4 rounded-lg backdrop-blur-lg">
            <Link to="/commands" className="text-gray-300 hover:text-white transition-colors">
              Commands
            </Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms
            </Link>
            <a 
              href={config.bot.supportServer}
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>
            <a 
              href={config.bot.inviteUrl}
              className="bg-purple-600/80 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Discord
            </a>
            {config.navigation.showDashboard && (
              <Link 
                to={config.navigation.dashboardUrl}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-center"
              >
                Dashboard
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}