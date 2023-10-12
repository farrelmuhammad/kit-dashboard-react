import React from 'react'

const Sidebar = () => {
    return (
        <>
            <aside className="w-72" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-gray-100 shadow-lg shadow-gray-400/50 rounded-lg max-h-screen">
                    <div className="text-center my-4">
                        <div className="flex flex-col items-center">
                            <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                                className="h-20 w-20 rounded-full object-cover mb-4" alt="User Profile" />
                            <p className="text-xl font-semibold">Welcome back, User.</p>
                            <p className="text-gray-500 text-xl">Have a great day ahead. 👋</p>
                        </div>
                    </div>

                    <ul className="mb-1">
                        <li>
                            <a id="menu-1"
                                className="flex items-center px-3 py-4 text-base font-normal rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white">
                                <i className="fas fa-house-user transition duration-75 text-lg"></i>
                                <span className="ml-3">Home</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="mb-1">
                        <li>
                            <a id="menu-2"
                                className="flex items-center px-3 py-4 text-base font-normal rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white">
                                <i className="pl-1 fas fa-file-invoice text-lg"></i>
                                <span className="ml-4">Finance</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="mb-1">
                        <li>
                            <a id="menu-3"
                                className="flex items-center px-3 py-4 text-base font-normal rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white">
                                <i className="fas fa-money-bills text-lg"></i>
                                <span className="ml-3">Employee</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="mb-1">
                        <li>
                            <a href="" id="menu-4"
                                className="flex items-center px-3 py-4 text-base font-normal rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white">
                                <i className="pl-1 fas fa-user text-lg"></i>
                                <span className="ml-4">Profile</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="mb-1">
                        <li>
                            <a href="" id="menu-4"
                                className="flex items-center px-3 py-4 text-base font-normal rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white">
                                <i className="pl-1 fas fa-user text-lg"></i>
                                <span className="ml-4">Profile</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar