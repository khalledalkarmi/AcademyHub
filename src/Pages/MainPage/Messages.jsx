import React from 'react'
import { BiEdit, BiX } from 'react-icons/bi'


//TODO: handle send  and get message
export const Messages = () => {
    return (
        <div className=' max-h-[62vh] h-[62vh] overflow-hidden'>
            <div className='relative mt-10 group'>
                <div className='justify-end text-3xl absolute right-[0%] bottom-[75%] hidden group-hover:flex p-2 shadow-md bg-white rounded-xl '>
                    <BiEdit className='hover:text-cyan-500' />
                    <BiX className='hover:text-red-600' />
                </div>
                <div>
                    <p className='hover:border-cyan-500 hover:border-l-4 px-3 mt-2 hover:bg-gray-100'>
                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    </p>

                </div>

            </div>
        </div>
    )
}
