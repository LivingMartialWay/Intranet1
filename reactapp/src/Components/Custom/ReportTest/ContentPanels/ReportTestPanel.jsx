// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState, useEffect } from 'react';
import {
    Container,
    Checkbox,
    ExpandableSection,
    Header,
    Input,
    RadioGroup,
    FormField,
    SpaceBetween,
    Select,
    Textarea,
    TimeInput,
    DatePicker,
    FileUpload,
} from '@cloudscape-design/components';
import { InfoLink } from '../../../Common/InfoLink';
import useContentOrigins from '../../../Common/use-content-origins';
import { SSL_CERTIFICATE_OPTIONS, SUPPORTED_HTTP_VERSIONS_OPTIONS } from '../form-config';

function DistributionsFooter({ state, onChange }) {
    return (
        <ExpandableSection headerText="" variant="footer">
 
        </ExpandableSection>
    );
}

const defaultState = {
    sslCertificate: 'default',
    cloudFrontRootObject: '',
    alternativeDomainNames: '',
    s3BucketSelectedOption: null,
    certificateExpiryDate: '',
    certificateExpiryTime: '',
    httpVersion: 'http2',
    ipv6isOn: false,
    functions: [],
};

const sampleFunctionFiles = [
    new File([new Blob(['Cloudfront function code'])], 'index.js', {
        type: 'text/javascript',
        lastModified: 1590962400000,
    }),
    new File([new Blob(['Cloudfront function test object'])], 'test-success.json', {
        type: 'application/json',
        lastModified: 1590962400000,
    }),
    new File([new Blob(['Cloudfront function test object'])], 'test-failure.json', {
        type: 'application/json',
        lastModified: 1590962400000,
    }),
];

const noop = () => {
    /*noop*/
};

