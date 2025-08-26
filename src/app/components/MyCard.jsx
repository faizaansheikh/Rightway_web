'use client'
import Image from "next/image";



export default function MyCard({ type, title, description, image, button }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group w-[230px] h-[220px] mb-4">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        width={230}
        height={220}
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:backdrop-blur-sm transition-all duration-500"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-4 text-white">
        {/* <p className="text-sm font-semibold">{type}</p> */}
        <p className="text-[19px] ">{title}</p>
        <p className="text-[12px]">{description}</p>
        {button && (
          <button className="mt-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#0C4965] to-[#0EAFAA] text-sm font-semibold">
            Explore More
          </button>
        )}
      </div>
    </div>
  );
}
