import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook, 
  FaWhatsapp 
} from "react-icons/fa";
import CV from '../assets/CV.pdf'
import { DownloadIcon, MessageCircle } from 'lucide-react'
import hero from '../assets/hero.png'

const Hero = ({ darkMode }) => {
    const socialIcons = [
        {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/thilina-nirmal-aa488322a/",
            color: "hover:text-blue-600"
        },
        {
            icon: <FaGithub />,
            href: "https://github.com/thilina1999904",
            color: "hover:text-gray-800"
        },
        {
            icon: <FaInstagram />,
            href: "https://www.instagram.com/nirmal_thilina/",
            color: "hover:text-pink-500"
        },
        {
            icon: <FaFacebook />,
            href: "https://web.facebook.com/thilina.malshan.568/",
            color: "hover:text-blue-500"
        },
        {
            icon: <FaWhatsapp />,
            href: "https://wa.me/94713595423",
            color: "hover:text-green-500"
        }
    ];

    const theme = darkMode ? {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: `text-white border-2 border-orange-500 hover:bg-orange-500/20`,
        decorativeCircle: 'bg-orange-500 opacity-10',
        iconBase: 'text-white'
    } : {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: `text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white`,
        decorativeCircle: 'bg-orange-400 opacity-20',
        iconBase: 'text-gray-600'
    };

    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            <div className={`absolute top-20 right-[-10%] w-72 h-72 rounded-full blur-3xl ${theme.decorativeCircle}`}></div>

            <section id='home'
                data-aos='fade-up'
                data-aos-delay='250'
                className='body-font z-10'>
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-20 mt-14'>

                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mt-20 mb-12 lg:mb-0'>

                        {/* Social Icons Section */}
                        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                            {socialIcons.map((social, index) => (
                                <a key={index}
                                    href={social.href}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    data-aos='zoom-in'
                                    data-aos-delay={400 + index * 100}
                                    className={`text-3xl sm:text-4xl transform hover:scale-125 transition-all duration-300 ${theme.iconBase} ${social.color}`}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <h1 className={`title-font text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            Hi, I'm <span className='text-orange-500'>Thilina Nirmal</span>
                        </h1>

                        <p className={`mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
                            data-aos='fade-up'
                            data-aos-delay='600'>
                            A passionate Full-Stack Developer specializing in building scalable web applications with modern technologies. I turn complex problems into simple, beautiful, and intuitive designs.
                        </p>

                        <div className='w-full pt-4 sm:pt-6'>
                            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'
                                data-aos='fade-up'
                                data-aos-delay='700'>

                                <a href={CV} download="Thilina_Nirmal_CV.pdf" className='w-full sm:w-auto'>
                                    <button className={`w-full sm:w-auto inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-3 px-8 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1`}>
                                        <DownloadIcon className='w-5 h-5 mr-2' />
                                        Download CV
                                    </button>
                                </a>

                                <a href="#contact" className='w-full sm:w-auto'>
                                    <button className={`w-full sm:w-auto inline-flex items-center justify-center ${theme.buttonSecondary} py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1`}>
                                        <MessageCircle className='w-5 h-5 mr-2' />
                                        Hire Me
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0'
                        data-aos='fade-left'
                        data-aos-delay='800'>

                        <div className='relative w-full max-w-[450px] lg:max-w-[650px]'>
                            <div className='relative overflow-hidden rounded-2xl'>
                                <img
                                    src={hero}
                                    alt="Hero"
                                    className='w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500 ease-in-out'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;