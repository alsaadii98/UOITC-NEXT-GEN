import React from 'react';
import {Link} from "react-router-dom";
import NavBarContent from "./NavBarContent";
import MobileNav from "./MobileNav";
const NavBar = () => {
    return (
        <div>
            <nav className={'flex flex-wrap justify-between items-center py-7 px-14 lg:px-28 shadow-lg px-12'}>
                {/*Logo*/}
                <div>
                    <span className={'text-red-800 text-2xl font-bold'}>
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
