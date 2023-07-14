// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from "react"
import Box from "@cloudscape-design/components/box"
import Popover from "@cloudscape-design/components/popover"
import Link from "@cloudscape-design/components/link"
import { Navigation as CommonNavigation } from "./PartnershipNavigation"
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
    { type: "link", text: "Partner List", href: "#/Newsletters" },
    {
        text: "Agreements",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Partnership Forms", href: "#/instances" },
            { type: "link", text: "Application List", href: "#/spot_requests" },
            { type: "link", text: "3 Year Comparisons", href: "#/instances" },
            { type: "link", text: "Archived Agreements", href: "#/spot_requests" },
            { type: "link", text: "Email List", href: "#/spot_requests" }
        ]
    },
    {
        text: "Contacts",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Directory", href: "#/snapshots" },
            { type: "link", text: "Contacts By Partnership", href: "#/amis" },
            { type: "link", text: "Brochures", href: "#/volumes" },
            { type: "link", text: "iDSS Update Tools", href: "#/bundle_tasks" }
        ]
    },
    {
        text: "Online Forms",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Partnership Online Forms", href: "#/amis" },
            { type: "link", text: "Newsletter Submissions", href: "#/volumes" },
            { type: "link", text: "Solicitation Calender", href: "#/snapshots" },
            { type: "link", text: "Final Report", href: "#/bundle_tasks" }
        ]
    },
    {
        text: "Benefits",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Benefit List", href: "#/volumes" },
            { type: "link", text: "Program Participants", href: "#/snapshots" },
            { type: "link", text: "Partnership Brochure", href: "#/volumes" },
            { type: "link", text: "Benefits by Tier", href: "#/snapshots" },
        ]
    },
    {
        text: "EEC",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "EEC / Voucher Report", href: "#/security_groups" },
            { type: "link", text: "Coupons", href: "#/elastic_ips" },
            { type: "link", text: "Participant List", href: "#/placement_groups" },
            { type: "link", text: "iDSS & EEC", href: "#/security_groups" },
            { type: "link", text: "Orders", href: "#/elastic_ips" },
        ]
    },
    {
        text: "Bylaws, Policy, Contracts",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Bureau Bylaws '24", href: "#/security_groups" },
            { type: "link", text: "Partnership Policies", href: "#/elastic_ips" },
            { type: "link", text: "Blank Agreements '24", href: "#/placement_groups" },
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
