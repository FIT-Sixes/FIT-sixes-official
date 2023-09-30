import { useState, useEffect } from 'react';

// local imports
import LogoImg from '../../assets/images/logo.png';
import cross from '../../assets/cross.png'
import hamburger from '../../assets/burger.png';

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

    const navItems = [
        {
            label: 'Live Score',
            path: '#countdown',
        },
        {
            label: 'About',
            path: '#',
        },
        {
            label: 'Contact Us',
            path: '#',
        },
    ];

    const toggleNavbar = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };
    const handleResize = () => {
        setIsMobileView(window.innerWidth < 768);
        if (!isMobileView) {
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobileView]);

    const navbarClass = (scrolling || mobileMenuOpen)
        ? 'bg-[#151632] opacity-0.5 px-4 fixed top-0 left-0 right-0'
        : 'bg-transparent px-4';

    return (
        <nav className={navbarClass}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className='flex items-center text-white'>
                        <img src={LogoImg} alt="logo" className='w-[50px] p-2' />
                        <h2 className="mx-4 text-2xl font-semibold uppercase">FIT Sixes 2K23</h2>
                    </div>

                    <div className="flex items-center lg:hidden w-[40px] justify-center">
                        <button
                            onClick={toggleNavbar}
                            className='text-xl text-white focus:outline-none'
                        >
                            {mobileMenuOpen ? (
                                // Cross button icon
                                <img src={cross} alt="close menu" style={{ width: '30px', height: '30px', fill: 'white' }} />
                            ) : (
                                // Hamburger icon
                                <img src={hamburger} alt="open_menu" style={{ width: '40px', height: '40px', fill: 'white' }} />
                            )}
                        </button>
                    </div>

                    {/* Full-Screen Menu */}
                    <div className="hidden lg:block">
                        <ul className="lg:flex lg:space-x-6">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.path} className='text-white hover:text-[#00C2FF]'>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="bg-[#151632] opacity-0.5 p-4">
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.path} className='text-white hover:text-[#00C2FF]'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
