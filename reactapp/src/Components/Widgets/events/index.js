// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import {
    Box,
    Header,
    Link,
    StatusIndicator,
    Table
} from "@cloudscape-design/components"
import { eventsItems } from "./data"
import { isVisualRefresh } from "../../Common/apply-mode"

export const events = {
    definition: { defaultRowSpan: 4, defaultColumnSpan: 2 },
    data: {
        icon: "table",
        title: "Events",
        description: "View your service events",
        disableContentPaddings: !isVisualRefresh,
        header: EventsHeader,
        content: EventsContent,
        footer: EventsFooter
    }
}

function EventsHeader() {
    return <Header counter={`(${eventsItems.length})`}>Invoice Approval</Header>
}

function EventsFooter() {
    return (
        <Box textAlign="center">
            <Link href="#">View all invoices</Link>
        </Box>
    )
}

const eventsDefinition = [
    {
        id: "name",
        header: "Vendor Name",
        cell: item => item.name,
        minWidth: 155,
        width: 170,
        isRowHeader: true
    },
    {
        id: "status",
        header: "Due Date",
        cell: ({ statusText, status }) => (
            <StatusIndicator type={status}>{statusText}</StatusIndicator>
        ),
        minWidth: 120,
        width: 130
    },
    {
        id: "id",
        header: "Method",
        cell: item => item.type,
        minWidth: 125,
        width: 130
    },
    {
        id: "type",
        header: "Complete",
        cell: item => <Link href="#">{item.id}</Link>,
        minWidth: 130,
        width: 135
    }
]

export default function EventsContent() {
    return (
        <Table
            variant="borderless"
            resizableColumns={true}
            items={eventsItems}
            columnDefinitions={eventsDefinition}
        />
    )
}
