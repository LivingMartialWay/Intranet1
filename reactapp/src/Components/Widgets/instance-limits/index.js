// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { createContext, useContext, useState } from "react"
import {
    Box,
    Button,
    Header,
    Link,
    StatusIndicator,
    Table
} from "@cloudscape-design/components"
import { isVisualRefresh } from "../../Common/apply-mode"

export const instanceLimits = {
    definition: { defaultRowSpan: 3, defaultColumnSpan: 2 },
    data: {
        icon: "table",
        title: "Instance limits",
        description: "Current utilization of instance types",
        disableContentPaddings: !isVisualRefresh,
        provider: InstanceLimitsProvider,
        header: InstanceLimitsHeader,
        content: InstanceLimitsContent,
        footer: InstanceLimitsFooter
    }
}

const WidgetContext = createContext([null, () => { }])

function InstanceLimitsProvider({ children }) {
    const state = useState(null)
    return (
        <WidgetContext.Provider value={state}>{children}</WidgetContext.Provider>
    )
}

function InstanceLimitsHeader() {
    const [selectedId] = useContext(WidgetContext)
    return (
        <Header
            variant="h2"
            actions={
                <Button
                    variant="normal"
                    href="#"
                    iconName="external"
                    iconAlign="right"
                    disabled={!selectedId}
                    data-testid="Create Solicitation"
                >
                    Create Solicitation
                </Button>
            }
        >
            Current Solicitations
        </Header>
    )
}

function InstanceLimitsFooter() {
    return (
        <Box textAlign="center">
            <Link href="#">View all solicitations</Link>
        </Box>
    )
}

const instanceLimitsItems = [
    {
        name: "Visitor Guide Full Page ",
        statusText: "10 returned / 0 Remaining",
        status: "success"
    },
    {
        name: "Visitor Guide Half Page",
        statusText: "42 returned / 8 remaining",
        status: "pending"
    },
    {
        name: "Visitor Guide Quarter Page",
        statusText: "349 returned / 151 remaining",
        status: "pending"
    },
    {
        name: "Inside Cover Advert",
        statusText: "0 returned / 4 remaining ",
        status: "warning"
    }
]
const instanceLimitsDefinition = [
    {
        id: "name",
        header: "Name",
        cell: item => item.name,
        width: 320,
        isRowHeader: true
    },
    {
        id: "status",
        header: "Status (usage/limit)",
        cell: ({ statusText, status }) => (
            <StatusIndicator type={status}>{statusText}</StatusIndicator>
        )
    }
]

export default function InstanceLimitsContent() {
    const [selectedId, setSelectedId] = useContext(WidgetContext)

    return (
        <Table
            data-testid="instance-limits-table"
            variant="borderless"
            resizableColumns={true}
            items={instanceLimitsItems}
            columnDefinitions={instanceLimitsDefinition}
            selectionType="single"
            trackBy="name"
            selectedItems={selectedId ? [{ name: selectedId }] : []}
            onSelectionChange={event =>
                setSelectedId(event.detail.selectedItems[0].name)
            }
            ariaLabels={{
                itemSelectionLabel: (data, row) => `select ${row.name}`,
                allItemsSelectionLabel: () => "select all",
                selectionGroupLabel: "On-demand instance limit selection"
            }}
        />
    )
}
