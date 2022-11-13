import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import { BiSend } from 'react-icons/bi'

export const SendInput = () => {
    return (
        <div className='flex justify-between'>
            <TextInput
                id="email4"
                type="text"
                placeholder="message"
                required={true}
                icon={BiSend} 
                className = "w-full"
            />
            <Button>Send</Button>
        </div>
    )
}
