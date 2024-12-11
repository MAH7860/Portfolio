import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { CiLocationArrow1 } from 'react-icons/ci'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { FloatingNav } from './ui/FloatingNav'

const Hero = () => {
    return (
        <div className="pb-20 pt-36" >
            <div>
                <Spotlight className="-top-30 -left-10'
            md:-left-32 md:-top-20 h-screen" fill="white" />
                  <Spotlight className="top-15 left-30 h-[70vh]
            w-[50vw]" fill="#c71190" />
                <Spotlight className="top-150 left-full h-[80vh]
            w-[50vw]" fill="#c71190" />
                   <Spotlight className="top-75 left-full h-[80vh]
            w-[50vw]" fill="white" />
        
          
            </div>


            <div  className="h-screen w-full  flex items-center justify-center absolute top-0 left-0">
                <div className="max-w-2xl mx-auto p-4">
                </div>
                <BackgroundBeams />
            </div>

            <div className='flex justify-center relative my-5 z-5'>
                <div className='max-w-[89vw] md:max-w-2xl lg:mac-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold'>
                        My Personal Portfolio
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='A Showcase of my Personal Projects and Skills. '

                    />

                    <p className='text-center md:tracking-wider mb-5 text-sm md:text-lg lg:text-xl text-blue-100'>
                        Hi I&apos;m Arsalan and I am a Current University Student Studing Cyber Security at Manchester Metropolitan University 
                    </p>

                    <a href="#home">
                        <MagicButton
                            title="Show My Work"
                            icon={<CiLocationArrow1 />}
                            position='right'
                        />



                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero