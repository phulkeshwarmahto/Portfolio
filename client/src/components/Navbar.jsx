import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-gray-900 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white';
    };

    return (
        <nav className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300 border-b border-transparent dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center py-6">
                    {/* Logo */}
                    <div>
                        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
                            Phulkeshwar<span className="text-amber-500">.</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition text-gray-700 dark:text-gray-200"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-900 dark:text-white focus:outline-none">
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        <Link to="/" className={`${isActive('/')} transition`}>Home</Link>
                        <Link to="/about" className={`${isActive('/about')} transition`}>About</Link>
                        <Link to="/skills" className={`${isActive('/skills')} transition`}>Skills</Link>
                        <Link to="/projects" className={`${isActive('/projects')} transition`}>Projects</Link>
                        <Link to="/contact" className={`${isActive('/contact')} transition`}>Contacts</Link>
                    </div>

                    {/* Auth / Admin & Theme Toggle (Desktop) */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition text-gray-700 dark:text-gray-200"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                        </button>

                        {user ? (
                            <>
                                <Link to="/dashboard" className="text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-amber-500 transition">Dashboard</Link>
                                <button onClick={logout} className="text-sm font-medium text-red-500 hover:text-red-400 transition">Logout</button>
                            </>
                        ) : (
                            // Hidden for regular visitors essentially, or subtle
                            <Link to="/login" className="text-xs font-medium text-gray-300 dark:text-neutral-700 hover:text-gray-500 dark:hover:text-neutral-500 transition">Admin</Link>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md absolute top-full left-0 w-full border-t border-gray-100 dark:border-neutral-800 shadow-lg flex flex-col items-center py-6 space-y-6 transition-all duration-300 z-40">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/')} text-lg`}>Home</Link>
                        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/about')} text-lg`}>About</Link>
                        <Link to="/skills" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/skills')} text-lg`}>Skills</Link>
                        <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/projects')} text-lg`}>Projects</Link>
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`${isActive('/contact')} text-lg`}>Contacts</Link>

                        {user ? (
                            <>
                                <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 dark:text-gray-200">Dashboard</Link>
                                <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="text-lg font-medium text-red-500">Logout</button>
                            </>
                        ) : (
                            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-300 dark:text-neutral-700">Admin Login</Link>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
