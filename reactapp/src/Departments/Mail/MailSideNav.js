// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from "react"
import Box from "@cloudscape-design/components/box"
import Popover from "@cloudscape-design/components/popover"
import Link from "@cloudscape-design/components/link"
import { Navigation as CommonNavigation } from "./MailNavigation"
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
    { type: "link", text: "Calander", href: "#/Tags" },
    {
        text: "Visitor Guides",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Reports", href: "#/instances" },
            { type: "link", text: "Processing", href: "#/spot_requests" },
            { type: "link", text: "Order Entry", href: "#/instances" },
        ]
    },
    {
        text: "Area Racks",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Delivery App", href: "#/snapshots" },
            { type: "link", text: "Locations", href: "#/amis" },
            { type: "link", text: "Last Delivery", href: "#/volumes" },
            { type: "link", text: "Reports", href: "#/bundle_tasks" }
        ]
    },
    {
        text: "Postage",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Logs", href: "#/amis" },
            { type: "link", text: "Processes", href: "#/volumes" },
            { type: "link", text: "Final Report", href: "#/bundle_tasks" }
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
