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
    SideNavigation
} from "@cloudscape-design/components";

import TopNavigation from "./TopNavigation/TopNavigation";
import ReportTest from "./ReportTest/ReportTest";


import "@cloudscape-design/global-styles/index.css"
import './App.css';
import AdminDashboard from "./Admin/AdminDashboard";
import AccountingDashboard from './Accounting/AccountingDashboard';




function App() {
    return (
        <div className="admin">
            <TopNavigation />
            <Routes>
                <Route path="/admin" element={<AdminDashboard></AdminDashboard>} />
                <Route path="/accounting" element={<AccountingDashboard></AccountingDashboard>} />
            </Routes>
        </div>
    );
}

export default App;
