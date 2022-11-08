import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="mb-16">
            <div className="bg-gray-100">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">The</span>
                            </span>{' '}
                            quick, brown fox jumps over a lazy dog
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                    <div className="flex items-center sm:justify-center">
                        <Link to="/login">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-600 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </button>
                        </Link>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 text-center  text-3xl pb-2">
                <p className="bg-gray-100 p-0 m-0">Our Partner</p>
            </div>
            <div className="relative px-4 sm:px-0">
                <div className="absolute inset-0 bg-gray-100 h-1/2" />
                <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                    <div className="inline-block p-8 text-center ">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/128px-Orange_logo.svg.png" className="m-3"></img>
                        <p className="font-bold tracking-wide text-gray-800">
                            Orange
                        </p>
                    </div>
                    <div className="inline-block p-8 text-center">
                        <img src="https://avatars.githubusercontent.com/u/14060406?v=4" className="m-1 "></img>

                        <p className="font-bold tracking-wide text-gray-800">
                            simplonline
                        </p>
                    </div>
                    <div className="inline-block p-8 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/640px-Flag_of_Europe.svg.png" className="mt-3 "></img>

                        <p className="font-bold tracking-wide text-gray-800 mt-5">
                            EU
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};