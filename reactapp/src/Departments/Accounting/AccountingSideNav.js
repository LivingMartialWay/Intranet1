// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from "react"
import Box from "@cloudscape-design/components/box"
import Popover from "@cloudscape-design/components/popover"
import Link from "@cloudscape-design/components/link"
import { Navigation as CommonNavigation } from "./AccountingNavigation"
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
    { type: "link", text: "Accounting Calander", href: "#/Tags" },
    { type: "link", text: "Approve Invoices", href: "#/Newsletters" },
    {
        text: "Accounts Payable",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Invoices To Be Approved", href: "#/instances" },
            { type: "link", text: "Invoice List", href: "#/spot_requests" },
            { type: "link", text: "Account Number List", href: "#/instances" },
            { type: "link", text: "Vendor List", href: "#/spot_requests" },
            { type: "link", text: "Sales Tax Report", href: "#/spot_requests" }
        ]
    },
    {
        text: "Accounts Recievable",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "AR Check/Cash Log", href: "#/amis" },
            { type: "link", text: "Billing Statements", href: "#/volumes" },
            { type: "link", text: "iDSS Contacts", href: "#/snapshots" },
            { type: "link", text: "iDSS Update Tools", href: "#/bundle_tasks" }
        ]
    },
    {
        text: "Reports",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Budgets", href: "#/amis" },
            { type: "link", text: "Another Report", href: "#/volumes" },
            { type: "link", text: "Important Report", href: "#/snapshots" },
            { type: "link", text: "Final Report", href: "#/bundle_tasks" }
        ]
    },
    {
        text: "Forms & Documents",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Blank W9", href: "#/volumes" },
            { type: "link", text: "Bank Rec Review-Approval", href: "#/snapshots" },
            { type: "link", text: "Invoice-WDVCB", href: "#/volumes" },
            { type: "link", text: "Invoice-Festivals", href: "#/snapshots" },
            { type: "link", text: "Invoice-EventMGMT", href: "#/snapshots" },
            { type: "link", text: "Travel Expense", href: "#/volumes" },
            { type: "link", text: "WDVCB FIN", href: "#/snapshots" },
            { type: "link", text: "Festivals FIN", href: "#/snapshots" },
        ]
    },
    {
        text: "Policies & Procedures",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "W9 Policy", href: "#/security_groups" },
            { type: "link", text: "In-Kind", href: "#/elastic_ips" },
            { type: "link", text: "Prize Winners", href: "#/placement_groups" },
            { type: "link", text: "Taxes and Insurance", href: "#/security_groups" },
            { type: "link", text: "MSDS", href: "#/elastic_ips" },
            { type: "link", text: "Travel Expense", href: "#/placement_groups" }
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
