
import React from "react";
import LanguageToggle from './LanguageToggle';

const SideNavigation = ({ children }) => (
    <div className="sideNavigation">
        <div className="language">
            <LanguageToggle />
        </div>
        <div className="links">{children}</div>
    </div>
);

export default SideNavigation;