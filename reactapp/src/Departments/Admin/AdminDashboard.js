// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useRef, useState } from "react"

import AppLayout from "@cloudscape-design/components/app-layout"
import Button from "@cloudscape-design/components/button"
import ContentLayout from "@cloudscape-design/components/content-layout"
import Grid from "@cloudscape-design/components/grid"

import "@cloudscape-design/global-styles/dark-mode-utils.css"
import "../../Components/Common/styles/base.scss"

import { DashboardHeader, DashboardMainInfo } from "./AdminHeader"
import { DashboardSideNavigation } from "./AdminSideNav"
import { Breadcrumbs } from "../../Components/Common/breadcrumbs"
import { Notifications } from "../../Components/Common/notifications"
import { HelpPanelProvider } from "../../Components/Common/help-panel"


import {
    BaseStaticWidget,
    alarms,
    serviceOverview,
    instanceHours,
    serviceHealth,
    events,
    instanceLimits,
    networkTraffic,
    accountAttributes,
    featuresSpotlight,
    zoneStatus
} from "./widgets"

function Content() {
    return (
        <Grid
            gridDefinition={[
                { colspan: { l: 8, m: 8, default: 12 } },
                { colspan: { l: 4, m: 4, default: 12 } },
                { colspan: { l: 6, m: 6, default: 12 } },
                { colspan: { l: 6, m: 6, default: 12 } },
                { colspan: { l: 6, m: 6, default: 12 } },
                { colspan: { l: 6, m: 6, default: 12 } },
                { colspan: { l: 6, m: 6, default: 12 } },
                { colspan: { l: 6, m: 6, default: 12 } },
                { colspan: { l: 8, m: 8, default: 12 } },
                { colspan: { l: 4, m: 4, default: 12 } }
            ]}
        >
            {[
                serviceOverview,
                serviceHealth,
                instanceHours,
                networkTraffic,
                alarms,
                instanceLimits,
                events,
                zoneStatus,
                featuresSpotlight,
                accountAttributes
            ].map((widget, index) => (
                <BaseStaticWidget key={index} config={widget.data} />
            ))}
        </Grid>
    )
}

function AdminDashboard() {
    const [toolsOpen, setToolsOpen] = useState(false);
    const [toolsContent, setToolsContent] = useState(() => <DashboardMainInfo />);
    const appLayout = useRef(null);

    const handleToolsContentChange = content => {
        setToolsOpen(true)
        setToolsContent(content)
        appLayout.current.focusToolsClose()
    };

    return (
        <HelpPanelProvider value={handleToolsContentChange}>
            <AppLayout
                ref={appLayout}
                content={
                    <ContentLayout
                        header={
                            <DashboardHeader
                                actions={<Button variant="primary">Launch instance</Button>}
                            />
                        }
                    >
                        <Content />
                    </ContentLayout>
                }
                breadcrumbs={
                    <Breadcrumbs items={[{ text: "Dashboard", href: "#/" }]} />
                }
                navigation={<DashboardSideNavigation />}
                tools={toolsContent}
                toolsOpen={toolsOpen}
                onToolsChange={({ detail }) => setToolsOpen(detail.open)}
                notifications={<Notifications />}
            />
        </HelpPanelProvider>
    )
}

export default AdminDashboard;
