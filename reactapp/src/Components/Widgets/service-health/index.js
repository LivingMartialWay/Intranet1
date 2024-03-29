// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import {
    Box,
    Header,
    StatusIndicator,
    ColumnLayout
} from "@cloudscape-design/components"
import InfoLink from "../../Common/InfoLink"

import { useHelpPanel }  from "../../Common/help-panel"

import { ServiceHealthInfo } from "./help-content"

export const serviceHealth = {
    definition: { defaultRowSpan: 2, defaultColumnSpan: 1 },
    data: {
        icon: "list",
        title: "Service Health",
        description: "General information about service health",
        header: ServiceHealthHeader,
        content: ServiceHealthContent
    }
}

function ServiceHealthHeader() {
    const loadHelpPanelContent = useHelpPanel()
    return (
        <Header
            variant="h2"
            info={
                <InfoLink
                    data-testid="service-health-info-link"
                    onFollow={() => loadHelpPanelContent(<ServiceHealthInfo />)}
                />
            }
        >
            Backup Monitor
        </Header>
    )
}

export default function ServiceHealthContent() {
    return (
        <ColumnLayout columns={2}>
            <div>
                <Box variant="awsui-key-label">IP Address</Box>
                <div>192.168.0.25\Network</div>
            </div>
            <div>
                <Box variant="awsui-key-label">Status</Box>
                <StatusIndicator type="success">
                    Backups are operating normally
                </StatusIndicator>
            </div>
        </ColumnLayout>
    )
}
