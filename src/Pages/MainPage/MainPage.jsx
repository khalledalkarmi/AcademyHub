import React from 'react'
import { Announcement } from './Announcement'
import { AsideBar } from './AsideBar'
import { Messages } from './Messages'
import { SendInput } from './SendInput'

export const MainPage = () => {
    return (
        <>
            <div className='flex '>
                <AsideBar />
                <div className='flex flex-col w-full'>
                    <Announcement />
                    <Messages />
                    <SendInput />
                </div>
            </div>

        </>
    )
}
