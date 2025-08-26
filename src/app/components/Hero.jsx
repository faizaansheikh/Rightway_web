'use client'
import Image from "next/image";
import MyButton from "./MyButton";

export default function Hero() {
    return (
        <div className="relative h-screen w-full">
            {/* Background Image */}
            <Image
                src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67722ad8bfbf5b291fbfc107_TRAVEL%20%26%20HOSPITALITY-p-2000.jpg"
                alt="Home Background"
                fill
                className="object-cover"
                priority
            />

            {/* Glass div with content */}
            <div className="absolute inset-0  flex items-center justify-center mt-12 md:mt-68">
                <div className="bg-black/15 backdrop-blur-md rounded-2xl p-8 md:py-22 w-full max-w-6xl mx-4  shadow-lg">
                    <p className="text-xl font-bold text-white mb-2 drop-shadow-lg">Travel & Hospitality</p>
                    <p className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                        Shaping Hospitality’s Future with Smart IT <br /> Solutions
                    </p>
                    {/* <p className="text-lg text-white/90 mb-6">
            This is a beautiful glass effect overlay on a responsive background
            image.
          </p> */}
                    <div className="w-[290px]">
                       
                            <MyButton size='23px' label='Build Guest Experiences' type='fill' />
                       
                    </div>


                </div>
            </div>
        </div>
    );
}
