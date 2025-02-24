import Image from "next/image";
import Layout from "@/components/layout";

import { Table } from "antd";
import { LuCloudDownload } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";

import EventsIcon from "@/app/assets/images/icons/events.svg";
import BlogIcon from "@/app/assets/images/icons/job-grid.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";


export default function Home() {
  const dataSource: any = [];

  const columns = [
    {
      title: 'Activity ID',
      dataIndex: 'activity',
      key: 'activity',
    },
    {
      title: 'Activity Type',
      dataIndex: 'activityType',
      key: 'activityType',
    },
    {
      title: 'Time/Date Stamp',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Email address',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <Layout>
      <div className="p-8">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-bold text-lg mb-2">Welcome back, Admin Name</h4>
            <p className="text-[#475467]">Measure your advertising ROI and track and report website traffic.</p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <button className="bg-accent text-center flex items-center text-white rounded-[8px] p-4 py-4 gap-2 text-sm font-[600]">
                <LuCloudDownload className="text-xl" />
                Create Post
              </button>
              <button className="border-solid border border-[#D0D5DD] border flex items-center justify-center p-4 rounded-[8px]">
                <FaRegBell />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white border-2 border-solid border-[#EAECF0] rounded-[12px] p-6">
            <div className="flex justify-between">
              <div className="flex gap-5 items-center">
                <div>
                  <Image src={BlogIcon} alt="event icon" />
                </div>
                <div>
                  <h4 className="text-base font-[600] text-[#101828]">Total Blog Posts</h4>
                </div>
              </div>
              <div>
                <HiOutlineDotsVertical className="text-xl" />
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-4xl font-jakarta font-bold">0</h2>
            </div>
          </div>
          <div className="bg-white border-2 border-solid border-[#EAECF0] rounded-[12px] p-6">
            <div className="flex justify-between">
              <div className="flex gap-5 items-center">
                <div>
                  <Image src={EventsIcon} alt="event icon" />
                </div>
                <div>
                  <h4 className="text-base font-[600] text-[#101828]">Total Blog Posts</h4>
                </div>
              </div>
              <div>
                <HiOutlineDotsVertical className="text-xl" />
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-4xl font-jakarta font-bold">0</h2>
            </div>
          </div>
          <div className="bg-white border-2 border-solid border-[#EAECF0] rounded-[12px] p-6">
            <div className="flex justify-between">
              <div className="flex gap-5 items-center">
                <div>
                  <Image src={EventsIcon} alt="event icon" />
                </div>
                <div>
                  <h4 className="text-base font-[600] text-[#101828]">Total Blog Posts</h4>
                </div>
              </div>
              <div>
                <HiOutlineDotsVertical className="text-xl" />
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-4xl font-jakarta font-bold">0</h2>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="bg-white border-2 border-solid border-[#EAECF0] rounded-[12px]">
            <div className="items-center justify-between flex p-6">
              <div className="flex gap-2 items-center">
                <h3 className="font-bold text-[#101828] text-lg">Activity</h3>
                <div className="border py-1 border-solid rounded-full px-2 border-[#FCC5DF]">
                  <p className="text-sm text-[#F963AB] font-medium">0 jobs</p>
                </div>
              </div>
              <div>
                <HiOutlineDotsVertical className="text-xl" />
              </div>
            </div>
            <div className="border-t-2 border-solid border-[#EAECF0]">
              <Table dataSource={dataSource} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
