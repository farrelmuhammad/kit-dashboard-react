import React, { useState } from 'react'
import { FiBarChart, FiChevronDown, FiChevronUp, FiChevronsLeft, FiCreditCard, FiDollarSign, FiHome, FiMenu, FiServer, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom'

const Sidebar = ({ onClick, onToggle }) => {
    const menu = {
        menus: {
            home: {
                name: 'Home',
                path: '/dashboard',
                icon: <FiHome />
            },
            balance: {
                name: 'Balance',
                path: '/balanace',
                icon: <FiBarChart />
            },
            invoices: {
                name: 'Invoices',
                path: '/invoices',
                icon: <FiServer />,
                children: {
                    pending: {
                        name: 'Pending',
                        path: '/invoices/pending',
                    },
                    paid: {
                        name: 'Paid',
                        path: '/invoices/paid',
                    }
                }
            },
            cards: {
                name: 'Cards',
                path: '/cards',
                icon: <FiCreditCard />,
                children: {
                    credit: {
                        name: 'Credit',
                        path: '/cards/credit',
                    },
                    debit: {
                        name: 'Debit',
                        path: '/cards/debit',
                    }
                }
            },
            transaction: {
                name: 'Transaction',
                path: '/transaction',
                icon: <FiDollarSign />,
                children: {
                    sales: {
                        name: 'Sales',
                        path: '/transaction/sales',
                    },
                    purchases: {
                        name: 'Purchases',
                        path: '/transaction/purchases',
                    },
                    expenses: {
                        name: 'Expenses',
                        path: '/transaction/expenses',
                    },
                }
            },
            setting: {
                name: 'Setting',
                path: '/setting',
                icon: <FiSettings />
            },
        }
    };

    const [openDropdown, setOpenDropdown] = useState(null);
    const [activeMenu, setActiveMenu] = useState("home");

    const handleDropdown = (key) => {
        if (openDropdown === key) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(key);
        }
    };

    console.log(onToggle)

    return (
        <>
            <aside className={["fixed top-0 left-0 w-1/5 h-full"]}>
                <div className="overflow-y-auto py-4 px-3 shadow-lg shadow-gray-100/50 rounded-lg h-screen">
                    <div className="flex justify-center py-2 h-1/5">
                        <Link to="/">
                            <img
                                className="drop-shadow-2xl h-20 w-full rounded-xl  lg:block"
                                src="https://images.squarespace-cdn.com/content/v1/63ddda469149b12c9c203af6/1675628199265-KEWZ4J18F595C7TURI8U/Krusty+Krab+Logo.jpg?format=1000w"
                                alt="Burger King Delivery"
                            />
                        </Link>
                    </div>
                    {/* <div>
                        <button
                            type='button'
                            className=''
                            onClick={toggleSidebar}
                        >
                            <FiMenu />
                        </button>
                    </div> */}
                    {/* <div className="text-center mt-8 my-4">
                        <div className="flex flex-col items-center">
                            <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                                className="h-20 w-20 rounded-full object-cover mb-4" alt="User Profile" />
                            <p className={[toggle === true ? "hidden" : "text-xl font-semibold"]}>Welcome back, User.</p>
                            <p className={[toggle === true ? "hidden" : "text-gray-500 text-xl"]}>Have a great day ahead. 👋</p>
                        </div>
                    </div> */}

                    <ul className="h-2/3">
                        {Object.keys(menu.menus).map((key, index) => (
                            <li key={index}>
                                {menu.menus[key].children ? (
                                    // Render a dropdown if "children" exist
                                    <div>
                                        <span
                                            className={`flex items-center px-6 py-4 w-full text-base font-normal rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white ${activeMenu === key ? "bg-orange-500 text-white" : "text-gray-500"
                                                }`}
                                            onClick={() => {
                                                handleDropdown(key);
                                                setActiveMenu(key);
                                            }}
                                        >
                                            {menu.menus[key].icon}
                                            <span className="ml-3">{menu.menus[key].name}</span>
                                            {openDropdown === key ? (
                                                <FiChevronUp className="ml-auto" />
                                            ) : (
                                                <FiChevronDown className="ml-auto" />
                                            )}
                                        </span>
                                        {openDropdown === key && (
                                            <ul className="pl-8">
                                                {Object.keys(menu.menus[key].children).map((subKey, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to={menu.menus[key].children[subKey].path}
                                                            className={`flex items-center px-6 py-4 text-base font-normal rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white ${activeMenu === subKey ? "bg-orange-500 text-white" : "text-gray-500"
                                                                }`}
                                                            onClick={() => setActiveMenu(subKey)}
                                                        >
                                                            <span className="ml-6">{menu.menus[key].children[subKey].name}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    // Render a regular menu item
                                    <Link
                                        to={menu.menus[key].path}
                                        className={`flex items-center px-6 py-4 text-base font-normal rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white ${activeMenu === key ? "bg-orange-500 text-white" : "text-gray-500"
                                            }`}
                                        onClick={() => setActiveMenu(key)}
                                    >
                                        {menu.menus[key].icon}
                                        <span className="ml-3">{menu.menus[key].name}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-auto">
                        <button
                            type='button'
                            onClick={onClick}
                            className='p-2 m-2'
                        >
                            <FiChevronsLeft />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar