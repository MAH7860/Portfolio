import { projects } from '@/data'
import React from 'react'
import { ExpandableCardDemo } from './ExpandableCards'
import { px } from 'framer-motion'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
    return (
                
        <div className='py-20' id="recentprojects">
            <h1 className='heading text-white mb-20'>
                A Small Selection of {''}
                <span className='text-purple'>Recent Projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
          
                    <div  className=" mt-10">
                        <ExpandableCardDemo >
                        

                        </ExpandableCardDemo>
                    </div>
                

            </div>
            </div>

        
    )
}

export default RecentProjects


