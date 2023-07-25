// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import { useContainerQuery } from "@cloudscape-design/component-toolkit"
import styles from "./styles.module.scss"

// approximate values
const chartMargins = 100
const filterHeight = 75
const legendHeight = 60

export function ResponsiveChartContainer({ render, hideFilter, hideLegend, height = 400 }) {
    return (
        <div className={styles.measureRoot} style={{height}}>
            <div className={styles.content}>
                {height
                    ? render(
                        height -
                        chartMargins -
                        (hideLegend ? 0 : legendHeight) -
                        (hideFilter ? 0 : filterHeight)
                    )
                    : null}
            </div>
        </div>
    )
}
