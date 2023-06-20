import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';

import { Route, Routes } from "react-router-dom"

import {
    AppLayout,
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
    SideNavigation
} from "@cloudscape-design/components";

import TopNavigation from "../TopNavigation/TopNavigation";
import ReportTest from "../ReportTest/ReportTest";


import "@cloudscape-design/global-styles/index.css"

const navItems = [
    {
        type: 'section',
        text: 'Manage',
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
        text: 'Service name',
        href: '#',
    },
    {
        text: 'Pages',
        href: '#',
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
        <Table
            items={[]}
            columnDefinitions={columnDefinitions}
            variant="full-page"
            header={
                <Header
                    variant="awsui-h1-sticky"
                    counter="(0)"
                    actions={
                        <SpaceBetween size="xs" direction="horizontal">
                            <Button disabled>View details</Button>
                            <Button disabled>Edit</Button>
                            <Button disabled>Delete</Button>
                            <Button variant="primary">Create page</Button>
                        </SpaceBetween>
                    }
                >
                    Pages
                </Header>
            }
            stickyHeader={true}
            empty={
                <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
                    <SpaceBetween size="xxs">
                        <div>
                            <b>No pages</b>
                            <Box variant="p" color="inherit">
                                You don't have any pages.
                            </Box>
                        </div>
                        <Button>Create page</Button>
                    </SpaceBetween>
                </Box>
            }
        />
    );
};


export default ()=> {
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