// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from "react"
import Box from "@cloudscape-design/components/box"
import Popover from "@cloudscape-design/components/popover"
import Link from "@cloudscape-design/components/link"
import { Navigation as CommonNavigation } from "./FestivalsNavigation"
import { DensityPreferencesDialog } from "../../Components/Common/density-preferences"

const navItems = [
    { type: "link", text: "Dashboard", href: "#/" },
    {
        type: "link",
        text: "Test Report!",
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
    { type: "link", text: "Calender", href: "#/Tags" },
    { type: "link", text: "Daily Log", href: "#/Newsletters" },
    { type: "link", text: "Online Forms", href: "#/limits" },
    {
        text: "Plaza",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Staffing", href: "#/instances" },
            { type: "link", text: "Event Calender", href: "#/spot_requests" },
            { type: "link", text: "Daily Log", href: "#/spot_requests" },
            { type: "link", text: "Sales Reports", href: "#/spot_requests" },
            { type: "link", text: "Document Repository", href: "#/spot_requests" }
        ]
    },
    {
        text: "Dells On Tap",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Registration", href: "#/amis" },
            { type: "link", text: "Listing", href: "#/bundle_tasks" }
        ]
    },
    {
        text: "Volunteers",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Roster", href: "#/volumes" },
            { type: "link", text: "Schedule", href: "#/snapshots" },
            { type: "link", text: "Waiver", href: "#/lifecycle_manager" }
        ]
    },
    {
        text: "Tools",
        type: "section",
        defaultExpanded: false,
        items: [
            {
                type: "link",
                text: "Document Repository",
                href: "#/launch_configurations"
            },
            {
                type: "link",
                text: "Log Update",
                href: "#/auto_scaling_groups"
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
