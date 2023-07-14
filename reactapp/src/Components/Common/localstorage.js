﻿// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react'

export const save = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value))

export const remove = key => localStorage.removeItem(key)

export const load = key => {
    const value = localStorage.getItem(key)
    try {
        return value && JSON.parse(value)
    } catch (e) {
        console.warn(
            `The ${key} value that is stored in localStorage is incorrect. Try to remove the value ${key} from localStorage and reload the page`
        )
        return undefined
    }
}
