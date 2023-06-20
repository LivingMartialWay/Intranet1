import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Route, Routes } from "react-router-dom"
import AppLayout from '@cloudscape-design/components/app-layout';


import {
    BreadcrumbGroup,
    Header,
    Pagination,
    TextFilter,
    SpaceBetween,
    ButtonDropdown,
    Table,
    Button,
    Box,
    Input,
    ContentLayout,
    DashboardSideNavigation,
    ConfigurableWidget,
    ResetButton,
    PageBanner,
    SideNavigation
} from "@cloudscape-design/components";
import TopNavigation from "../../Components/Custom/TopNavigation/TopNavigation";
import ReportTest from "../../Components/Custom/ReportTest/ReportTest";

import "@cloudscape-design/global-styles/index.css"


const navItems = [
    {
        type: 'section',
        text: 'FUCK',
        items: [
            { type: 'link', text: 'Pages', href: '#/pages' },
            { type: 'link', text: 'Users', href: '#/users' },
        ],
    },
    {
        type: 'section',
        text: 'YOU',
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
        text: 'Accounting',
        href: '/Accounting',
    },
];

const columnDefinitions = [
    {
        id: 'name',
        cell: item => item.name,
        header: 'Name',
        minWidth: 160,
        isRowHeader: true,
    },
    {
        id: 'type',
        header: 'Type',
        cell: item => item.type,
        minWidth: 100,
    },
    {
        id: 'size',
        header: 'Size',
        cell: item => item.size,
        minWidth: 100,
    },
    {
        id: 'description',
        header: 'Description',
        cell: item => item.description,
        minWidth: 100,
    },
];

const Content = () => {
    return (
       <board />
    );
};


export default () => {
    return (
        <AppLayout
            stickyNotifications
            toolsHide
            ariaLabels={{ navigationClose: 'close' }}
            navigation={<SideNavigation activeHref="#/pages" items={navItems} />}
            breadcrumbs={<BreadcrumbGroup items={breadcrumbs} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />}
            contentType="table"
            content={<Content />}

        />
    );
}