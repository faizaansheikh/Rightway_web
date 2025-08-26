'use client'
import React from 'react'
import { FaHeart } from "react-icons/fa";
import { GiAbstract014 } from "react-icons/gi";
import { GiSpring } from "react-icons/gi";
import { RiMessage3Fill } from "react-icons/ri";
import { TbConeFilled } from "react-icons/tb";
import { PiBracketsRoundBold } from "react-icons/pi";
import MyButton from './MyButton';
import { useTheme } from 'next-themes';
function Expertise() {
    const { theme, setTheme } = useTheme();
    const items = [
        {
            icon: (size, color) => <FaHeart size={size} color={color} />,
            head: 'Guest Experience Enhancement',
            para: 'Drive deeper connections with guests through personalized experiences powered by AI-driven insights, real-time data analytics, and tailored mobile engagement tools.'

        },
        {
            icon: (size, color) => <GiAbstract014 size={size} color={color} />,
            head: 'Reservation & Booking Management Systems',
            para: 'Drive deeper connections with guests through personalized experiences powered by AI-driven insights, real-time data analytics, and tailored mobile engagement tools.'

        },
        {
            icon: (size, color) => <GiSpring size={size} color={color} />,
            head: 'Smart Room & IoT Solutions',
            para: 'Drive deeper connections with guests through personalized experiences powered by AI-driven insights, real-time data analytics, and tailored mobile engagement tools.'

        },
        {
            icon: (size, color) => <RiMessage3Fill size={size} color={color} />,
            head: 'Digital Concierge & Chatbots',
            para: 'Drive deeper connections with guests through personalized experiences powered by AI-driven insights, real-time data analytics, and tailored mobile engagement tools.'

        },
        {
            icon: (size, color) => <TbConeFilled size={size} color={color} />,
            head: 'Data Analytics & Customer Insights',
            para: 'Drive deeper connections with guests through personalized experiences powered by AI-driven insights, real-time data analytics, and tailored mobile engagement tools.'

        },
        {
            icon: (size, color) => <PiBracketsRoundBold size={size} color={color} />,
            head: 'Mobile Apps & In-guest Service Portals',
            para: 'Drive deeper connections with guests through personalized experiences powered by AI-driven insights, real-time data analytics, and tailored mobile engagement tools.'

        }
    ]
    return (
        <>
            <div className='mt-[80px] pb-[50px] '>
                <p className='text-center text-3xl md:text-5xl font-bold px-3'>Expertise: Devsinc’s 360-degree Hospitality Services</p>
                <div className="bg-[] w-full h-auto flex justify-center items-center flex-wrap gap-9 mt-[80px]">
                    {items.map((x, i) => (

                        <div
                            key={i}
                            className={`
                                w-[430px] h-[430px] border ${theme === 'light' ? 'border-black':'border-white'} rounded-[23px] 
             flex flex-col justify-center items-center px-4 
             transition-all duration-300 
             hover:border-[#0EBAB1] hover:!border-[#0EBAB1]
                                `}
                        >
                            <p className=' p-3'>{x.icon(80, '#e3a79bff')}</p>
                            <p className='text-center text-4xl font-extrabold'>{x.head}</p>
                            <p className='text-center text-sm'> {x.para}</p>
                        </div>
                    ))}

                </div>

            </div>
            {/* =================================================== */}
            <p className="text-center text-3xl md:text-5xl font-bold px-3 text-black !my-[60px]">
                Industries we can help you with.
            </p>
            <div
                className="relative w-full min-h-screen bg-fixed bg-bottom bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67722d116a711b1564032f48_card%20BG%20image.avif')",
                }}
            >
                {/* Overlay agar dark/light chahiye */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}

                <div className="relative z-10 mt-[80px] pb-[50px]">


                    <div className="w-full h-auto flex justify-center items-center flex-wrap gap-9 mt-[80px]">
                        {items.map((x, i) => (
                            <div
                                key={i}
                                className="relative w-[430px] h-[430px] rounded-[0] overflow-hidden group cursor-pointer"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80')",
                                    }}
                                ></div>

                                {/* Overlay (optional) */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full p-4">
                                    {/* Title Top Right */}
                                    <p className=" text-start text-white text-xl font-bold  group-hover:opacity-100 transition-all duration-500">
                                        {x.head}
                                    </p>

                                    {/* Push button to bottom */}
                                    <div className="mt-auto flex justify-end">
                                        <MyButton size='18px' label='Explore' type='fill' />

                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertise