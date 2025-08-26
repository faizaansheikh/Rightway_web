import Image from 'next/image'
import React from 'react'

function Section() {
    return (
        <div className='mt-[60px]'>
            {/* <p className="text-center text-3xl md:text-5xl font-normal px-3 text-black !my-[60px]">
                Streamlining Guests Journey
            </p> */}
            <div className='w-full h-auto bg-[]'>
                <div className="relative h-screen w-full">
                    {/* Background Image */}
                    <Image
                        src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67726049c389e6a21779a627_Travel%20%26%20Hospitality%20copy-p-2000.webp"
                        alt="Home Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                </div>
            </div>
            )
}

            export default Section