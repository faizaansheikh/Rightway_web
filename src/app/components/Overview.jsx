'use client'
import Image from 'next/image'
import React from 'react'
import { bgMain } from '../config'
import { RiCheckDoubleFill } from "react-icons/ri";
import MyButton from './MyButton';
function Overview() {
    const features = [
        "Streamlining Digitally",
        "Seamless Journey for Customers",
        "Staying Relevant",
    ];

    return (
        <>
            <div className="bg-[] w-full min-h-[500px] flex flex-col lg:flex-row gap-6 p-6 mt-6 md:px-[60px]">
                {/* Left Side - Text */}
                <div className="bg-[] w-full lg:w-1/2 flex flex-col justify-center">
                    <p style={{ color: bgMain }} className='text-lg'>OVERVIEW</p>
                    <p className="text-2xl font-bold">
                        Elevate Guest Experiences with Devsinc’s Digital Solutions
                    </p>
                    <p className="text-[20px]">
                        Devsinc helps the hospitality industry with tailored, digital-first
                        solutions that enhance every phase of the guest journey. From smart
                        hotels to global hotel chains, travel agencies, and food service
                        providers, our technology-driven services create seamless, personalized
                        experiences while optimizing operational efficiency.
                    </p>
                    <p className="text-[20px]">
                        By blending innovative technologies with deep industry insights, we
                        ensure that your guests receive exceptional, tailored interactions at
                        every touchpoint.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="bg-[] w-full lg:w-1/2 h-[430px]">
                    <div className="w-full h-full rounded-[10px] border border-black relative overflow-hidden">
                        <Image
                            src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67722adec789e95331b239b7_overview%20travel-p-2000.jpg"
                            alt="Inside Div Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* ======================================== */}

            <div className="bg-[] w-full min-h-[500px] flex flex-col lg:flex-row gap-6 p-6 md:px-[60px]">
                {/* Left Side - Text */}
                <div className="bg-[] w-full lg:w-1/2 flex flex-col justify-center">
                    <p style={{ color: bgMain }} className='text-lg'>Key challenges of the industry</p>
                    <p className="text-2xl font-bold">
                        Elevate Guest Experiences with Devsinc’s Digital Solutions
                    </p>
                    <p className="text-[20px]">
                        Hospitality is all about creating connections, but legacy systems, operational inefficiencies, and the electrifying pace of
                        tech creates roadblocks. Devsinc’s hospitality solutions address these pain points,
                        helping you modernize, engage, and thrive in a highly competitive landscape.
                    </p>

                </div>

                {/* Right Side - Tick */}
                <div className="bg-[] w-full lg:w-1/2 h-[auto] md:h-[430px]">
                    <div className="w-full h-full flex flex-col items-start md:justify-center">
                        <div className="space-y-6">
                            {features.map((item, index) => (
                                <div key={index}>
                                    <div className="flex items-center gap-3">
                                        <RiCheckDoubleFill className="text-teal-500 text-4xl" />
                                        <p className="text-lg font-medium">{item}</p>
                                    </div>
                                    <hr style={{borderTop:`4px solid ${bgMain}`}} className=" mt-2 w-[auto] md:w-[500px]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


              {/* ======================================== */}
             <div className='bg-[] w-full flex items-center justify-center mt-8 md:mt-0'>
                 <MyButton size='23px' label='Streamline Travel Operations' type='fill' />
             </div>
        </>

    )
}

export default Overview