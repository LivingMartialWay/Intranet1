// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import { Box, ColumnLayout, Header, Link } from "@cloudscape-design/components"

export const featuresSpotlight = {
    definition: { defaultRowSpan: 3, defaultColumnSpan: 3 },
    data: {
        icon: "list",
        title: "Features spotlight",
        description: "Updates on features available in the current region",
        header: FeaturesSpotlightHeader,
        content: FeaturesSpotlightContent,
        footer: FeaturesSpotlightFooter
    }
}

function FeaturesSpotlightHeader() {
    return (
        <Header
            variant="h2"
            description="Updates on upcoming convetions in Wisconsin Dells and Lake Delton"
        >
            Convention spotlight
        </Header>
    )
}

function FeaturesSpotlightFooter() {
    return (
        <Box textAlign="center">
            <Link href="#">View all posts</Link>
        </Box>
    )
}

export function FeaturesSpotlightContent() {
    return (
        <ColumnLayout columns={2} variant="text-grid">
            <div>
                <Box color="text-label">August 26, 2023</Box>
                <Box padding={{ vertical: "xxs" }}>
                    <Link href="#">Realtors Anonymous  -  Kalahari</Link>
                </Box>
                <Box variant="p">
                    Africa Ballroom.
                    <br /><br />
                    Realtors Anonymous helps new realtors better sell boring properties for more money.
                    No wonder they chose Wisconsin Dells for this convention. 
                </Box>
            </div>
            <div>
                <Box color="text-label">September 9, 2023</Box>
                <Box padding={{ vertical: "xxs" }}>
                    <Link href="#">
                        Wisconsin Bass Fishermen - Wilderness
                    </Link>
                </Box>
                <Box variant="p">
                    Lodge Meeting Room
                    <br /><br />
                    Catch bigger fish with membership to WBF's Convention. Buy lures, talk tactics. 
                    Two day escape for professional anglers in the Midwest.
                </Box>
            </div>
        </ColumnLayout>
    )
}
export default featuresSpotlight;