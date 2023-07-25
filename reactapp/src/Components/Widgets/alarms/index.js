// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import Header from "@cloudscape-design/components/header"
import Link from "@cloudscape-design/components/link"
import StatusIndicator from "@cloudscape-design/components/status-indicator"
import Table from "@cloudscape-design/components/table"
import Box from "@cloudscape-design/components/box"
import Button from "@cloudscape-design/components/button"
import { isVisualRefresh } from "../../Common/apply-mode"

export const alarms = {
    definition: { defaultRowSpan: 3, defaultColumnSpan: 2 },
    data: {
        icon: "table",
        title: "Alarms",
        description: "View all your alarms",
        disableContentPaddings: !isVisualRefresh,
        header: AlarmsHeader,
        content: AlarmsContent,
        footer: AlarmsFooter
    }
}

function AlarmsHeader() {
    return (
        <Header
            counter="(24)"
            actions={
                <Button variant="normal" href="#" iconName="external" iconAlign="right">
                    View in Browser
                </Button>
            }
        >
            Concession Inventory
        </Header>
    )
}

function AlarmsFooter() {
    return (
        <Box textAlign="center">
            <Link href="#">View all inventory</Link>
        </Box>
    )
}

const alarmsDefinition = [
    {
        id: "name",
        header: "Alarm name",
        cell: item => <Link href="#">{item.name}</Link>,
        width: 341,
        isRowHeader: true
    },
    {
        id: "status",
        header: "Status",
        cell: ({ statusText, status }) => (
            <StatusIndicator type={status}>{statusText}</StatusIndicator>
        ),
        width: 164
    }
]

const alarmsItems = [
    {
        name: "Hogwash Piggleberry",
        statusText: "13 Units - Low Inventory",
        status: "warning"
    },
    {
        name: "New Glarus Spotted Cow",
        statusText: "138 Units",
        status: "success"
    },
    {
        name: "Diet Pepsi",
        statusText: "231 units",
        status: "success"
    },
    {
        name: "Fritos",
        statusText: "Unknown quantity",
        status: "stopped"
    }
]

function AlarmsContent() {
    return (
        <Table
            variant="borderless"
            resizableColumns={true}
            items={alarmsItems}
            columnDefinitions={alarmsDefinition}
        />
    )
}
export default alarms;