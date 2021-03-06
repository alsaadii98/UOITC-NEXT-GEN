import React, {useState} from 'react';
import {MenuAlt3Icon, XIcon} from '@heroicons/react/solid'
import NavBarContent from "./NavBarContent";
const MobileNav = (props) => {

    const [show, setShow] = useState(false)
    
    return (
        <div className='relative'>

            <div>
                {!show ? (
                    <button onClick={() => setShow(!show)} className={'text-3xl absolute -right-2 -top-4 cursor-pointer'}>
                        <MenuAlt3Icon className="h-7 w-7 text-red-800"/>
                    </button>
                ) : (
                    <button onClick={() => setShow(!show)} className={'absolute -top-4 -right-2 z-50 '}>
                        <XIcon className="h-7 w-7 text-red-800"/>
                    </button>
                )

                }
                <div
                    className={`z-40 justify-center top-[0px] px-10 py-24 right-0 w-[100vw]  shadow-lg bg-white border-l-[1px] border-slate-700
                        text-white fixed h-full ${show ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-500 `}>
                    <NavBarContent classes={'flex flex-col'}/>
                    
                </div>
            </div>

        </div>
    );
};

export default MobileNav;


// <XIcon className="h-7 w-7 text-red-800"/>