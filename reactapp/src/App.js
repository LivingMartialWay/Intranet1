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

import TopNavigation from "./Components/Custom/TopNavigation/TopNavigation";


import "@cloudscape-design/global-styles/index.css"
import './App.css';

import AdminDashboard from "./Departments/Admin/AdminDashboard";
import AdminTestReport from "./Departments/Admin/AdminTestReport";


import AccountingDashboard from './Departments/Accounting/AccountingDashboard';


import WDVCBDashboard from "./Departments/WDVCB/WDVCBDashboard";
import FestivalsDashboard from "./Departments/Festivals/FestivalsDashboard";
import HRDashboard from "./Departments/HR/HRDashboard";
import ITDashboard from "./Departments/IT/ITDashboard";
import MailDashboard from "./Departments/Mail/MailDashboard";
import MarketingDashboard from "./Departments/Marketing/MarketingDashboard";
import PartnershipDashboard from "./Departments/Partnership/PartnershipDashboard";
import SalesDashboard from "./Departments/Sales/SalesDashboard";
import VSDashboard from "./Departments/VS/VSDashboard";






function App() {
    return (
        <div className="admin">
            <TopNavigation />
            <Routes>
                <Route path="/" element={<WDVCBDashboard></WDVCBDashboard>} />


                <Route path="/admin/*" element={<AdminDashboard></AdminDashboard>} />


                <Route path="/accounting/*" element={<AccountingDashboard></AccountingDashboard>} />


                <Route path="/festivals/*" element={<FestivalsDashboard></FestivalsDashboard>} />


                <Route path="/HR/*" element={<HRDashboard></HRDashboard>} />


                <Route path="/IT" element={<ITDashboard></ITDashboard>} />


                <Route path="/Mail" element={<MailDashboard></MailDashboard>} />


                <Route path="/Marketing" element={<MarketingDashboard></MarketingDashboard>} />


                <Route path="/Partnership" element={<PartnershipDashboard></PartnershipDashboard>} />


                <Route path="/Sales" element={<SalesDashboard></SalesDashboard>} />


                <Route path="/VS" element={<VSDashboard></VSDashboard>} />


            </Routes>
        </div>
    );
}

export default App;
