// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import {
    applyDensity,
    disableMotion,
    Density
} from "@cloudscape-design/global-styles"
import "@cloudscape-design/global-styles/index.css"

import * as localStorage from "../Common/localstorage"

window.disableMotionForTests = disableMotion

// always `true` in this design
export const isVisualRefresh = true

export let currentDensity =
    localStorage.load("Awsui-Density-Preference") ?? Density.Comfortable
applyDensity(currentDensity)

export function updateDensity(density) {
    applyDensity(density)
    localStorage.save("Awsui-Density-Preference", density)
    currentDensity = density
}
