// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import { Box, Header, Link } from "@cloudscape-design/components"

export const accountAttributes = {
    definition: { defaultRowSpan: 8, defaultColumnSpan: 8 },
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
    return <Header variant="h2">New Hire!</Header>
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
            <Box variant="awsui-key-label">Plaza Attendant</Box>
            <Box variant="p">
                We are pleased to announce we have hired Paul Newman's Ghost to run security at the plaza! 
                Please re-welcome him back to earth and sign the card!
            </Box>
        </>
    )
}

export default accountAttributes;
