import React from 'react'
import { useState } from 'react';

const ModalNotifications = ({ notifications }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showChatList, setShowChatList] = useState(true);

    const filteredChats = notifications.filter((chat) =>
        // console.log(chat)
        chat.title
    );

    // Memisahkan chat yang belum dibaca dari chat yang sudah dibaca
    const unreadChats = filteredChats.filter((chat) => !chat.read);
    const readChats = filteredChats.filter((chat) => chat.read);

    // Mengurutkan chat berdasarkan tanggal
    unreadChats.sort(
        (a, b) => new Date(b.lastMessageDate) - new Date(a.lastMessageDate)
    );
    readChats.sort(
        (a, b) => new Date(b.lastMessageDate) - new Date(a.lastMessageDate)
    );

    const sortedChats = [...unreadChats, ...readChats];

    const handleChatClick = () => {
        // Fungsi ini akan dipanggil ketika pengguna mengklik chat di daftar chat
        setShowChatList(false); // Mengubah mode tampilan menjadi chat room
    };

    return (
        <>
            <div
                className="absolute m-12 p-2 w-[400px] top-full right-[80px] mt-1 bg-white border border-gray-300 rounded-lg shadow-lg ">
                <div className="p-3 flex justify-between">
                    <h5 className="text-lg font-bold text-gray-900">Notifications</h5>
                    <a className="text-gray-900 hover:text-primary-1 text-sm py-1">See All</a>
                </div>
                <ul className=''>
                    {sortedChats.map((chat) => (
                        <li key={chat.id} className="mb-1 border-b pb-1 mt-1" onClick={handleChatClick}>
                            {chat.read === false && (
                                <span className="w-3 h-3 bg-red-500 rounded-full absolute"></span>
                            )}
                            <div className="block hover:bg-gray-100 p-4 rounded-lg cursor-pointer">
                                <div className="flex items-center">
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center">
                                            <div className="text-gray-800 hover:underline">
                                                {chat.title}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {new Date(chat.lastMessageDate).toLocaleDateString()}{" "}
                                                {new Date(chat.lastMessageDate).toLocaleTimeString()}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ModalNotifications