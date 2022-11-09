import React from 'react'
import { Image } from 'react-bootstrap'

import world from './planet-earth.png'
import teacher from './teacher.png'
import team from './team.png'

export const AboutUs = () => {
    return (
        <div className='min-h-screen'>
            <div>
                <h2 className='text-center text-cyan-500 text-6xl'>Our mission</h2>
            </div>
            <div className='mt-5 flex justify-center'>
                <h4 className='text-center shadow-md rounded-md w-2/3 px-3 '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure
                </h4>
            </div>
            <br />
            <div className="flex flex-wrap justify-center gap-2 text-xl ">
                <a href="#philosophy" className="no-underline text-gray-700 hover:bg-slate-200 hover:rounded-xl px-3"><span>Philosophy</span></a>
                <a href="#reach" className="no-underline text-gray-700 hover:bg-slate-200 hover:rounded-xl px-3"><span>Reach</span></a>
            </div>
            <div class="w-full ">
                <section className=' p-6 bg-[#f2f2f2]' id="philosophy">
                    <div class="page-width flex items-center flex-wrap flex-col">
                        <h2 class="text-center ">Our philosophy</h2>

                        <div class="mt-10 text-start w-3/5">
                            <h4>Proven learning approaches</h4>
                            <p className='text-justify'>
                                Teaching is one of the most challenging and complex jobs on the planet.
                                Our digital resources, tools, and learning materials are developed by
                                educational experts to incorporate leading pedagogical practices. They
                                are useful in any type of teaching moment and many can be used to support
                                national education standards.
                            </p>
                        </div>

                        <div class=" text-start w-3/5 mt-4">
                            <h4>Empowered educators</h4>
                            <p className='text-justify'>
                                From school teachers and tutors to home schoolers and parents, engaged
                                adults are the key to unlocking each child's potential and drive to learn.
                                We empower all kinds of educators to teach kids by providing the best
                                educational resources in any form or device to be used at home, at school,
                                and everywhere in-between.
                            </p>
                        </div>

                        <div class=" text-start w-3/5 mt-4">
                            <h4>Unique experiences</h4>
                            <p className='text-justify'>
                                There is no such thing as "one size fits all" in education; each educator
                                and child has unique challenges and goals. We celebrate the diversity of
                                our users by offering differentiated resources that can meet a wide range
                                of educational needs - and raise kids' confidence in learning.
                            </p>
                        </div>

                        <div class=" text-start w-3/5 mt-4">
                            <h4>Conscientious and supportive</h4>
                            <p className='text-justify'>
                                We continue to provide academically sound content of the highest caliber
                                and welcome input from our users as we address issues of equity,
                                diversity, inclusivity and representation. Since we know there are many
                                different approaches to teaching and education, we develop our materials
                                to complement these different philosophies across subjects and grades.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="reach" className='mt-5 p-6'>
                    <div className="flex items-center flex-wrap flex-col">
                        <h2 class="text-h3">Our reach</h2>
                        <p class="text-center w-3/5 mt-4">
                            The people who visit Education.com are the most important part of what we do.<br />
                            We provide learning resources in over 20 countries and six continents. <br />
                            Every user is different, but they share the same goal: to improve the lives of children through education.
                        </p>

                        <div class="flex items-center flex-col">
                            <Image className='w-1/4' src={world}></Image>
                            <div className='mt-2'>
                                Over<span>40,869,242</span> people have signed up as Education.com members
                            </div>
                        </div>

                        <div class="flex justify-around  mt-6">
                            <div class="w-1/4">
                                <Image className='inline-block' src={teacher}></Image>
                                <div className='mt-4 text-xl'>
                                    <span>20,434,621</span> are teachers
                                </div>
                            </div>

                            <div class="w-1/4">
                                <Image className='' src={team}></Image>
                                <div className='mt-4 text-xl'>
                                    <span>10,000</span> new members join every day
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}


