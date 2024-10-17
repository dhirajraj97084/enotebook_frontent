import React from 'react'
import TopNavbar from '../topNavbar/TopNavbar'
import SideBar from '../sideBar/SideBar'
import Navbar from '../navbar/Navbar'

function Layout({ children }) {
    return (
        <div>
            <div className="content">
                {/* for mobiles */}
                <Navbar/>
                <div className="div lg:hidden">
                    <TopNavbar />
                </div>
                {/* for desktop */}
                <div className="main">
                    <div className="hidden md:block flex-none w-72 h-[42rem] bg-cyan-200">
                        <SideBar />
                    </div>
                    {/* main content  */}
                    <main class="flex-1 min-w-0 overflow-auto ...">
                        <div className=" flex  justify-center">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Layout
