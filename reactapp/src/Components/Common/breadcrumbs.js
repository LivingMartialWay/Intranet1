// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import BreadcrumbGroup, { BreadcrumbGroupProps } from '@cloudscape-design/components/breadcrumb-group';

export function Breadcrumbs({ items }: { items: BreadcrumbGroupProps['items'] }) {
    return (
        <BreadcrumbGroup
            items={[{ text: 'WDVCB', href: '/' }, ...items]}
            expandAriaLabel="Show path"
            ariaLabel="Breadcrumbs"
        />
    );
}

export const resourcesBreadcrumbs = [
    {
        text: 'Service',
        href: '#',
    },
    {
        text: 'Distributions',
        href: '#',
    },
];

export const resourceCreateBreadcrumbs = [
    ...resourcesBreadcrumbs,
    {
        text: 'Create distribution',
        href: '#',
    },
];