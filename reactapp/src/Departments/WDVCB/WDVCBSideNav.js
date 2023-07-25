// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from "react"
import Box from "@cloudscape-design/components/box"
import Popover from "@cloudscape-design/components/popover"
import Link from "@cloudscape-design/components/link"
import { Navigation as CommonNavigation } from "./WDVCBNavigation"
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
    { type: "link", text: "Bureau Calender", href: "#/Tags" },
    { type: "link", text: "Staff Phone List", href: "#/Newsletters" },
    { type: "link", text: "Time Calculator", href: "#/BoardReports" },
    {
        text: "Strategic Plan",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Plans", href: "#/instances" },
            { type: "link", text: "Updatable Plan", href: "#/spot_requests" }
        ]
    },
    {
        text: "Safety Patrol",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Saftey Patrol Programs", href: "#/amis" },
            { type: "link", text: "Reports", href: "#/volumes" },
            { type: "link", text: "Vouchers", href: "#/snapshots" },
            { type: "link", text: "Update Tools", href: "#/bundle_tasks" }
        ]
    },
    {
        text: "Annual Meeting",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Annual Meeting List", href: "#/volumes" },
            { type: "link", text: "Online Reservations", href: "#/snapshots" },
            { type: "link", text: "Guest List", href: "#/volumes" },
            { type: "link", text: "Table Assignments", href: "#/snapshots" },
            { type: "link", text: "Tickets & Scanner", href: "#/snapshots" },
        ]
    },
    {
        text: "Committees & Boards",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "View Board & Committees", href: "#/security_groups" },
            { type: "link", text: "Offices and Positions", href: "#/elastic_ips" },
            { type: "link", text: "Update Tools", href: "#/placement_groups" }
        ]
    },
    {
        text: "Elections",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Board Elections", href: "#/load_balancers" },
            { type: "link", text: "General Elections", href: "#/target_groups" },
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
