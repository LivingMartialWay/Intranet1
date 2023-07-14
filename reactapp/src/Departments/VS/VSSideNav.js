// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from "react"
import Box from "@cloudscape-design/components/box"
import Popover from "@cloudscape-design/components/popover"
import Link from "@cloudscape-design/components/link"
import { Navigation as CommonNavigation } from "./VSNavigation"
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
    { type: "link", text: "VSR Calander", href: "#/Tags" },
    { type: "link", text: "Call Transfer List", href: "#/Newsletters" },
    { type: "link", text: "End of Day Report", href: "#/limits" },
    {
        text: "EEC",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Create New EEC", href: "#/instances" },
            { type: "link", text: "EEC Search", href: "#/spot_requests" },
            {
                type: "link",
                text: "FAQ + Rules",
                href: "#/reserved_instances"
            },
            { type: "link", text: "Voucher Order Requests", href: "#/dedicated_hosts" },
            {
                type: "link",
                text: "EEC End-of-Day Report",
                href: "#/capacity_reservations"
            }
        ]
    },
    {
        text: "Item Logs",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Incoming", href: "#/amis" },
            { type: "link", text: "Outgoing", href: "#/bundle_tasks" }
        ]
    },
    {
        text: "Visitor Guide",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Visitor VG Order", href: "#/volumes" },
            { type: "link", text: "Business VG Order", href: "#/snapshots" },
            { type: "link", text: "VG Order Lookup", href: "#/lifecycle_manager" }
        ]
    },
    {
        text: "GuestBook & Brochures",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Guest Book VSR", href: "#/security_groups" },
            { type: "link", text: "Guest Book Reports", href: "#/network_interfaces" },
            { type: "link", text: "Brochure Search", href: "#/security_groups" },
            { type: "link", text: "Brochure Reorder Report", href: "#/network_interfaces" },
        ]
    },
    {
        text: "VS Internal",
        type: "section",
        defaultExpanded: false,
        items: [
            {
                type: "link",
                text: "Policy Procedures",
                href: "#/launch_configurations"
            },
            {
                type: "link",
                text: "Forms & Permits Directory",
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
