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

    { type: "link", text: "Bureau Calender", href: "#/Tags" },
    { type: "link", text: "Resource Library", href: "#/Newsletters" },
    { type: "link", text: "Add Newsfeed+Update", href: "#/BoardReports" },
    {
        text: "Staff listings",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Phone", href: "#/instances" },
            { type: "link", text: "Computer", href: "#/spot_requests" },
            { type: "link", text: "Duties", href: "#/spot_requests" },
            { type: "link", text: "Birthday / Anniversary", href: "#/spot_requests" },
            { type: "link", text: "Duties", href: "#/spot_requests" },
        ]
    },
    {
        text: "Logins",
        type: "section",
        defaultExpanded: false,
        items: [
            { type: "link", text: "Nextiva", href: "#/amis" },
            { type: "link", text: "iDSS Cyclone", href: "#/volumes" },
            { type: "link", text: "SmartSheets", href: "#/snapshots" },
            { type: "link", text: "iSolved", href: "#/bundle_tasks" }
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
