import React from 'react'
import { Announcement } from './Announcement'
import { AsideBar } from './AsideBar'
import { SendInput } from './SendInput'

export const MainPage = () => {
    return (
        <>
            <div className='flex '>
                <AsideBar />
                <div className='flex flex-col w-full'>
                    <Announcement />
                    <div className='w-full min-h-[61vh] '>

                    </div>
                    <SendInput />
                </div>
            </div>

        </>
    )
}
