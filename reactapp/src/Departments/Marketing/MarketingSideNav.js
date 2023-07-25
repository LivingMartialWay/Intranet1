// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from "react"
import Box from "@cloudscape-design/components/box"
import Popover from "@cloudscape-design/components/popover"
import Link from "@cloudscape-design/components/link"
import { Navigation as CommonNavigation } from "./MarketingNavigation"
import { DensityPreferencesDialog } from "../../Components/Common/density-preferences"

const navItems = [
    { type: "link", text: "Dashboard", href: "#/" },
    {
        type: "link",
        text: "Demo Report",
        href: "admin/AdminTestReport",
        info: (
            <Box color="text-status-info" variant="span">
                <Popover
                    header="WDVCB Test Report"
                    size="medium"
                    triggerType="text"
                    content={
                        <>
                           Our first report on our new table format!
                        </>
                    }
                    renderWithPortal={true}
                    dismissAriaLabel="Close"
                >
                    <Box
                        variant="span"
                        color="text-status-info"
                        fontSize="body-s"
                        fontWeight="bold"
                        data-testid="new-feature-announcement-trigger"
                    >
                        New
                    </Box>
                </Popover>
            </Box>
        )
    },
    { type: "link", text: "Calander Master", href: "#/Tags" },
    { type: "link", text: "Newsletters", href: "#/Newsletters" },
    { type: "link", text: "Board Reports", href: "#/BoardReports" },
    {
        text: "Solicitations",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Listings", href: "#/instances" },
            { type: "link", text: "Solicitation Calender", href: "#/spot_requests" }
        ]
    },
    {
        text: "VG Contracts",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "VG Agreement Listings", href: "#/amis" },
            { type: "link", text: "Reports", href: "#/volumes" },
        ]
    },
    {
        text: "Documents & Guidelines",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Research Documents", href: "#/amis" },
            { type: "link", text: "Brand Guidelines", href: "#/volumes" },
        ]
    },
    {
        text: "Tools",
        type: "section",
        defaultExpanded: false,
        items: [
            {
                type: "link",
                text: "Upload Documents",
                href: "#/launch_configurations"
            }
        ]
    },
    { type: "divider" },
    {
        type: "link",
        href: "#/density_settings",
        text: "Density settings"
    }
]

export function DashboardSideNavigation() {
    const [dialogVisible, setDialogVisible] = useState(false)
    const onFollowHandler = event => {
        event.preventDefault()
        if (event.detail.href === "#/density_settings") {
            setDialogVisible(true)
        }
    }

    return (
        <>
            <CommonNavigation
                items={navItems}
                activeHref="#/"
                onFollowHandler={onFollowHandler}
            />
            {dialogVisible && (
                <DensityPreferencesDialog onDismiss={() => setDialogVisible(false)} />
            )}
        </>
    )
}
