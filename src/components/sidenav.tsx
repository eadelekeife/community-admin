
import Image from "next/image";

import LogoIcon from "@/app/assets/images/logo.svg";
import DashboardIcon from "@/app/assets/images/icons/event.svg";
import EventsIcon from "@/app/assets/images/icons/event.svg";
import BlogIcon from "@/app/assets/images/icons/blog.svg";
import JobIcon from "@/app/assets/images/icons/job.svg";
import { FiLogOut } from "react-icons/fi";


const SideNav = () => {
    return (
        <div className="w-[280px] h-full bg-white border-r border-solid border-[#EAECF0] px-5 py-7 relative">
            <div className="mb-14 px-5">
                <Image src={LogoIcon} alt="logo icon" />
            </div>
            <ul className="flex flex-col gap-7">
                <li className="flex text-base text-[#667085] items-center gap-3 bg-[#F9FAFB] py-2 px-3 rounded-[6px]">
                    <Image src={EventsIcon} alt="event icon" />
                    Dashboard
                </li>
                <li className="flex text-base text-[#667085] items-center gap-3 py-2 px-3">
                    <Image src={EventsIcon} alt="event icon" />
                    Events
                </li>
                <li className="flex text-base text-[#667085] items-center gap-3 py-2 px-3">
                    <Image src={BlogIcon} alt="blog icon" />
                    Blogs
                </li>
                <li className="flex text-base text-[#667085] items-center gap-3 py-2 px-3">
                    <Image src={JobIcon} alt="job icon" />
                    Job Board
                </li>
            </ul>
            <div className="absolute bottom-8">
                <div className="flex items-start gap-4 border-t-2 pt-8 border-solid border-[#EAECF0]">
                    <div>
                        <h4 className="text-sm font-dmsans text-[#344054] mb-2 font-bold">Admin Name</h4>
                        <p className="font-inter text-sm text-[#475467]">admin@remoteworker.com</p>
                    </div>
                    <div>
                        <FiLogOut className="text-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav;