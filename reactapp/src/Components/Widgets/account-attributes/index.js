// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import { Box, Header, Link } from "@cloudscape-design/components"

export const accountAttributes = {
    definition: { defaultRowSpan: 3, defaultColumnSpan: 1 },
    data: {
        icon: "list",
        title: "Account attributes",
        description: "General info about current account",
        header: AccountAttributesHeader,
        content: AccountAttributesContent,
        footer: AccountAttributesFooter
    }
}

function AccountAttributesHeader() {
    return <Header variant="h2">USPS Account</Header>
}

function AccountAttributesFooter() {
    return (
        <Box textAlign="center">
            <Link external href="#">Account Settings</Link>
        </Box>
    )
}

function AccountAttributesContent() {
    return (
        <>
            <Box variant="awsui-key-label">Supported platforms</Box>
            <Box variant="p">
                USPS and Pitney Bowes have implemented automatic shipping price calculator for your region. <br/>
                Please navigate to USPS.com and setup this feature.
            </Box>
        </>
    )
}

export default accountAttributes;
