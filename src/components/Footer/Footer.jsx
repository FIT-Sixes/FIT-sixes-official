import Fit1 from '../../assets/FIT 1.png';
import Logo1 from '../../assets/LOGO 1.png';

const Footer = () => {
    return (
            <footer className='bg-[#00C2FF] bg-opacity-[0.47] pt-19 h-600 '>

                <div className='container'>
                  <div className='sm:flex items-center justify-between md:gap-8 pt-6'>

                     {/*===========footer left=========*/}                    

                  
                     <div className=" sm:w-2/5 p-4  mb-6 sm:flex items-center justify-center">

                      <div className="bg-[#D9D9D9] bg-opacity-[0.65] p-4 rounded-[15px] mr-50 flex">

                        <div className="w-1/3">
                        <img src={Fit1} alt='' />
                        </div>

                        <div className="w-2/3 ml-4">
                         <p className="text-black-500 font-500 font-[18px] mt-2">Proudly presented by:</p>
                          <h2 className="text-l font-500 mb-2 font-[18px] mt-2">IT FACULTY STUDENTS&rsquo; UNION</h2>
                          <p className="text-black-500 font-500 font-[18px]">University of Moratuwa</p>
                        </div>

                      </div>

                     </div>



                    {/*===========footer right=========*/}                    
        
                    <div className='w-full sm:w-2/3 pl-8 mb-6'>


                    <div>
                        <ul className='flex items-center justify-center gap-5 pr-8 mt-6'>
                            <li>
                            <a className='text-white font-[400]' href='#'>Home</a>
                            </li>
        
                            <li>
                            <a className='text-white font-[400]' href='#'>Live Score</a>
                            </li>
        
                            <li>
                            <a className='text-white font-[400]' href='#'>About</a>
                            </li>
        
                            <li>
                            <a className='text-white font-[400]' href='#'>Contact Us</a>
                            </li>
        
                        </ul>
                    </div>


                    <div className='border-b border-white border-[4px] border-opacity-[0.3] flex w-[110%] justify-center mt-6'></div>

                      
                      <div className='flex items-center justify-center gap-4 flex-wrap md:gap-3 pr-8 mt-6 mb-5'>
                      
                        <span className='text-white font-[600] text-[15px]'>
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


                    <div className="w-full sm:w-1/6 p-4 mb-8">


                      <div className="w-2/3 ">
                      <img src={Logo1} alt='' className='h-100 mr-40'/>
                      </div>

                      

                    </div>

                    </div>

        
                  </div>
                          
                  
            </footer>
          )
        };
        

export default Footer;