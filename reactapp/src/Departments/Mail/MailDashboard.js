// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useRef, useState } from "react"

import AppLayout from "@cloudscape-design/components/app-layout"
import Button from "@cloudscape-design/components/button"
import ContentLayout from "@cloudscape-design/components/content-layout"
import Grid from "@cloudscape-design/components/grid"

import "@cloudscape-design/global-styles/dark-mode-utils.css"
/*
import "../../Components/Common/styles/base.scss"
*/
import { DashboardHeader, DashboardMainInfo } from "./MailHeader";
import { DashboardSideNavigation } from "./MailSideNav"
import { Breadcrumbs } from "../../Components/Common/breadcrumbs"
import { Notifications } from "../../Components/Common/notifications"
import { HelpPanelProvider } from "../../Components/Common/help-panel"



import BaseStaticWidget from "../../Components/Widgets/base-static-widget"
import alarms from "../../Components/Widgets/alarms"
import serviceOverview from "../../Components/Widgets/service-overview"
import instanceHours from "../../Components/Widgets/instance-hours"
import serviceHealth from "../../Components/Widgets/service-health"
import events from "../../Components/Widgets/events"
import instanceLimits from "../../Components/Widgets/instance-limits"
import networkTraffic from "../../Components/Widgets/network-traffic"
import accountAttributes from "../../Components/Widgets/account-attributes"
import featuresSpotlight from "../../Components/Widgets/features-spotlight"
import zoneStatus from "../../Components/Widgets/zone-status"



import ReportTest from "../../Components/Custom/ReportTest/ReportTest";


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
                <BaseStaticWidget key={index} Content={widget.data?.content} config={widget.data} />
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
                            <DashboardHeader />
                        }
                    >
                        <Content />
                    </ContentLayout>
                }
                breadcrumbs={
                    <Breadcrumbs items={[{ text: "Partnership", href: "#/" }]} />
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
