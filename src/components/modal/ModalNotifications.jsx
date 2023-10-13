import React from 'react'

const ModalNotifications = ({ notifications }) => {
    console.log(notifications);
    return (
        <>
            <div
                className="absolute m-12 p-2 w-[300px] top-full right-[80px] mt-1 bg-white border border-gray-300 rounded-lg shadow-lg ">
                <div className="p-3 flex justify-between">
                    <h5 className="text-lg font-bold text-gray-900">Notifications</h5>
                    <a href="" className="text-gray-900 hover:text-primary-1 text-sm py-1">See All</a>
                </div>
                <ul className='p-3'>
                    {notifications.map((d, index) => (
                        <li key={index}>{d.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ModalNotifications