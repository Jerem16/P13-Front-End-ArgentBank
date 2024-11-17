import React from "react";
import LogoLink from "./LogoLink";
import UserNav from "./UserNav";

import "./header.scss";

function Header() {

    return (
        <header>
            <nav className="main-nav">
                <LogoLink />
                <UserNav />
            </nav>
        </header>
    );
}

export default Header;
