'use client'
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
//    grid grid-cols-1 md:grid-cols-3
    return (
        <footer
           className="relative w-full bg-cover bg-center  opacity-100 md:px-[60px]"
            style={{
                backgroundImage:
                    "url('https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/677e7900b0e6eb3282894bdc_footer%20gradient.png')",
            }}
        >
            <div className=" px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <h2 className="font-bold">Rightway Solutions</h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg">
                                Pakistan{" "}
                                <span className="font-normal text-sm">
                                    (Global Delivery Center)
                                </span>
                            </h3>
                            <p className="text-sm">
                                Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society,
                                <br /> Lahore, Punjab
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg">
                                UK{" "}
                                <span className="font-normal text-sm">
                                    (Regional Office)
                                </span>
                            </h3>
                            <p className="text-sm">
                                128 City Road London <br />
                                EC1V 2NX, United Kingdom
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-lg">
                            USA{" "}
                            <span className="font-normal text-sm">
                                (Regional Office)
                            </span>
                        </h3>
                        <p className="text-sm">
                            18 S 2nd Street #120 <br /> San Jose, CA, 95113, United
                            States
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">
                            KSA{" "}
                            <span className="font-normal text-sm">
                                (Regional Office)
                            </span>
                        </h3>
                        <p className="text-sm">
                            3141 Anas Ibn Malik Rd, Al Malqa, <br /> Riyadh 13521 KSA
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-lg">
                            UAE{" "}
                            <span className="font-normal text-sm">
                                (Regional Office)
                            </span>
                        </h3>
                        <p className="text-sm">
                            Concord Tower, Dubai Internet City, 9th floor, <br />
                            Black Sea Business Center
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between flex-col md:flex-row px-[20px] md:px-[30px]  py-8  text-sm">
                <div>
                    <p className="font-bold">
                        global.business@devsinc.com
                    </p>

                    <div className="flex space-x-6 mt-4">
                        <a
                            href="#"
                            className="hover:underline text-gray-700 dark:text-gray-300"
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href="#"
                            className="hover:underline text-gray-700 dark:text-gray-300"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="flex md:justify-end text-xl">
                    <FaFacebook className="cursor-pointer mx-2 hover:text-blue-600 dark:hover:text-blue-400" />
                    <FaLinkedin className="cursor-pointer mx-2 hover:text-blue-600 dark:hover:text-blue-400" />
                    <FaInstagram className="cursor-pointer mx-2 hover:text-pink-500 dark:hover:text-pink-400" />
                    <FaXTwitter className="cursor-pointer mx-2 hover:text-black dark:hover:text-gray-200" />
                </div>
            </div>
        </footer>
    );
}
