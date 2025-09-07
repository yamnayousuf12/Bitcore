import React from 'react';
import Image from 'next/image';
import { DashboardImages } from "@/assests/dashboard"


interface DiscordLinkProps {
  link: string;
  buttonText: string;
}

const DiscordLink: React.FC<DiscordLinkProps> = ({ link, buttonText }) => {
  return (
    <div className="bg-[#2a2f3a]  rounded-lg space-y-4 w-[500px] h-[200px]"> {/* Increased width and height */}
      <a href={link} className="flex items-center justify-between py-2 px-4 bg-[#0066FF] text-white rounded-lg hover:bg-[#5a6f9e] w-full">
        <div className="flex items-center">
          <Image 
            src={DashboardImages.discordlogo} 
            alt="Discord Logo"
            width={30} 
            height={30} 
            className="mr-3"
          />
          <span className="text-sm">Discord</span>
        </div>
      </a>
      <div className="mt-16 text-center">
        <a href={link} className="text-white bg-[#0066FF] py-1 px-4 rounded-lg border-none hover:bg-[#0055cc]">
          {buttonText} {/* Button text is dynamic */}
        </a>
      </div>
    </div>
  );
}

export default DiscordLink;

