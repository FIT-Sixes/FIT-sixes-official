import React, { useState, useEffect } from 'react';
import LogoImg from '../../assets/images/logo 2.png';
import cross from '../../assets/cross.png'
import hamburger from '../../assets/burger.png';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768); // Set your mobile breakpoint here


  const toggleNavbar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY >0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768); // Update your mobile breakpoint here
    if (!isMobileView) {
      // Close the mobile menu when switching to full-screen mode
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
  }, [isMobileView]);

  const navbarClass = scrolling || mobileMenuOpen
    ? 'bg-151632 opacity-0.5 p-4 fixed top-0 left-0 right-0'
    : 'bg-transparent p-4';

  const logoClass = 'text-white';

  const buttonClass = 'text-white';

  const linkClass = 'text-white hover:text-00C2FF';

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className={`flex items-center ${logoClass}`}>
            <img src={LogoImg} alt="logo" style={{ width: '50px', height: '69px' }} />
            <h2 className="text-2xl font-semibold mr-4">fit sixes 2k23</h2>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className={`text-xl focus:outline-none ${buttonClass}`}
            >
              {mobileMenuOpen ? (
                // Cross button icon
                <img src={cross} alt="closs menu" style={{ width: '35px', height: '35px',fill:'white' }} />
              ) : (
                // Hamburger icon
                <img src={hamburger} alt="open_menu" style={{ width: '40px', height: '40px' ,fill:'white'}} />
              )}
            </button>
          </div>

          {/* Full-Screen Menu */}
          <div className="hidden lg:block">
            <ul className="lg:flex lg:space-x-6">
              <li>
                <a href="#" className={linkClass}>
                  Live Score
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-151632 opacity-0.5 p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#" className={linkClass}>
                Live Score
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
