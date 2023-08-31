import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';

import { Route, Routes } from "react-router-dom"

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { PageLayout } from './Components/PageLayout';
import { callMsGraph } from './graph';
import { ProfileData } from './Components/ProfileData';
import Button from 'react-bootstrap/Button';

import env from './env';
import mockUser from './Mock/User';

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




function Portal() {

    const { instance, accounts } = useMsal();
    const [user, setUser] = useState(null);

    useEffect(() => {

        if (env === "prod") {
            instance
                .acquireTokenSilent({
                    scopes: ["User.Read"],
                    account: accounts[0],
                })
                .then(({ accessToken }) => callMsGraph(accessToken))
                .then((userJSON) => setUser(userJSON));
        } else if (env === "dev") {
            setUser(mockUser); 
        }
    }, []);


    return (
        <div className="admin">
            <TopNavigation user={user} />
            <Routes>
                <Route path="/" element={<WDVCBDashboard user={user}></WDVCBDashboard>} />


                <Route path="/admin/*" element={<AdminDashboard user={user}></AdminDashboard>} />


                <Route path="/accounting/*" element={<AccountingDashboard user={user}></AccountingDashboard>} />


                <Route path="/festivals/*" element={<FestivalsDashboard user={user}></FestivalsDashboard>} />


                <Route path="/HR/*" element={<HRDashboard user={user}></HRDashboard>} />


                <Route path="/IT" element={<ITDashboard user={user}></ITDashboard>} />


                <Route path="/Mail" element={<MailDashboard user={user}></MailDashboard>} />


                <Route path="/Marketing" element={<MarketingDashboard user = {user}></MarketingDashboard>} />


                <Route path="/Partnership" element={<PartnershipDashboard user={user}></PartnershipDashboard>} />


                <Route path="/Sales" element={<SalesDashboard user={user}></SalesDashboard>} />


                <Route path="/VS" element={<VSDashboard user={user}></VSDashboard>} />


            </Routes>
        </div>

    );

}


const MainContent = () => {
    return (
        <div className="App">
            <AuthenticatedTemplate>
                <Portal />
            </AuthenticatedTemplate>
    
            <UnauthenticatedTemplate>
                <h5>
                    <center>
                        Please sign-in to see your profile information.
                    </center>
                </h5>
            </UnauthenticatedTemplate>
        </div>
    );
};
    
function App() {
    return (
        <PageLayout>
            <center>
                <MainContent />
            </center>
        </PageLayout>
    );
}

export default env === 'prod' ? App:Portal;