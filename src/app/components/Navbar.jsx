import React from 'react'
import MyPopover from './MyPopover'
import { FaChevronDown } from "react-icons/fa";
import MyButton from './MyButton';
import ToggleTheme from './ToggleTheme';
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
    // flex-grow
    const navItems = [
        {
            label: 'WHAT WE DO', items: [],

            body:
                <>
                    <div >
                        <h1 className='mb-3' style={{ fontWeight: 'bolder' }}>Capabilities</h1>
                        <div className=' w-full list-none flex justify-between items-center flex-wrap gap-3'>
                            <div>
                                <h3 style={{ fontWeight: 'bolder', fontSize: '22px' }} className='mb-2 '>Digital Transformation</h3>
                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Web development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>App development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Custom Software Development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>UX/UI Design</li>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontWeight: 'bolder', fontSize: '22px' }} className='mb-2 '>Business Applications</h3>
                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Web development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>App development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Custom Software Development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>UX/UI Design</li>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontWeight: 'bolder', fontSize: '22px' }} className='mb-2 '>E-commerce
                                </h3>
                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Web development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>App development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Custom Software Development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>UX/UI Design</li>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontWeight: 'bolder', fontSize: '22px' }} className='mb-2 '>Emerging Technologies
                                </h3>
                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Web development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>App development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Custom Software Development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>UX/UI Design</li>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontWeight: 'bolder', fontSize: '22px' }} className='mb-2 '>Gaming
                                </h3>
                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Web development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>App development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Custom Software Development</li>
                                    <li className='hover:underline cursor-pointer pb-1'>UX/UI Design</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        },
        {
            label: 'WHO WE HELP', items: [],

            body:
                <>
                    <div >
                        <h1 className='mb-3' style={{ fontWeight: 'bolder' }}>Industries</h1>
                        <div className=' w-full list-none flex  items-center flex-wrap gap-4'>
                            <div>

                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Travel & Hospitality</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Telecommunication </li>
                                    <li className='hover:underline cursor-pointer pb-1'>Oil, Gas, and Energy</li>
                                    <li className='hover:underline cursor-pointer pb-1'>E-commerce</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Healthcare & Pharmaceuticals</li>
                                </div>
                            </div>

                            <div>

                                <div className='text-[17px] ml-2'>
                                    <li className='hover:underline cursor-pointer pb-1'>Public Sector</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Retail & CPG</li>
                                    <li className='hover:underline cursor-pointer pb-1'>StartUps</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Banking & Fintech</li>
                                    <li className='hover:underline cursor-pointer pb-1'>Gaming</li>
                                </div>
                            </div>



                        </div>
                    </div>
                </>
        },
        {
            label: 'WHO WE ARE', items: [],

            body:
                <>
                    <div >

                        <div className=' w-full list-none flex  items-center flex-wrap gap-4'>
                            <div>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>About</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Leadership</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Geographies</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Code of Conduct & Values</li>

                            </div>


                        </div>
                    </div>
                </>
        },
        {
            label: 'HOW WE DELIVER', items: [],

            body:
                <>
                    <div >

                        <div className=' w-full list-none flex  items-center flex-wrap gap-4'>
                            <div>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Blogs</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Case Studies</li>

                            </div>


                        </div>
                    </div>
                </>
        },
        {
            label: 'JOIN DEVSINC', items: [],

            body:
                <>
                    <div >

                        <div className=' w-full list-none flex  items-center flex-wrap gap-4'>
                            <div>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Careers</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Culture</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Diversity, Equity and Inclusion</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Employee Success</li>
                                <li className='hover:underline cursor-pointer pb-1 text-2xl' style={{ fontWeight: 'bolder' }}>Benefits</li>

                            </div>


                        </div>
                    </div>
                </>
        }
    ]
    const logo = () => {
        return <div className='bg-[] h-full  flex items-center text-2xl font-bold ml-3'>Rightway Solution</div>
    }
    return (
        <>
            <div className='fixed top-0 left-0 right-0 z-60  bg-[whitesmoke] h-[70px] w-full   hidden lg:flex justify-between'>
                {logo()}
                <div className='bg-[] h-full flex gap-3 '>
                    <div className='flex items-center'>

                        <ToggleTheme />
                    </div>
                    {
                        navItems.map((x, i) => (
                            <div key={i} className='flex items-center'>
                                <MyPopover elem={x} /><FaChevronDown size={14} />
                            </div>
                            // <Nav.Link key={i} href="">{x.label}</Nav.Link>
                        ))
                    }
                </div>
                <div className='bg-[] h-full flex items-center gap-3'>
                    <div className='hidden xl:flex flex items-center gap-2 '>
                        <MyButton className='ml-12' label='Explore Careers' type='fill' />
                        <MyButton label='Lets Talk Business' type='transparent' />
                    </div>

                    <div className='mx-6 pr-2'>Global</div>
                </div>
            </div>

            <div className=' bg-[whitesmoke] h-[70px] w-full flex justify-between items-center lg:hidden'>
                <div> {logo()}</div>
                <div className='mr-6 cursor-pointer'> <RxHamburgerMenu size={22} className=''/></div>
            </div>
        </>
    )
}

export default Navbar