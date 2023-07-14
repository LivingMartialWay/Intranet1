// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import SideNavigation from "@cloudscape-design/components/side-navigation"
const navHeader = { text: "Festivals", href: "/VS" }

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
