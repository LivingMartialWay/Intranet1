// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import Header from "@cloudscape-design/components/header"
import { Box, ColumnLayout, Link } from "@cloudscape-design/components"

export const serviceOverview = {
    definition: { defaultRowSpan: 2, defaultColumnSpan: 3 },
    data: {
        icon: "list",
        title: "Service overview",
        description: "Overview of all your resources",
        header: ServiceOverviewHeader,
        content: ServiceOverviewWidget
    }
}

function ServiceOverviewHeader() {
    return (
        <Header variant="h2" description="Viewing data from Indeed.com">
            HR Overview
        </Header>
    )
}

function ServiceOverviewWidget() {
    return (
        <ColumnLayout columns={4} variant="text-grid" minColumnWidth={170}>
            <div>
                <Box variant="awsui-key-label">Listed Positions</Box>
                <Link variant="awsui-value-large" href="#">
                    6
                </Link>
            </div>
            <div>
                <Box variant="awsui-key-label">Interested Persons</Box>
                <Link variant="awsui-value-large" href="#">
                    126
                </Link>
            </div>
            <div>
                <Box variant="awsui-key-label">Resumes Submitted</Box>
                <Link variant="awsui-value-large" href="#">
                    28
                </Link>
            </div>
            <div>
                <Box variant="awsui-key-label">Unread Resumes</Box>
                <Link variant="awsui-value-large" href="#">
                    2
                </Link>
            </div>
        </ColumnLayout>
    )
}
export default serviceOverview;