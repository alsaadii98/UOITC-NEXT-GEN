import React, {useState} from 'react';
import {MenuAlt3Icon, XIcon} from '@heroicons/react/solid'
import NavBarContent from "./NavBarContent";
const MobileNav = (props) => {

    const [show, setShow] = useState(false)
    return (
        <div>

            <>
                {!show ? (
                    <button onClick={() => setShow(!show)} className={'text-3xl absolute right-8 top-6 cursor-pointer'}>
                        <MenuAlt3Icon className="h-7 w-7 text-red-800"/>
                    </button>
                ) : (
                    <button onClick={() => setShow(!show)} className={'fixed top-6 right-8 z-10'}>
                        <XIcon className="h-7 w-7 text-red-800"/>
                    </button>
                )

                }
                <div
                    className={`z-50 top-[88px] p-7 right-0 w-[50vw] md:w-[50vw] shadow-lg bg-white border-l-[1px] border-slate-700
                        text-white fixed h-full ${show ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-500 `}>
                    <NavBarContent classes={'flex flex-col '}/>
                </div>
            </>

        </div>
    );
};

export default MobileNav;


// <XIcon className="h-7 w-7 text-red-800"/>