// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import { Header, LineChart } from "@cloudscape-design/components"
import {
    commonChartProps,
    dateTimeFormatter,
    lineChartInstructions
} from "../chart-commons"
import { networkTrafficDomain, networkTrafficSeries } from "./data"
import { ResponsiveChartContainer } from "../../Common/responsive-chart-container"

export const networkTraffic = {
    definition: { defaultRowSpan: 4, defaultColumnSpan: 2, minRowSpan: 3 },
    data: {
        icon: "lineChart",
        title: "Welcome Center",
        description: "Incoming and outgoing network traffic",
        header: NetworkTrafficHeader,
        content: NetworkTrafficContent,
        staticMinHeight: 560
    }
}

function NetworkTrafficHeader() {
    return (
        <Header variant="h2" description="4-Year Comparison of WDVCB Foot Traffic">
            Welcome Center
        </Header>
    )
}

export default function NetworkTrafficContent() {
    return (
        <ResponsiveChartContainer
            hideFilter={true}
            render={height => (
                <LineChart
                    {...commonChartProps}
                    hideFilter={true}
                    height={height}
                    series={networkTrafficSeries}
                    yDomain={[0, 200]}
                    xDomain={networkTrafficDomain}
                    xScaleType="time"
                    xTitle="Time (UTC)"
                    yTitle="Persons"
                    ariaLabel="Network traffic"
                    ariaDescription={`Line chart showing transferred data of all your instances. ${lineChartInstructions}`}
                    i18nStrings={{
                        ...commonChartProps.i18nStrings,
                        filterLabel: "Filter displayed instances",
                        filterPlaceholder: "Filter instances",
                        xTickFormatter: dateTimeFormatter
                    }}
                />
            )}
        />
    )
}
