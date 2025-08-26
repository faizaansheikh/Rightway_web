'use client'
import React from 'react'
import { bgMain } from '../config'
import MyButton from './MyButton'
import MyCard from './MyCard';
import Image from 'next/image';
import { CiTimer } from "react-icons/ci";

import { BiWorld } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
function Insights() {
  const cards1 = [
    {
      type: "Case Study",
      title: "Enabling Seamless Resale Operations Across E-Commerce",
      description: "",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      button: true,
    },
    {
      type: "Blogs",
      title: "Custom Web Application Development",
      description: "Everything You Need to Know",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      button: true,
    },

  ];

  const cards2 = [
    {
      type: "Case Study",
      title: "Enabling Seamless Resale Operations Across E-Commerce",
      description: "",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      button: true,
    },
    {
      type: "Blogs",
      title: "Custom Web Application Development",
      description: "Everything You Need to Know",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      button: true,
    },
    {
      type: "Blogs",
      title: "Custom Web Application Development",
      description: "Everything You Need to Know",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      button: true,
    },

  ];
  const cards3 = [

    {
      type: "Blogs",
      title: "Custom Web Application Development",
      description: "Everything You Need to Know",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      button: true,
    },
    {
      type: "Blogs",
      title: "Custom Web Application Development",
      description: "Everything You Need to Know",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      button: true,
    },
    {
      type: "Blogs",
      title: "Custom Web Application Development",
      description: "Everything You Need to Know",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      button: true,
    },

  ];
  return (
    <>
      <div className='bg-[] w-full h-[] border-black flex items-center justify-center flex-wrap mt-[70px]'>
        <div className='bg-[] w-[600px] h-full  '>
          <p style={{ color: bgMain }} className='text-lg'>Featured Insights </p>
          <p style={{ color: '' }} className='text-5xl font-normal bg-gradient-to-r from-[#0C4965] to-[#0EAFAA] bg-clip-text text-transparent'>
            Stories of our transformations across Services and Industries
          </p>
          <p className='text-4xl font-normal'>From Concept to Completion</p>
          <MyButton size='20px' label='Explore More' type='fill' />
        </div>


        <div
          className="w-[] h-auto bg-cover bg-bottom relative"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/676e9f62110cb8cf1a078e8d_featured%20insight%20gradient.avif')",
            backgroundPosition: "",// yahan se control milega
          }}
        >
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-white/50"></div>

          {/* Content upar hi rahega */}
          <main className="relative z-10 p-8 flex items-center justify-center gap-4 flex-col md:flex-row">
            <div>
              {cards1.map((card, i) => (
                <MyCard key={i} {...card} />
              ))}
            </div>

            <div>
              {cards2.map((card, i) => (
                <MyCard key={i} {...card} />
              ))}
            </div>

            <div>
              {cards3.map((card, i) => (
                <MyCard key={i} {...card} />
              ))}
            </div>
          </main>
        </div>


      </div>



      <div className='bg-[] w-full h-[auto] px-12 flex items-center mt-[130px] flex-wrap'>
        <div className='bg-[] w-[100%] lg:w-[50%] h-full  '>
          <p style={{ color: '' }} className='text-5xl font-normal bg-gradient-to-r from-[#0C4965] to-[#0EAFAA] bg-clip-text text-transparent'>
            Enhance Your Travel Business with Cutting-Edge Solutions
          </p>
          <p className='text-2xl font-normal'>Whether it’s building personalized travel apps or
            optimizing customer service, we specialize in helping travel and
            hospitality businesses innovate.</p>

        </div>
        <div className='hidden bg-[] w-[50%] h-full  lg:flex justify-end '>
          {/* <div className="w-full h-full rounded-[10px] border border-black relative overflow-hidden"> */}
          <CiTimer size={180} color={bgMain} />
          {/* </div> */}

        </div>
      </div>


      {/* ==================================== */}

      <div className='bg-[] w-full h-[] px-12 flex items-center justify-between mt-[30px] flex-col lg:flex-row'>
        <div className='bg-[] w-[100%] md:w-[40%] lg:w-[40%] h-full  '>
          <label className='mb-1'>First Name*</label> <br />
          <input type="text" className='rounded-1 border-1 border-[grey] px-2 bg-[#F5F8FA] w-full h-[40px] mb-4' />

          <label className='mb-1'>Last Name*</label> <br />
          <input type="text" className='rounded-1 border-1 border-[grey] px-2 bg-[#F5F8FA] w-full h-[40px] mb-4' />


          <label className='mb-1'>Email*</label> <br />
          <input type="text" className='rounded-1 border-1 border-[grey] px-2 bg-[#F5F8FA] w-full h-[40px] mb-4' />


          <label className='mb-1'>Phone Number*</label> <br />
          <div className='flex'>
            <input type="select" className='w-[200px] rounded-1 border-1 border-[grey] px-2 bg-[#F5F8FA] h-[40px] mb-4 ' />
            <input type="text" className='rounded-1 border-1 border-[grey] px-2 bg-[#F5F8FA] w-full h-[40px] mb-4 ' style={{ marginLeft: '10px' }} />
          </div>

          <label className='mb-1'>Budget*</label> <br />
          <input type="text" className='rounded-1 border-1 border-[grey] px-2 bg-[#F5F8FA] w-full h-[40px] mb-4' />

          <label className='mb-1'>Company name*</label> <br />
          <input type="text" className='rounded-1 border-1 border-[grey] px-2 bg-[#F5F8FA] w-full h-[40px] mb-4' />

          <label className='mb-1'>Company domain / URL</label> <br />
          <input type="text" className='rounded-1 border-1 border-[grey] px-2 bg-[#F5F8FA] w-full h-[40px] mb-4' />

            <button className='px-4 py-2 bg-[#0C3A53] text-[white]'>Submit</button>
          {/* <p className='font-bold'>Services you're looking for</p> */}
          {/* <div className=''>
            <input type="checkbox" className='rounded-1 border-1 border-[grey]  bg-[#F5F8FA] w-full h-[20px] mb-4' /> kai kren ab
           <span> <label>kia karen ab</label></span>
          </div> */}



        </div>
        <div className=' bg-[] w-[60%] h-full  flex flex-col justify-start items-center md:ml-16 p-4'>
          <div className='my-9 flex items-start'>
            <span className='flex items-start  '> <BiWorld size={60} color='#105882' className='mr-6' /></span>
            <div>
              <p className='text-6xl font-normal bg-gradient-to-r from-[#0C4965] to-[#0EAFAA] bg-clip-text text-transparent'>Global Presence</p>
              <p className='text-[24px]'>We're across 5 continents, explore our office nearest to you.</p>
              <MyButton size='20px' label='Learn More' type='fill' />
            </div>
          </div>

          <div className='my-9 flex items-start'>
            <span className='flex items-center'> <IoMdPeople size={60} color='#105882' className='mr-6' /></span>
            <div>
              <p className='text-6xl font-normal bg-gradient-to-r from-[#0C4965] to-[#0EAFAA] bg-clip-text text-transparent'>Global Leaders</p>
              <p className='text-[24px]'>Our capability and competencies are backed by diverse leadership.</p>
              <MyButton size='20px' label='Learn More' type='fill' />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Insights