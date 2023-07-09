
import './index.css'
import logo from './images/logo.webp'
import logo2 from './images/logo2.webp'
import image from './images/Image.webp'
import image1 from './images/Group11.webp'
import image2 from './images/Group12.webp'
import image3 from './images/Rectangle10.webp'
import image4 from './images/Icon2.webp'
import image5 from './images/Icon.webp'
import image6 from './images/Detail.webp'
import image7 from './images/Group10.webp'
import image8 from './images/Detail.webp'
import image9 from './images/youtube.webp'
import image10 from './images/google.webp'
import image11 from './images/netflix.webp'
import image12 from './images/amazon.webp'
import image13 from './images/Avatar.webp'
import image14 from './images/Icon5.webp'
import image15 from './images/Rectangle11.webp'
import image16 from './images/Image2.webp'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TestCard from './components/TestCard'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState,useRef } from 'react';
import Navbars from './components/Navbars'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import emailjs from '@emailjs/browser';
import FooterItems from './components/FooterItems';
function App() {
   const [toggle,setToggle] = useState(false);
    const [abc,setAbc] = useState(true);
    const [start,setStart]= useState(1);
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);

    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(email);
}
    const handleNav = ()=>{
        setToggle(!toggle)
    }
    
    const handleTrue = ()=>{
        setAbc(true)
        if(start > 1){
          setStart(start - 1)
        }else{
            setStart(1)
        }
    }
    const handleFalse = ()=>{
        setAbc(false)
        if(start < 5){
          setStart(start + 1)
        }else{
            setStart(5)
        }
    }

    const form = useRef()
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_c6u6q1g', 'template_4b39pyg', form.current, 'QyQ9efsZzemYUKqOu')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
      })
      .then(()=>{
              form.current.reset()
              setTimeout(()=>{
                setSuccess(false)
              },3000)
      })
    }
  return (
    <div className="App">
        {/* Home page */}
<div id='home' className='homeContainer'>
           <div  className='grid grid-cols-2 sm:grid-cols-12 md:grid-cols-12 md:max-lg:pt-5'>
            <div className='relative mt-5 ml-3 sm:mt-0 w-80 sm:ml-2 md:w-40 md:ml-2 md:mt-2 lg:w-40 lg:mt-8 lg:ml-10 xl:mt-5 xl:ml-20 xl:w-80 '>
                 <a href='#home' aria-label='home page'><img alt='nylos-logo' src={logo} className='md:hidden w-40 ml-2 sm:w-60 sm:mt-7'/></a>
                 <a href='#home' aria-label='home page logo'><img alt='nylos-logo' src={logo2}  className='absolute hidden md:block md:m-0 md:mt-0 md:h-12 lg:h-15 xl:h-20'/></a>
             </div>
            <div className='text-left text-right sm:col-start-3 sm:col-end-13 sm:h-20 md:mr-0 md:pt-5 md:col-start-4 lg:mt-7 lg:mr-0 xl:mr-20'>
                  {
                    !toggle && 
                  <div onClick={handleNav} className='cursor-pointer md:hidden float-right mr-5 mt-7 humbergur'>
                        <span className='bg-white w-6 h-1.5 ml-6 block '></span>
                        <span className='bg-white w-12 h-1.5 block my-2 second'></span>
                        <span className='bg-white w-6 h-1.5 block third'></span>
                    </div> 
}
                <span className='hidden md:inline rounded-full py-6 px-14 h-20 md:px-5 md:pr-0  lg:mt-20 headerSpan'>
                <Navbars href="#home" text="Home" ariaLabel="see our home page"/>
                        <Navbars href="#about" text="About" ariaLabel="Read more about us"/>
                        <Navbars href="#services" text="Services" ariaLabel="Read more about about our services"/>
                        <Navbars href="#testimonial" text="Testimonial" ariaLabel="Read more about Testimonials"/>
                        <Navbars href="#solutions" text="Solutions" ariaLabel="Read more about Solutions"/>                
                    <a href='#footer' aria-label='contact us footer' className='hidden md:block bg-white text-blackText font-bold text-lg rounded-full py-6 px-14 -mr-5 ml-5 md:block md:mt-14 md:float-right md:mr-8 lg:inline lg:mr-0 lg:-mt-5 lg:mr-0 pointer'>Contact Us</a>
                </span>
            </div>
            {
                    toggle &&  
                    <div className='md:hidden pl-6 pr-2 pt-5 h-screen navPhone'>                   
                    <div onClick={handleNav} className='cursor-pointer mb-10 humbergurClose'>
                        <span className='bg-gradient-to-b from-gradientFirst to-gradientSecond w-4 h-1 ml-4 block '></span>
                        <span className='bg-gradient-to-b from-gradientFirst to-gradientSecond w-8 h-1 block my-2 second'></span>
                        <span className='bg-gradient-to-b from-gradientFirst to-gradientSecond w-4 h-1 block third'></span>
                    </div>
                        <Navbars href="#home" text="Home" ariaLabel="see our home page"/>
                        <Navbars href="#about" text="About" ariaLabel="Read more about us"/>
                        <Navbars href="#services" text="Services" ariaLabel="Read more about about our services"/>
                        <Navbars href="#testimonial" text="Testimonial" ariaLabel="Read more about Testimonials"/>
                        <Navbars href="#solutions" text="Solutions" ariaLabel="Read more about Solutions"/> 
                    <img src={logo2}  alt='nylos-logo' className='w-40'/>                
                    <div href='#footer' aria-label='contact us footer' className='mt-10 mb-10 bg-[#F4F4F4] text-blackText font-bold text-md rounded-full py-5 w-40 float-left'>Contact Us</div>
                    <div className='mt-20 pl-3'>
                            <p className='font-lexend font-normal text-sm'>EMAIL US</p>
                            <h1 className='font-lexend font-normal text-2xl'>info@nylos.com</h1>
                    </div>
                    <p className='mt-10 text-gray-400 text-sm'>copyright@nylos.com2023</p>
                </div>
                
                }
        </div>
    <div className=' pr-20 pt-20 grid grid-cols-1 md:grid-cols-2 xl:pt-0'>
        <div className=' w-screen px-5 sm:pl-2 sm:pr-5 md:w-3/4 md:px-2 lg:w-auto lg:pl-7 lg:mt-20 xl:px-20 xl:mt-40'>
            <h1 className='font-bold font-syne text-4xl sm:text-6xl leading-none text-blackText md:text-4xl lg:text-5xl xl:text-6xl'>Experience the Power of Flow with NYLOS.</h1>
            <p className='font-nunito text-text79  mt-3 pt-5 sm:mt-auto sm:leading-9 font-normal text-base sm:text-2xl lg:text-xl'> Harnessing the vitality and continuity of the Nile, NYLOS is your dedicated partner for streamlining HR operations. 
            </p>
            <p className='font-nunito text-text79  mt-3 pt-3 sm:mt-auto sm:leading-9 font-normal text-base sm:text-2xl lg:text-xl'>  From recruiting to retirement, our comprehensive Human Resource Information System (HRIS) allows you to manage your workforce effectively while ensuring compliance with Ethiopian tax and labor laws.
            </p>
            <div className='mt-10 px-14'>
                <button className='font-nunito bg-gradient-to-b from-gradientFirst to-gradientSecond w-60 h-14 sm:w-48 sm:h-16 px-2 py-1 text-white rounded-full sm:mr-2.5 mb-4 font-bold text-lg'>Get Started</button>
                <button className='font-nunito block ml-2 sm:ml-0 sm:inline bg-[#F4F4F4] w-56 h-14 pl-8 sm:pl-0 sm:w-48 sm:h-16 px-1 py-1 rounded-full text-right font-bold text-lg text-white'>
                    <span className='gradientText mr-3'>Watch Video</span>
                      <PlayArrowIcon sx={{fontSize:'3rem'}} className='rounded-full mr-1 px-2 bg-gradient-to-b from-gradientFirst to-gradientSecond' /> 
                </button>
            </div>
        </div>
        <div className='sm:w-screen sm:px-20 text-center md:w-auto md:px-0 lg:-mt-10 xl:mt-20'>
            <img alt='home graphical image' src={image} className='ml-10 w-screen sm:ml-0 sm:-mt-10 mt-0 md:ml-20 md:w-full lg:ml-20 xl:ml-10 homeImage'/>
        </div>
        <div>

        </div>
    </div>
        </div>

       {/* About Page */}

       <div id='about' className='grid grid-cols-1 pt-20 lg:px-0 sm:px-0 md:pt-5 md:pl-3 lg:pt-20 lg:grid-cols-2 lg:pl-5 '>
                <div className='px-5 sm:hidden'>
                    <h1 className='font-nunito font-semibold text-lg gradientText'>Why Choose Us</h1>
{/*                     <h2 className='font-syne font-bold text-2xl'></h2>
 */}                </div>
                <div className='gap-2 py-7 pr-1 grid grid-cols-2 sm:py-0 sm:pr-0 sm:gap-5 md:gap-10 md:pr-20 lg:px-0 lg:py-0 xl:pl-10'>
                    <div className='mx-auto lg:p-0 lg:my-auto'>
                        <img src={image2} alt='partners working on a laptop' className='w-40 h-52 sm:w-80 sm:h-80 lg:h-80 lg:pt-0'/>
                    </div>
                    <div className='row-span-2 sm:pt-20'>
                        <img src={image1} alt='employee working on a laptop' className='h-full sm:w-80 sm:h-full'/>
                    </div>
                    <div className='mx-auto lg:my-auto' >
                        <img alt='software developer' src={image3} className='w-40 h-52 sm:w-80 sm:h-80 lg:h-80'/>
                    </div>
                </div>
                <div className='px-5 sm:pt-10 md:pr-10 lg:pt-52 lg:pr-5 xl:pr-40 '>
                    <h1 className='font-nunito hidden sm:block sm:font-semibold sm:text-lg sm:pb-3 gradientText'>Why Choose Us</h1>
{/*                     <h2 className='font-syne hidden sm:block sm:font-bold sm:text-2xl'>Lorem Ipsum Dolor Sit Amet Consectetur</h2>
 */}                    <p className='font-nunito text-base font-normal text-fadedText mb-7 sm:mt-5'>
                    NYLOS isn't merely an HRIS - it's a robust solution that brings the dynamic power of the Nile to your HR operations. With features designed for efficiency and compliance, NYLOS empowers businesses to navigate their HR tasks with increased productivity and peace of mind. 
                    </p>
                    <p className='font-nunito text-base font-normal text-fadedText mb-7 sm:mb-16'>
                    By choosing NYLOS, you're aligning your business with a partner committed to nourishing your HR functions just like the Nile nourishes the lands it touches.
                    </p>
                    <button className='font-nunito bg-gradient-to-b from-gradientFirst to-gradientSecond w-44 h-14 sm:w-48 sm:h-16 px-2 py-1 text-white rounded-full sm:mr-2.5 mb-4 font-bold text-lg'>Get Started</button>
                </div>
            </div>
   
 {/* Services Page */}
 
 <div id='services' className='text-center pt-20 px-5  md:max-lg:px-8 lg:px-10 '>
                <h1 className='font-nunito font-bold text-lg px-auto text-center gradientText'>Services</h1>
                <h1 className='font-syne text-blackText font-bold text-2xl px-auto pt-3 pb-14 text-center xl:px-80 xl:py-3 xl:text-5xl '>Our services extend beyond providing an HRIS solution.</h1>
                <div className='font-nunito grid grid-cols-1 lg:grid-cols-3 gap-12  xl:px-24 xl:py-10'>
                    <div className='py-10 md:max-lg:grid md:max-lg:grid-cols-2 lg:h-full px-5 lg:pt-5 lg:py-0 xl:py-14 rounded-3xl'>
                        <div className='flex justify-center'>
                            <img alt='continuous support' src={image4} className=' w-80 h-56  xl:w-96 xl:h-60'/>
                        </div>
                        <div className='md:max-lg:pt-10'>
                            <h1 className='font-bold text-3xl text-blackText md:max-lg:pb-5 lg:pt-0 xl:pt-8'>Continuous Support</h1>
                            <p className='font-normal text-text79 text-base py-5 md:max-lg:pb-5 lg:py-10 xl:text-xl'>Our team is always ready to help and answer your queries.</p>
                            <a className='font-bold text-blackText text-lg'>Learn More</a>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-gradientFirst to-gradientSecond md:max-lg:grid md:max-lg:grid-cols-2 xl:h-full px-5 py-14 rounded-3xl lg:pt-7 lg:py-10 xl:py-14'>
                        <div className='flex justify-center'>
                            <img alt='system maintenance' src={image5} className='w-80 h-56  xl:w-96 xl:h-60'/>
                        </div>
                        <div className='md:max-lg:pt-10 text-white'>
                            <h1 className='font-bold text-3xl md:max-lg:pb-5 lg:pt-0 xl:pt-8'>System Maintenance</h1>
                            <p className='font-normal text-base py-5 md:max-lg:pb-5 lg:py-10 xl:text-xl'>We ensure that NYLOS is always up-to-date and running smoothly.</p>
                            <a className='font-bold text-lg '>Learn More</a>
                        </div>
                    </div>
                    <div className='py-10 md:max-lg:grid md:max-lg:grid-cols-2 lg:h-full px-5 lg:pt-5 lg:py-0 xl:py-14 rounded-3xl'>
                        <div className='flex justify-center'>
                            <img alt='user training' src={image6} className=' w-80 h-56  xl:w-96 xl:h-60'/>
                        </div>
                        <div className='md:max-lg:pt-10'>
                            <h1 className='font-bold text-blackText mt-5 md:mt-0 text-3xl md:max-lg:pb-5 lg:pt-0 xl:pt-8'>User Training</h1>
                            <p className='font-normal text-text79 text-base py-5 md:max-lg:pb-5 lg:py-10 xl:text-xl'>We provide comprehensive training to ensure you can make the most out of NYLOS</p>
                            <a className='font-bold text-lg text-blackText'>Learn More</a>
                        </div>
                    </div>
                   
                </div>
            </div>

{/* Feature page */}
<div id='feature' className=' grid grid-cols-1 px-3 mt-20 gap-20 sm:px-5 md:max-lg:px-10 lg:mt-48 lg:mb-20  lg:grid-cols-2 xl:gap-0 xl:px-0 xl:pl-14'>
                <div className='pb-8 px-2 sm:pb-14 sm:px-5 md:px-10 lg:pr-20 lg:pt-20 lg:pb-10 lg:px-5 lg:ml-5 xl:ml-32 featureFirstChild'>
                    <h1 className='font-syne font-bold text-blackText text-4xl  xl:5xl'>Unlock HR Excellence with NYLOS.</h1>
                    <p className='font-nunito font-base text-xl text-text79 my-8'>Just as the Nile's rich silt benefits the lands it touches, NYLOS brings numerous features that benefit your business.</p>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-3 sm:col-span-2 bg-gradient-to-b from-gradientFirst to-gradientSecond rounded-2xl flex justify-center'>
                            <img alt='unlock hr excellence' src={image7} className='w-14 h-24 '/>
                        </div>
                        <div className='col-span-9 pl-5 sm:col-span-10 sm:pl-7 lg:pr-14 lg:pl-5'>
                            <h1 className='font-syne font-bold text-xl pb-3 xl:text-3xl'>HR Management</h1>
                            <p className='font-nunito text-text79'>From attendance tracking to payroll, our platform integrates all aspects of HR into one efficient system.</p>
                        </div>
                    </div>
                </div>
               <div className='w-full sm:w-auto sm:max-md:my-10 pr-10 pl-2 sm:px-16 sm:py-12 lg:pt-10 flex justify-center feature'>
                    <img alt='hr management' src={image8} className='w-auto py-10 sm:py-auto xl:px-14 xl:py-5'/>
                </div> 
            </div>
    
 {/* Testimonal */}
 <div id='testimonial' className=' grid grid-cols-12 mt-10'>
                <div className='col-span-12 px-3 md:px-0 md:col-span-10 md:pl-10 lg:pl-12 xl:pl-40'>
                    <h1 className='font-syne font-semibold text-textBlack text-2xl md:py-3 lg:py-5 xl:py-10 xl:text-6xl'>What client says</h1>
                    <p className='font-lexend font-light text-xl xl:w-1/2'>Our clients' success stories speak volumes about the power of NYLOS. Our comprehensive HRIS solution has helped organizations overcome their HR challenges, streamline their operations, and achieve a state of flow.</p>
                </div>
                <div className='order-3 md:order-none pt-10 pr-5 col-span-12 flex justify-end items-end md:pt-0 md:pr-0 md:justify-start md:col-span-2'>
                    <div onClick={handleTrue} className='bg-[#F4F4F4] rounded-full w-10 h-10 flex justify-center items-center mr-5 hover:bg-gradient-to-b hover:from-gradientFirst hover:to-gradientSecond hover:text-white cursor-pointer'> <ArrowBackIcon/></div>
                    <div onClick={handleFalse} className='bg-[#F4F4F4] rounded-full w-10 h-10 flex justify-center items-center hover:bg-gradient-to-b hover:from-gradientFirst hover:to-gradientSecond hover:text-white cursor-pointer'> < ArrowForwardIcon /></div>
                </div>
                <div className= {(abc) ? 'col-span-12 hidden md:grid gap-5 grid-cols-1 md:-mr-96 lg:-mr-80 lg:px-5 md:grid-cols-5 md:mt-10 lg:mt-20 xl:-mr-80 slideImage' 
                : 'col-span-12 hidden md:grid gap-5 grid-cols-1 md:-ml-96 lg:-ml-80 lg:px-5 md:grid-cols-5 md:mt-10 lg:mt-20 xl:-ml-80 slideImage'} >
                    <TestCard 
                        avatarImage={image13}
                        name='Helen Daniel'
                        position='CHRO'
                        description='NYLOS has transformed our HR operations. The comprehensive solution, with its intuitive features and robust support, has enabled us to streamline our processes, ensure compliance, and foster a productive work environment.'
                        companyImage={image9}
                    />
                    <TestCard 
                        avatarImage={image13}
                        name='Helen Daniel'
                        position='CHRO'
                        description='NYLOS has transformed our HR operations. The comprehensive solution, with its intuitive features and robust support, has enabled us to streamline our processes, ensure compliance, and foster a productive work environment.'
                        companyImage={image10}
                    />
                    <TestCard 
                        avatarImage={image13}
                        name='Helen Daniel'
                        position='CHRO'
                        description='NYLOS has transformed our HR operations. The comprehensive solution, with its intuitive features and robust support, has enabled us to streamline our processes, ensure compliance, and foster a productive work environment.'
                        companyImage={image11}
                    />
                    <TestCard 
                        avatarImage={image13}
                        name='Helen Daniel'
                        position='CHRO'
                        description='NYLOS has transformed our HR operations. The comprehensive solution, with its intuitive features and robust support, has enabled us to streamline our processes, ensure compliance, and foster a productive work environment.'
                        companyImage={image12}
                    />
                    <TestCard 
                        avatarImage={image13}
                        name='Helen Daniel'
                        position='CHRO'
                        description='NYLOS has transformed our HR operations. The comprehensive solution, with its intuitive features and robust support, has enabled us to streamline our processes, ensure compliance, and foster a productive work environment.'
                        companyImage={image12}
                    />
                </div>
                <div className='col-span-12 md:hidden grid gap-5 grid-cols-1 mt-10 px-3'>
                    
                  { (start === 1) ? <TestCard 
                        avatarImage={image13}
                        name='Annette Black'
                        position='Chief Chairman of Netflix'
                        description='Lorem ipsum dolor sit amet consectetur. Felis aliquam non velit netus pellentesque nulla vitae dapibus. Sed sapien nec pharetra pellentesque sollicitudin. Risus mi et vulputate dignissim. Vitae nunc nunc massa.'
                        companyImage={image9}
                        
                    /> : null
                }
                {
                    (start === 2) ? <TestCard 
                        avatarImage={image13}
                        name='Annette Black'
                        position='Chief Chairman of Netflix'
                        description='Lorem ipsum dolor sit amet consectetur. Felis aliquam non velit netus pellentesque nulla vitae dapibus. Sed sapien nec pharetra pellentesque sollicitudin. Risus mi et vulputate dignissim. Vitae nunc nunc massa.'
                        companyImage={image10}
                    /> : null
                }
                    {
                        (start === 3) ? <TestCard 
                        avatarImage={image13}
                        name='Annette Black'
                        position='Chief Chairman of Netflix'
                        description='Lorem ipsum dolor sit amet consectetur. Felis aliquam non velit netus pellentesque nulla vitae dapibus. Sed sapien nec pharetra pellentesque sollicitudin. Risus mi et vulputate dignissim. Vitae nunc nunc massa.'
                        companyImage={image11}
                    /> : null
                    }
                    {
                        (start === 4) ? <TestCard 
                        avatarImage={image13}
                        name='Annette Black'
                        position='Chief Chairman of Netflix'
                        description='Lorem ipsum dolor sit amet consectetur. Felis aliquam non velit netus pellentesque nulla vitae dapibus. Sed sapien nec pharetra pellentesque sollicitudin. Risus mi et vulputate dignissim. Vitae nunc nunc massa.'
                        companyImage={image12}
                    /> : null
                    }
                    {
                        (start === 5) ? <TestCard 
                        avatarImage={image13}
                        name='Annette Black'
                        position='Chief Chairman of Netflix'
                        description='Lorem ipsum dolor sit amet consectetur. Felis aliquam non velit netus pellentesque nulla vitae dapibus. Sed sapien nec pharetra pellentesque sollicitudin. Risus mi et vulputate dignissim. Vitae nunc nunc massa.'
                        companyImage={image12}
                    /> : null
                    }
                    
                </div>
            </div> 
 
{/*      <Solutions/>
 */}   
 {/* Solutions Page */}
 <div id='solutions' className='px-3 my-28 sm:px-5 md:max-lg:my-40 md:px-10 lg:px-14 lg:pt-20 xl:px-24'>
                <h1 className='font-nunito font-bold text-lg text-center gradientText'>Solutions</h1>
                <h2 className='font-syne font-bold text-2xl py-3 sm:py-5 lg:py-10 lg:px-20 lg:text-5xl text-center'>Streamline Your HR Operations with NYLOS.</h2>
                <div className='font-nunito font-bold text-2xl py-5 sm:py-10 xl:text-3xl text-blackText grid grid-cols-1 lg:gap-8 lg:grid-cols-3'>
                    <div className='p-7 text-white bg-gradient-to-b from-gradientFirst to-gradientSecond text-center rounded-xl'>
                        <p>Attendance Tracking</p>
                    </div>
                    <div className='hidden lg:block p-7 bg-gray-100 text-center rounded-xl'>
                        <p>Payslip Generation</p>
                    </div>
                    <div className='hidden lg:block p-7 bg-gray-100 text-center rounded-xl'>
                        <p>Pension Management</p>
                    </div>
                    
                </div> 
                <div className='grid lg:pt-16 lg:grid-cols-2'>
                    <div className='py-5 sm:py-auto sm:pr-40 lg:px-10'>
                        <div className='grid grid-cols-11 gap-0 lg:pb-7'>
                            <div className='col-span-2 flex justify-center p-3 bg-gray-100 rounded-xl'>
                                <img alt='solutions icon' src={image14} />
                            </div>
                            <div className='col-span-9 pl-3'>
                                <h1 className='font-syne font-bold text-3xl lg:text-4xl'>Lorem ipsum dolor sit amet</h1>
                            </div>
                        </div>
                        <p className='pt-7 sm:pt-auto font-nunito font-normal text-base text-text79 lg:text-xl'>Our HRIS is not just a tool; it's a comprehensive solution designed to cater to all your HR needs, such as:
                        </p>
                        <ul className='text-fadedText mt-1'>
                            <li>- Monitor employee work hours effectively for an accurate payroll system</li>
                            <li>- Generate accurate payslips in a click, making payroll process efficient.</li>
                            <li>- Manage employee pension contributions accurately and seamlessly.</li>
                        </ul>
                    </div>
                    <div className='flex pb-10 my-10 md:max-lg:my-10 md:py-auto justify-center lg:justify-left'>
                        <img alt='nylos hris' src={image15} className=' sm:px-8 sm:pb-8'/>
                    </div>
                </div> 
                <div className='lg:hidden font-nunito font-bold text-2xl text-blackText grid gap-8 grid-cols-1'>
                    <div className='p-7 bg-gray-100 text-center rounded-xl'>
                        <p>Lorem ipsum Dolor</p>
                    </div>
                    <div className='p-7 bg-gray-100 text-center rounded-xl'>
                        <p>Lorem ipsum Dolor</p>
                    </div>
                    
                </div>  
            </div>

{/* Booking page */}

<div id='booking' className='w-full lg:w-auto text-white px-3 grid grid-cols-1 pt-10 pb-10 mb-20 lg:pb-0 md:grid-cols-1  md:mt-10 lg:mt-40 lg:mb-28 lg:grid-cols-2 lg:mx-14 lg:pt-10 xl:pt-20 xl:px-10 xl:mx-24 booking'>
              <div className='order-2 px-0 sm:max-md:pl-10 md:max-lg:pl-40 lg:order-1 lg:pt-0 xl:pt-20'>
                <h1 className='font-syne font-bold text-4xl  xl:text-5xl'>Start your Journey today</h1>
                <p className='font-nunito font-normal text-lg xl:py-7'>Leave your email Address below to get started with nylos</p>
                <div className='text-center sm:text-left grid grid-cols-1 xl:gap-36 xl:grid-cols-2'>
                    <div className='py-5 xl:py-0'>
                        <form onSubmit={handleSubmit}>
                            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-80 h-20 rounded-full px-9 py-6 input placeholder-white' placeholder='your mail here...'/>
                        </form>
                    </div>
                    <div className=''>
                        <button className='font-nunito font-bold text-lg h-20 rounded-full px-28 lg:px-9 lg:py-6 bg-white text-blackText'>Get Started</button>
                    </div>
                </div>
            </div>
                
            <div className='order-1 sm:flex sm:justify-center lg:order-2'>
                <img alt='start your journey ' src={image16}/>
            </div>  
            </div>

        {/* Footer page */}

        <div id='footer' className='-mt-60 w-full text-white pl-3 pb-10 grid grid-cols-1 gap-7 pt-10 sm:grid-cols-1 md:mt-10 md:grid-cols-2 md:pt-10 md:gap-0 md:py-20 md:px-10 footer'>
                <div className='order-2 md:order-1 md:pt-48 lg:pt-40 xl:pl-28'>
                    <img alt='nylos-logo' src={logo} className='mt-5'/>
                    <p className='font-nunito font-light text-lg pt-5 pl-6 md:pl-0 lg:pt-10'>Start your Journey today with NYLOS. With our commitment to continuous support and comprehensive HR solutions, NYLOS is here to propel your HR operations into a state of flow. Sign up today to experience the power of the Nile in your business.</p>
                    <ul className='py-5 pl-6 md:pl-0 lg:py-8'>
                        <FooterItems href="#home" text="Home" ariaLabel="see our home page"/>
                        <FooterItems href="#about" text="About" ariaLabel="Read more about us"/>
                        <FooterItems href="#services" text="Services" ariaLabel="Read more about about our services"/>
                        <FooterItems href="#testimonial" text="Testimonial" ariaLabel="Read more about Testimonials"/>
                        <FooterItems href="#solutions" text="Solutions" ariaLabel="Read more about Solutions"/>
                    </ul>
                    <div className='grid grid-cols-12 pl-5 md:pl-0'>
                        <div className='col-span-2 lg:col-span-1 pt-0 pl-5 h-10 mt-5  lg:pl-3 footerLinks text-center flex items-center'>
                            <MailOutlineIcon/>
                        </div>
                        <div className='pt-5 pl-3 col-span-10 lg:col-span-4 '>
                            <p className='font-lexend font-normal text-sm'>EMAIL US</p>
                            <h1 className='font-lexend font-normal text-2xl'>info@nylos.com</h1>
                        </div>
                        <div className='mt-5 col-span-12 xl:mt-0 xl:col-span-7 xl:pl-5'>
                            <p className='font-lexend font-normal text-base mb-5'>--- Connect with us:</p>
                            <ul>
                                <li className='inline text-center px-3.5 pt-3 pb-4 mr-3 footerLinks'>
                                    <FacebookIcon sx={{fontSize:"2rem"}} />                                </li>
                                <li className='inline text-center px-3.5 pt-3 pb-4 mr-3 bg-white rounded-xl text-blackText'>
                                    <TwitterIcon />
                                </li>
                                <li className='inline text-center px-3.5 pt-3 pb-4 mr-3 footerLinks'>
                                    <LinkedInIcon/>
                                </li>
                                <li className='inline text-center  px-3.5 pt-3 pb-4 footerLinks'>
                                    <InstagramIcon/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='order-1 p-12 ml-10 sm:max-md:mx-20 text-black bg-white rounded-2xl mt-80 md:order-2 md:py-7 md:px-5 md:-mt-10 xl:-mt-10 xl:mr-14 xl:ml-20'>
                    <h1 className='font-lexend font-semibold text-2xl xl:font-syne xl:font-bold'>Request A Quote — let’s work together.</h1>
                    <p className='font-lexend font-light text-base py-5'>Embark on your journey with NYLOS. Let us work together to streamline your HR operations and propel your business to new heights of success.</p>
                    <form ref={form}  onSubmit={handleFormSubmit}>
                        <div className='font-lexend font-light text-sm grid grid-cols-2 gap-5'>
                            <div className='col-span-2 lg:col-span-1'>
                                <p>Name</p>
                                <input required name='name' className='w-full h-12 pl-4 rounded-md mt-2 border' type='text' placeholder='Full name'/>
                            </div>
                            <div className='col-span-2 lg:col-span-1'>
                                <p>Email</p>
                                <input required name='email' type='email' className='border w-full h-12 pl-4 rounded-md mt-2' placeholder='Email Address'/>
                            </div>
                            <div className='col-span-2'>
                                <p>Subjects</p>
                                <input    name='subjects'  type='text' placeholder='Subjects' className='border mt-2 w-full pl-4 rounded-md h-12'/>
                            </div>
                            <div className='col-span-2'>
                                <p>Message</p>
                                <textarea required name='message'  className='resize-none mt-2 w-full h-24 pl-4 pt-2 rounded-md border' placeholder='Message'>

                                </textarea>
                            </div>
                            <div>
                                <button type='submit' className='bg-gradient-to-b from-gradientFirst to-gradientSecond text-white rounded-full w-60 h-14 px-8 py-0'>Request A Qoute <ArrowForwardIcon className='ml-3'/></button>
                            </div>
                            <div className='col-span-2'>
                                {
                                    success && <p className='text-red border-2 flex justify-center items-center text-center font-nunito font-bold text-md border-gradientSecond rounded-full w-60 h-14 px-8 py-0 md:w-full'>Successfully Sent Qoute</p>

                                }
                               
                                </div>
                            
                        </div>
                    </form>
                </div>
            </div> 
    </div>
  );
}

export default App;