export default function DistributionPanel({ loadHelpPanelContent, updateDirty = noop, readOnlyWithErrors = false }) {
    const [contentOriginsState, contentOriginsHandlers] = useContentOrigins();
    const [distributionPanelData, setDistributionPanelData] = useState(
        !readOnlyWithErrors ? defaultState : { ...defaultState, functions: sampleFunctionFiles }
    );

    useEffect(() => {
        const isDirty = JSON.stringify(distributionPanelData) !== JSON.stringify(defaultState);
        updateDirty(isDirty);
    }, [distributionPanelData]);

    const onChange = (attribute, value) => {
        if (readOnlyWithErrors) {
            return;
        }

        const newState = { ...distributionPanelData };
        newState[attribute] = value;
        setDistributionPanelData(newState);
    };

    const getErrorText = errorMessage => {
        return readOnlyWithErrors ? errorMessage : undefined;
    };

    const functionFileErrors = readOnlyWithErrors
        ? [null, 'Invalid test event structure', 'Invalid test event structure']
        : undefined;

    return (
        <Container
            id="distribution-panel"
            header={<Header variant="h2">Create Incoming Item Log</Header>}
        >
            <SpaceBetween size="l">
                <FormField
                    label="Delivery Type"
                    description="Enter the type of the delivery. || deliveryType"
                >
                    <Input
                        value={distributionPanelData.cloudFrontRootObject}
                        placeholder="Package, Mail, Check, ... etc"
                        onChange={({ detail: { value } }) => onChange('cloudFrontRootObject', value)}
                    />
                </FormField>

                <FormField stretch={true} label={<span id="certificate-expiry-label">Arrival Time</span>}>
                    <SpaceBetween size="s" direction="horizontal">
                        <FormField
                            stretch={true}
                            description="Specify the date delivered."
                            className="date-time-container"
                            constraintText={'Use YYYY/MM/DD format.'}
                        >
                            <DatePicker
                                placeholder="YYYY/MM/DD"
                                value={distributionPanelData.certificateExpiryDate}
                                onChange={({ detail: { value } }) => onChange('certificateExpiryDate', value)}
                            />
                        </FormField>
                        <FormField
                            stretch={true}
                            description="Specify the time delivered."
                            constraintText="Use 24-hour format."
                            className="date-time-container"
                        >
                            <TimeInput
                                use24Hour={true}
                                placeholder="hh:mm:ss"
                                value={distributionPanelData.certificateExpiryTime}
                                onChange={({ detail: { value } }) => onChange('certificateExpiryTime', value)}
                            />
                        </FormField>
                    </SpaceBetween>
                </FormField>

                <FormField
                    label="Carrier"
                    description="Enter who made the delivery. || deliveredBy"
                >
                    <Input
                        value={distributionPanelData.cloudFrontRootObject}
                        placeholder="USPS, DHL, Fedex, UPS, ... etc"
                        onChange={({ detail: { value } }) => onChange('cloudFrontRootObject', value)}
                    />
                </FormField>

                <FormField
                    label="Intended Recipient"
                    description="Enter the name of who the package is addressed to. || deliveredTo"
                >
                    <Input
                        value={distributionPanelData.cloudFrontRootObject}
                        placeholder="Daniel, Marketing-Dept, ... etc"
                        onChange={({ detail: { value } }) => onChange('cloudFrontRootObject', value)}
                    />
                </FormField>

                <FormField
                    label="Shipper"
                    description="Enter the name of the shipper. || businessName"
                >
                    <Input
                        value={distributionPanelData.cloudFrontRootObject}
                        placeholder="Pitney Bowes, Kalahari, U-Line "
                        onChange={({ detail: { value } }) => onChange('cloudFrontRootObject', value)}
                    />
                </FormField>

                <FormField
                    label="item Type"
                    description="Enter the Type of Item. || itemType"
                >
                    <Input
                        value={distributionPanelData.cloudFrontRootObject}
                        placeholder="ItemType Is non-sensical but whatever."
                        onChange={({ detail: { value } }) => onChange('cloudFrontRootObject', value)}
                    />
                </FormField>

                <FormField
                    label="Check Number"
                    description="If the delivery is a check - please record the number"
                >
                    <Input
                        value={distributionPanelData.cloudFrontRootObject}
                        placeholder="00004482282"
                        onChange={({ detail: { value } }) => onChange('cloudFrontRootObject', value)}
                    />
                </FormField>

                <FormField
                    label="Recieved By"
                    description="Record who is making this log."
                >
                    <Input
                        value={distributionPanelData.cloudFrontRootObject}
                        placeholder="Mailroom Clerk, VSR, .. etc"
                        onChange={({ detail: { value } }) => onChange('cloudFrontRootObject', value)}
                    />
                </FormField>

                <FormField
                    label="ProcessedBy"
                    description="This will get recorded differently in production app"
                >
                    <Input
                        value={distributionPanelData.cloudFrontRootObject}
                        placeholder="But we are going to leave it as fillable string for now "
                        onChange={({ detail: { value } }) => onChange('cloudFrontRootObject', value)}
                    />
                </FormField>

                <FormField stretch={true} label={<span id="certificate-expiry-label">Processed Date</span>}>
                    <SpaceBetween size="s" direction="horizontal">
                        <FormField
                            stretch={true}
                            description="Specify the date processed."
                            className="date-time-container"
                            constraintText={'Use YYYY/MM/DD format.'}
                        >
                            <DatePicker
                                placeholder="YYYY/MM/DD"
                                value={distributionPanelData.certificateExpiryDate}
                                onChange={({ detail: { value } }) => onChange('certificateExpiryDate', value)}
                            />
                        </FormField>
                        <FormField
                            stretch={true}
                            description="Specify the time processed."
                            constraintText="Use 24-hour format."
                            className="date-time-container"
                        >
                            <TimeInput
                                use24Hour={true}
                                placeholder="hh:mm:ss"
                                value={distributionPanelData.certificateExpiryTime}
                                onChange={({ detail: { value } }) => onChange('certificateExpiryTime', value)}
                            />
                        </FormField>
                    </SpaceBetween>
                </FormField>
               
            </SpaceBetween>
        </Container>
    );
}