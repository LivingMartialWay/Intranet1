// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useId } from "react"

export function useDisclaimerFlashbarItem(onDismiss) {
    const id = useId()

    return {
        type: "info",
        dismissible: true,
        dismissLabel: "Dismiss message",
        onDismiss: () => onDismiss(id),
        statusIconAriaLabel: "info",
        content: (
            <>
                WDVCB Intranet 2.0 is still in Alpha - many features have not been implemented.
            </>
        ),
        id
    }
}
