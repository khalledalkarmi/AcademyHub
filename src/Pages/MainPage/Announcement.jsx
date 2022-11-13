import { Carousel } from 'flowbite-react'
import React from 'react'

export const Announcement = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-70 w-full">
            <Carousel>
                <div className=" h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <p className='text-center mt-5 text-3xl'>Title</p>
                    <p className='text-center mt-1'>Descriptions</p>
                    <p className='text-center mt-1'>Links</p>
                </div>
                <div className=" h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <p className='text-center mt-5 text-3xl'>Title</p>
                    <p className='text-center mt-1'>Descriptions</p>
                    <p className='text-center mt-1'>Links</p>
                </div>
                <div className=" h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <p className='text-center mt-5 text-3xl'>Title</p>
                    <p className='text-center mt-1'>Descriptions</p>
                    <p className='text-center mt-1'>Links</p>
                </div>

            </Carousel>
        </div>
    )
}
