import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {MenuAlt3Icon, XIcon} from '@heroicons/react/solid'

const Navbar = () => {
    const links = [
        {name: 'Home', path: '/'},
        {name: 'Colleges', path: '/'},
        {name: 'Centers & Dep', path: '/'},
        {name: 'Services', path: '/'},
        {name: 'Media', path: '/'},
        {name: 'I3CAT', path: '/'},
        {name: 'NTICT21', path: '/'},
    ]
    const [open, setOpen] = useState(false)

    return (<div>

        <div className={'shadow-md w-full fixed top-0 left-0'}>
            <div className={'md:flex items-center justify-between bg-white py-4 md:px-10 px-7'}>

                <div className={'font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'}>
                    <h1 className={'text-3xl text-red-800 pt-2'}>
                        UOITC
                    </h1>
                </div>
                <div onClick={() => setOpen(!open)}
                     className={'text-3xl absolute right-8 top-6 cursor-pointer md:hidden'}>
                    {open ? <XIcon className="h-7 w-7 text-red-800"/> :
                        <MenuAlt3Icon className="h-7 w-7 text-red-800"/>}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12
                    absolute md:static bg-white md:z-auto z-[-1] right-0 w-80 h-screen md:h-auto md:w-auto md:pl-0 pl-9
                    transition-all duration-500 ease-in ${open ? 'top-16 opacity-100':'top-16 right-[-490px]'}
                    md:opacity-100 shadow-lg md:shadow-none`}>
                    {
                        links.map((item, index) => {
                            return <li key={index} className={'md:ml-8 text-sm md:my-0 my-7'}>
                                <Link to={item.path} className={'text-gray-700 hover:text-red-800 duration-500'}>
                                    {item.name}
                                </Link>
                            </li>
                        })
                    }
                </ul>

            </div>
        </div>
    </div>);
};

export default Navbar;
