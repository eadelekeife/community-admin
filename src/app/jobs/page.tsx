import Layout from "@/components/layout";

import { Input, Table } from "antd";
import { LuSquarePlus } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";


export default function Home() {
    const dataSource: any = [];

    const columns = [
        {
            title: 'Job Title',
            dataIndex: 'activity',
            key: 'activity',
        },
        {
            title: 'Job Type',
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
            title: 'Remote Location',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            dataIndex: 'email',
            key: 'action',
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
                                <LuSquarePlus className="text-xl" />
                                Create Job Post
                            </button>
                            <button className="border-solid border border-[#D0D5DD] border flex items-center justify-center p-4 rounded-[8px]">
                                <FaRegBell />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="bg-white border-2 border-solid border-[#EAECF0] rounded-[12px]">
                        <div className="grid grid-cols-2 p-6">
                            <div className="flex gap-2 items-center">
                                <h3 className="font-bold text-[#101828] text-lg">Jobs</h3>
                                <div className="border py-1 border-solid rounded-full px-2 border-[#FCC5DF]">
                                    <p className="text-sm text-[#F963AB] font-medium">0 jobs</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex gap-4">
                                    <Input className="bg-white py-3 w-full border-2 border-solid border-[#D0D5DD] rounded-[8px]" />
                                    <div className="bg-white py-3 px-3 border-2 border-solid border-[#D0D5DD] rounded-[8px]">
                                        <LuListFilter className="text-2xl" />
                                    </div>
                                </div>
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
