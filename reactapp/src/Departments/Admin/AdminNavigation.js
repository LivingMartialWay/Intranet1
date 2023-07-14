// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import SideNavigation from "@cloudscape-design/components/side-navigation"
const navHeader = { text: "Admin", href: "/admin" }

export const navItems = [
    {
        type: "section",
        text: "Reports and analytics",
        items: [
            { type: "link", text: "Distributions", href: "#/distributions" },
            { type: "link", text: "Cache statistics", href: "#/cache" },
            { type: "link", text: "Monitoring and alarms", href: "#/monitoring" },
            { type: "link", text: "Popular objects", href: "#/popular" },
            { type: "link", text: "Top referrers", href: "#/referrers" },
            { type: "link", text: "Usage", href: "#/usage" },
            { type: "link", text: "Viewers", href: "#/viewers" }
        ]
    },
    {
        type: "section",
        text: "Private content",
        items: [
            { type: "link", text: "How-to guide", href: "#/howto" },
            { type: "link", text: "Origin access identity", href: "#/origin" }
        ]
    }
]

const defaultOnFollowHandler = event => {
    // keep the locked href for our demo pages
    event.preventDefault()
}

export function Navigation({
    activeHref,
    header = navHeader,
    items = navItems,
    onFollowHandler = defaultOnFollowHandler
}) {
    return (
        <SideNavigation
            items={items}
            header={header}
            activeHref={activeHref}
            onFollow={onFollowHandler}
        />
    )
}
