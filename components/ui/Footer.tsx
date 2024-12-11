import React from 'react'
import MagicButton from './MagicButton'
import { CiLocationArrow1 } from 'react-icons/ci'
import { socialMedia } from '@/data'
import { info, profile } from 'console'
import { TextGenerateEffect } from './TextGenerateEffect'

export const Footer = () => {
    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
            {/* <div className="w-full absolute left-0 -bottom-72">
                 <img
                 src="/Footer-grid.svg"
                 alt="grid"
                 className='w-full h-full opacity-50'
                 />
            </div> */}


          
    <div className="flex flex-col items-center">
                <h1 className="heading md:text-5xl lg:text-6xl text-white mb-10" >
                    About <span className="text-purple">Me!</span> </h1>
                    
                    <h2 className='relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-10'>
                        Arsalan Hussain
                    </h2>

                <h1 className='mb-5 text-center'> As a 19-year-old, I am a highly motivated individual who is continuing to develop and hone my skills whilst currently studying BSc Cyber security at Manchester Metropolitan University. I am a dependable, industrious individual who is continuously seeking for ways to excel. I am a terrific team player, communicator, and leader, and I am always on time. My goal is to complete my tasks at a high standard. When it comes to addressing problems or coming up with new ideas, I frequently use my initiative. I am a self-assured and determined individual who works well with people of various ages and backgrounds.</h1>
                <h2 className='mb-10 text-center'>I am committed to enhancing my computing and cybersecurity knowledge. My ambition is to enhance my skills and obtain industry experience to pursue a future position. In addition, having studied both computer science and information technology, I have an above-average understanding of computer operation and am proficient at applying technology to a variety of tasks.
                I've honed my programming skills through learning Python, Java, and SQL typescript, as well as participating in independent projects. I am always seeking for methods to expand my expertise in the technological industry, whilst also searching internships and placements that will help launch my career.</h2>
                    </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw] text-white">
                    Like what you <span className="text-purple">see</span> get in contact today!
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-left'>Thank you for visiting my portfolio! I&apos;m always open to connecting with like-minded professionals and exploring new opportunities. Feel free to reach out if you&apos;d like to discuss potential collaborations, projects, or if you have any questions.</p>
                <a href="mailto:Arsalanh7860@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<CiLocationArrow1 />}
                        position="right"
                    />

                </a>


            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className='md:text-base text-sm md:font-normal font-light'>Visual Studio Code has been used for developing this website by hand. It was constructed utilising the subsequent web technologies: NextJS, HTML5, JavaScript, and TypeScript </p>
                <p>Website built by Arsalan Hussain. Copyright © 2024</p>

                <div className="flex items-center md:gap-3 gap-6 ">
                    {socialMedia.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                        >
                            <img src={item.img} alt="icons" width={20} height={20} />
                        </a>


                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer