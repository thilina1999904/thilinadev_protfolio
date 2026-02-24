import { motion, AnimatePresence } from 'framer-motion'; // AnimatePresence එකතු කළා
import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contacts', link: '#contact' },
    ];

    const lightColors = {
        navBg: 'bg-linear-to-l from-white/90 via-white/80 to-orange-100/100 border-orange-200/50 shadow-orange-100/50',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-500',
        textActive: 'text-orange-600',
        indicator: 'bg-orange-500',
        button: 'from-orange-500 to-amber-500' 
    };

    const darkColors = {
        navBg: 'bg-gray-800/80',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-400',
        textActive: 'text-orange-400',
        indicator: 'bg-orange-400',
        button: 'from-orange-600 to-amber-600'
    };

    const colors = darkMode ? darkColors : lightColors;

    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <div className='flex justify-center w-full fixed z-50 mt-4 px-4'>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`flex items-center space-x-4 lg:space-x-8 ${colors.navBg} backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg relative`}
            >
                {/* Logo */}
                <a href='/' className={`text-xl font-bold ${colors.textPrimary}`}>
                    Thilina<span className='text-orange-500'>Dev</span>
                </a>

                {/* Nav Links (Desktop) */}
                <div className='hidden lg:flex items-center space-x-6'>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            onClick={() => handleNavClick(item.name)}
                            className='relative'
                        >
                            <span className={`font-medium ${activeSection === item.name.toLowerCase() ? colors.textActive : colors.textSecondary}`}>
                                {item.name}
                            </span>
                            
                            {activeSection === item.name.toLowerCase() && (
                                <motion.div
                                    layoutId="indicator"
                                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${colors.indicator} rounded-full`}
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                >
                    {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>

                {/* Hire Me (Desktop) */}
                <motion.a 
                    href='#contact'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white shadow-md`}
                >
                    Hire Me
                </motion.a>

                {/* Mobile Menu Button */}
                <div className='flex lg:hidden items-center'>
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                    >
                        {isMenuOpen ? (
                            <X className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                        ) : (
                            <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }} // opacity 1 විය යුතුයි පෙනෙන්නට නම්
                            exit={{ opacity: 0, y: -20 }}
                            className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg rounded-xl shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                        >
                            <div className='px-4 py-3 space-y-2'>
                                {navItems.map((item) => (
                                    <a 
                                        key={item.name}
                                        href={item.link}
                                        onClick={() => handleNavClick(item.name)}
                                        className='block'
                                    >
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className={`py-3 px-4 rounded-lg text-center ${activeSection === item.name.toLowerCase() ? (darkMode ? 'bg-gray-800' : 'bg-orange-50') : ''}`}
                                        >
                                            <span className={`font-medium ${activeSection === item.name.toLowerCase() ? colors.textActive : colors.textSecondary}`}>
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    </a>
                                ))}
                                <motion.a
                                    href="#contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    whileTap={{ scale: 0.95 }}
                                    className={`block py-3 px-4 text-center font-semibold rounded-lg bg-gradient-to-r ${colors.button} text-white shadow-md`}
                                >
                                    Hire Me
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Navbar;