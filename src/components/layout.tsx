import React, { JSX } from "react";
import SideNav from "./sidenav";

interface NavProps {
    children: React.ReactNode
}

const Layout = (props: NavProps) => {
    return (
        <div className="h-screen max-h-screen overflow-hidden flex">
            <SideNav />
            <div className="flex-1 w-full">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;