import * as React from 'react';
import { Link } from '@cloudscape-design/components';

export function getMatchesCountText(count) {
    return count === 1 ? `1 match` : `${count} matches`;
}

function formatDate(date) {
    const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
    const timeFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour12: false });
    return `${dateFormatter.format(date)}, ${timeFormatter.format(date)}`;
}

function createLabelFunction(columnName) {
    return ({ sorted, descending }) => {
        const sortState = sorted ? `sorted ${descending ? 'descending' : 'ascending'}` : 'not sorted';
        return `${columnName}, ${sortState}.`;
    };
}

export const columnDefinitions = [
    {
        id: "recNo",
        header: "RecNo",
        cell: e => e.recNo,
        sortingField: "recNo",
        isRowHeader: true
    },
    {
        id: "deliveryType",
        header: "deliveryType",
        cell: e => e.deliveryType,
        sortingField: "deliveryType",
    },
    {
        id: "deliveredWhen",
        header: "deliveredWhen",
        cell: e => e.deliveredWhen,
        sortingField: "deliveredWhen",
    },
    { id: "deliveredBy", header: "deliveredBy", cell: e => e.deliveredBy, sortingField: "deliveredBy" },
    { id: "businessName", header: "businessName", cell: e => e.businessName },
    { id: "deliveredTo", header: "deliveredTo", cell: e => e.deliveredTo },
    { id: "itemType", header: "itemType", cell: e => e.itemType },
    { id: "checkNo", header: "checkNo", cell: e => e.checkNo },
    { id: "recievedBy", header: "recievedBy", cell: e => e.recievedBy },
    { id: "processedBy", header: "processedBy", cell: e => e.processedBy },
    { id: "processedDate", header: "processedDate", cell: e => e.processedDate },
];

export const paginationLabels = {
    nextPageLabel: 'Next page',
    pageLabel: pageNumber => `Go to page ${pageNumber}`,
    previousPageLabel: 'Previous page',
};

const pageSizePreference = {
    title: 'Select page size',
    options: [
        { value: 5, label: '5 resources' },
        { value: 10, label: '10 resources' },
        { value: 20, label: '20 resources' },
    ],
};

const visibleContentPreference = {
    title: 'Select visible content',
    options: [
        {
            label: 'Main properties',
            options: columnDefinitions.map(({ id, header }) => ({ id, label: header, editable: id !== 'recNo' })),
        },
    ],
};
export const collectionPreferencesProps = {
    pageSizePreference,
    visibleContentPreference,
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    title: 'Preferences',
};