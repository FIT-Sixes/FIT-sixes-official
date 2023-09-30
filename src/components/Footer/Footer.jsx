// local imports
import itfsuLogo from '../../assets/ITFSU-logo.png';
import logo from '../../assets/footer-logo.png';

const Footer = () => {
    return (
        <footer className='bg-[#151632] bg-opacity-[0.47] pt-19 h-600 '>

            <div className='container'>
                <div className='items-center justify-between pt-6 sm:flex md:gap-8'>

                    {/*===========footer left=========*/}

                    <div className="items-center justify-center p-4 mb-6 ml-auto sm:w-2/5 sm:flex">
                        <div className="bg-[#D9D9D9] bg-opacity-[0.65] p-4 rounded-[15px] mr-50 flex">
                            <div className="w-1/3">
                                <img src={itfsuLogo} alt='' />
                            </div>
                            <div className="w-2/3 ml-4">
                                <p className="text-black-500 font-500 font-[18px] mt-2">Proudly presented by:</p>
                                <h2 className="text-l font-500 mb-2 font-[18px] mt-2">IT FACULTY STUDENTS&rsquo; UNION</h2>
                                <p className="text-black-500 font-500 font-[18px]">University of Moratuwa</p>
                            </div>
                        </div>
                    </div>

                    {/*===========footer right=========*/}

                    <div className='w-full pl-8 mb-6 sm:w-2/3'>
                        <div>
                            <ul className='flex items-center justify-center gap-6 pr-6 mt-6'>
                                <li>
                                    <a className='text-white font-[400] text-[15px]' href='#'>Home</a>
                                </li>
                                <li>
                                    <a className='text-white font-[400] text-[15px]' href='#'>Live Score</a>
                                </li>
                                <li>
                                    <a className='text-white font-[400] text-[15px]' href='#'>About</a>
                                </li>
                                <li>
                                    <a className='text-white font-[400] text-[15px]' href='#'>Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className='border-b border-white border-[4px] border-opacity-[0.3] hidden md:flex w-[110%] justify-center mt-6'></div>

                        <div className='flex flex-wrap items-center justify-center gap-4 pr-8 mt-6 mb-5 md:gap-3'>
                            <span className='text-white font-[400] text-[20px]'>
                                Follow us:
                            </span>
                            <span className='w-[35px] h-[35px] cursor-pointer text-center'>
                                <a href='#' className='text-white font-[500] text-[30px]' target="_blank" rel="noopener noreferrer"
                                ><i className="ri-discord-line"></i></a>
                            </span>
                            <span className='w-[35px] h-[35px] cursor-pointer text-center'>
                                <a href='#' className='text-white font-[500] text-[30px]' target="_blank" rel="noopener noreferrer"
                                ><i className="ri-instagram-line"></i></a>
                            </span>
                            <span className='w-[35px] h-[35px] cursor-pointer text-center'>
                                <a href='#' className='text-white font-[500] text-[30px]' target="_blank" rel="noopener noreferrer"
                                ><i className="ri-facebook-circle-fill"></i></a>
                            </span>
                            <span className='w-[35px] h-[35px] cursor-pointer text-center'>
                                <a href='#' className='text-white font-[500] text-[30px]' target="_blank" rel="noopener noreferrer"
                                ><i className="ri-twitter-fill"></i></a>
                            </span>
                        </div>
                    </div>

                    <div className="w-full p-4 mb-8 sm:w-1/6">
                        <div className="w-3/3 ">
                            <img src={logo} alt='' className='hidden w-32 mr-40 h-43 md:flex' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
