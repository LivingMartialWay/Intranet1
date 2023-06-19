import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';

import {
    AppLayout,
    BreadcrumbGroup,
    Header,
    Pagination,
    TextFilter,
    SpaceBetween,
    ButtonDropdown,
    SideNavigation
} from "@cloudscape-design/components";

import TopNavigation from "../TopNavigation/TopNavigation";
import ReportTest from '../ReportTest/ReportTest';

import "@cloudscape-design/global-styles/index.css"




const navItems = [
    {
        type: 'section',
        text: 'BIG FUCK',
        items: [
            { type: 'link', text: 'Pages', href: '#/pages' },
            { type: 'link', text: 'Users', href: '#/users' },
        ],
    },
    {
        type: 'section',
        text: 'Set up',
        items: [
            { type: 'link', text: 'Database', href: '#/database' },
            { type: 'link', text: 'Authentication', href: '#/authentication' },
            { type: 'link', text: 'Analytics', href: '#/analytics' },
            { type: 'link', text: 'Predictions', href: '#/predictions' },
            { type: 'link', text: 'Interactions', href: '#/interactions' },
            { type: 'link', text: 'Notifications', href: '#/notifications' },
        ],
    },
];

const breadcrumbs = [
    {
        text: 'Home',
        href: '#',
    },
];


const Content = () => {
    return (
        <ReportTest />
    );
};





function Admin() {
    return (
        <div className="App">
            <TopNavigation />
            <AppLayout
                stickyNotifications
                toolsHide
                ariaLabels={{ navigationClose: 'close' }}
                navigation={
                    <TopNavigation />,
                    <SideNavigation activeHref="#/pages" items={navItems} />
                }
                breadcrumbs={<BreadcrumbGroup items={breadcrumbs} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />}
                contentType="table"
                content={<Content />}
            />

        </div>
    );
}