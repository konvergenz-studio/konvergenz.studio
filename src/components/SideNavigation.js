
import React from "react";
import Group from 'react-group';
import LanguageToggle from './LanguageToggle';

const SideNavigation = ({ children }) => (
    <div className="sideNavigation">
        <div className="language">
            <LanguageToggle />
        </div>
        <div className="links">
            <Group separator="&nbsp; &amp; &nbsp;" children={children} />
        </div>
    </div>
);

export default SideNavigation;