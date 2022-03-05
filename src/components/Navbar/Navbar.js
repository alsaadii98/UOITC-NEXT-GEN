import React from 'react';
import {Link} from "react-router-dom";
import NavBarContent from "./NavBarContent";
import MobileNav from "./MobileNav";
const NavBar = () => {
    return (
        <div className=''>
            <nav className={'w-full flex flex-wrap justify-between items-center py-7 px-16 lg:px-20  shadow-lg '}>
                {/*Logo*/}
                <div>
                    <span className={'text-red-800 text-xl lg:text-2xl font-bold'}>
                        <Link to={'/'} >UOITC</Link>
                    </span>
                </div>
                {/*Content*/}
                <div className={'hidden lg:block'}>
                    <NavBarContent/>
                </div>
                {/*Mobile Menu*/}
                <div className={'block lg:hidden'} >
                    <MobileNav/>
                </div>
            </nav>

        </div>
    );
};

export default NavBar;
