import React, { useEffect, useRef, useState } from 'react'
import { FiBell, FiChevronDown, FiChevronUp, FiSearch, FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { clearData } from '../helpers/redux/slices/authSlice';
import { capitalizeEachWord } from '../helpers/format/helpers';
import ModalNotifications from './modal/ModalNotifications';

const Header = ({ isLoggedIn }) => {
    const userName = useSelector(state => state.auth.user);
    const photoUser = useSelector(state => state.auth.photoUser);
    const notif = useSelector(state => state.notification.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [openDropdown, setOpenDropdown] = useState(false);
    const [openNotifications, setOpenNotifications] = useState(false);

    const nameLocation = location.pathname.split('/');

    const logOut = () => {
        dispatch(clearData(isLoggedIn));
        navigate("/login");
    };

    const handleDropdown = (type) => {
        if (type === 'profile') {
            setOpenDropdown(!openDropdown);
            setOpenNotifications(false);
        } else if (type === 'notifications') {
            setOpenNotifications(!openNotifications);
            setOpenDropdown(false);
        }
    }

    const dropdownRef = useRef(null);

    const closeDropdownOnOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenDropdown(false);
            setOpenNotifications(false);
        }
    };

    useEffect(() => {
        if (openDropdown || openNotifications) {
            document.addEventListener('click', closeDropdownOnOutsideClick);
        } else {
            document.removeEventListener('click', closeDropdownOnOutsideClick);
        }

        return () => {
            document.removeEventListener('click', closeDropdownOnOutsideClick);
        };
    }, [openDropdown, openNotifications]);

    return (
        <>
            <div className="relative flex h-16 items-center justify-between" ref={dropdownRef}>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <span
                        className="flex flex-col text-gray-300 hover:underline rounded-md text-sm font-medium">
                        <span className="text-gray-800 text-2xl">{capitalizeEachWord(nameLocation[1])}</span>
                    </span>
                </div>
                <form className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FiSearch className='text-gray-400' />
                        </div>
                        <input type="text" className="bg-gray-100 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full pl-10 p-2.5" placeholder="Type to search..." required />
                    </div>
                </form>
                <div className="relative gap-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                        type="button"
                        onClick={() => handleDropdown('notifications')}
                        className={["rounded-full bg-gray-100 text-gray-800 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 relative"]}
                    >
                        <FiBell className='text-lg font-bold' />
                        {notif.length > 0 && (
                            <span className="w-3 h-3 bg-red-500 rounded-full absolute top-0 right-0 -translate-x -translate-y-1"></span>
                        )}
                    </button>
                    {openNotifications && (
                        <ModalNotifications notifications={notif} />
                    )}
                    <div>
                        <span
                            className="flex justify-between gap-3 items-center px-4 py-1 w-full text-base font-normal rounded-lg text-gray-500 cursor-pointer hover:bg-orange-500 hover:text-white"
                            onClick={() => handleDropdown('profile')}
                        >
                            <span className="">{capitalizeEachWord(userName)}</span>
                            {photoUser ? (
                                <img src={photoUser}
                                    className="h-12 w-12 rounded-full object-cover" alt="User Profile" />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center text-xl">
                                    {userName.charAt(0).toUpperCase()}
                                </div>
                            )}

                            {openDropdown ? <FiChevronUp className='ml-auto' /> : <FiChevronDown className='ml-auto' />}
                        </span>
                        {openDropdown && (
                            <div className="absolute m-12 p-4 w-[150px] h-auto top-full right-[-50px] mt-1 bg-white border border-gray-300 rounded-lg shadow-lg ">
                                <ul className='flex flex-col justify-start gap-3'>
                                    <li className='text-start'>
                                        <Link to={"/"}
                                            className='hover: text-gray-700 hover:bg-gray-100'
                                        >Profile</Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={logOut}
                                            className='hover: text-gray-700 hover:bg-gray-100'
                                        >Logout</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* <div className="flex space-x-2 justify-center">
                                <button
                                    type="button"
                                    onClick={logOut}
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-red-500 text-white font-extrabold tracking-wide text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Logout
                                </button>
                            </div> */}
                </div >
            </div >
        </>
    )
}

export default Header