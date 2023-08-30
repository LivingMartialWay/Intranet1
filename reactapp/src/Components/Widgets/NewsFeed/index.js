// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import { Box, Header, Link } from "@cloudscape-design/components"

export const accountAttributes = {
    definition: { defaultRowSpan: 12, defaultColumnSpan: 1 },
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
    return <Header variant="h2">Internal Promotion</Header>
}

function AccountAttributesFooter() {
    return (
        <Box textAlign="center">
        </Box>
    )
}

function AccountAttributesContent() {
    return (
        <>
            <Box variant="awsui-key-label">Sr. Fullstack Developer</Box>
            <Box variant="p">
                After completing the Intranet 2.0 Demo - Daniel has been promoted to Sr. Developer!
            </Box>
        </>
    )
}

export default accountAttributes;
