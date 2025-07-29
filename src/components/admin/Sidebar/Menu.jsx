import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Menu({ title, icon = null, route, submenu = [] }) {

    const SingleLink = () => (
        <Link className="flex items-center px-4 py-2 mt-3 text-sm text-gray-100 bg-gray-700 bg-opacity-25" to="/">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
            </svg>
            <span className="mx-2 text-gray-400">Dashboard</span>
        </Link>
    )

    const MultipleMenu = () => {
        const [uiElementsOpen, setUiElementsOpen] = useState(false);
        return (
            <div>
                <div
                    onClick={() => setUiElementsOpen(!uiElementsOpen)}
                    className="cursor-pointer flex items-center justify-between w-full px-4 py-2 mt-3 text-sm text-gray-400 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                >
                    <div className="flex items-center">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                        </svg>
                        <span className="mx-2">{title}</span>
                    </div>
                    {icon}
                </div>
                {uiElementsOpen && (

                    <div className="pl-4">
                        {submenu.length > 0 &&
                            submenu.map((menu, i) => (menu.index && <Link
                                className="flex items-center px-4 py-2 mt-2 text-sm text-gray-400 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                                to={menu.route}
                                key={i}
                            >
                                <span className="mx-2">{menu.title}</span>
                            </Link>))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <>
            {
                submenu.length === 0 ? (
                    <SingleLink title={title} route={route || '#'} />
                ) : (
                    <MultipleMenu />
                )
            }
        </>
    )
}
