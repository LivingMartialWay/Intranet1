// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from "react"
import Box from "@cloudscape-design/components/box"
import Popover from "@cloudscape-design/components/popover"
import Link from "@cloudscape-design/components/link"
import { Navigation as CommonNavigation } from "./HRNavigation"
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

    { type: "link", text: "HR Calander", href: "#/Tags" },
    { type: "link", text: "Org Chart", href: "#/Newsletters" },
    { type: "link", text: "Employee Schedule", href: "#/BoardReports" },
    {
        text: "Recruiting",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "", href: "#/volumes" },
            { type: "link", text: "Online Reservations", href: "#/snapshots" },
            { type: "link", text: "Guest List", href: "#/volumes" },
            { type: "link", text: "Table Assignments", href: "#/snapshots" },
            { type: "link", text: "Tickets & Scanner", href: "#/snapshots" },
        ]
    },
    {
        text: "Department Documents",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Plans", href: "#/instances" },
            { type: "link", text: "Updatable Plan", href: "#/spot_requests" }
        ]
    },
    {
        text: "Employee Documents",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Medical Plan - Dean", href: "#/amis" },
            { type: "link", text: "Dental Plan - Metlife", href: "#/amis" },
            { type: "link", text: "Vision - Superior", href: "#/volumes" },
            { type: "link", text: "AFLAC", href: "#/snapshots" },
            { type: "link", text: "401K - Epic", href: "#/bundle_tasks" }
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
