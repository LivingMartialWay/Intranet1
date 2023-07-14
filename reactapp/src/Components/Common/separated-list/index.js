// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"

export function SeparatedList({ ariaLabel, ariaLabelledBy, items }) {
    return (
        <ul
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
        >
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}
