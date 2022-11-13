import { Button, Sidebar } from 'flowbite-react'
import React from 'react'
import { Image } from 'react-bootstrap'
import { BiBuoy } from 'react-icons/bi'
import { DiCss3, DiHtml5, DiJavascript1 } from 'react-icons/di'
import { HiChartPie, HiViewBoards, HiTable, HiArrowSmRight, HiShoppingBag, HiUser, HiInbox } from 'react-icons/hi'
import student from './male-student.png'
export const AsideBar = () => {
    return (
        <div className="w-fit border-2">
            <Sidebar aria-label="Sidebar with logo branding example">
                <div className='flex flex-col items-center border-b-2 pb-2 border-gray-200'>
                    <Image src={student} className='rounded-full w-1/2 mb-4' />
                    <Button className='w-1/2'><span className='text-sm'> Edit</span></Button>
                    <p className='text-center mt-3 text-2xl'>Student Name</p>
                </div>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <p className='text-center pr-5 text-xl'>Classes</p>
                        <Sidebar.Item
                            href="#"
                            icon={DiJavascript1}
                        >
                            JavaScript
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={DiHtml5}
                        >
                            HTML5
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={DiCss3}
                        >
                            CSS3
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={HiChartPie}
                        >
                            Upgrade to Pro
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiViewBoards}
                        >
                            Documentation
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={BiBuoy}
                        >
                            Help
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}
