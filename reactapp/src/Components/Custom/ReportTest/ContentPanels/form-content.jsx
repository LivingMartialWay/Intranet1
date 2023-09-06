// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { Button, Form, Header, SpaceBetween } from '@cloudscape-design/components';
import { InfoLink } from '../../../Common/InfoLink';
import ReportTestPanel from './ReportTestPanel';


export function FormHeader({ loadHelpPanelContent }) {
    return (
        <Header
            variant="h1"
            info={<InfoLink id="form-main-info-link" onFollow={() => loadHelpPanelContent(0)} />}
            description="When you create an Amazon CloudFront distribution, you tell CloudFront where to find your content by specifying your origin servers."
        >
            Create distribution
        </Header>
    );
}

function BaseFormContent({ content, onCancelClick, errorText = null }) {
    return (
        <form onSubmit={event => event.preventDefault()}>
            <Form
                actions={
                    <SpaceBetween direction="horizontal" size="xs">
                        <Button variant="link" onClick={onCancelClick}>
                            Cancel
                        </Button>
                        <Button data-testid="create" variant="primary">
                            Create item log
                        </Button>
                    </SpaceBetween>
                }
                errorText={errorText}
                errorIconAriaLabel="Error"
            >
                {content}
            </Form>
        </form>
    );
}

export function FormContent({ loadHelpPanelContent }) {
    return (
        <BaseFormContent
            content={
                <SpaceBetween size="l">
                    <ReportTestPanel loadHelpPanelContent={loadHelpPanelContent} />
                </SpaceBetween>
            }
        />
    );
}

export const FormLimitedContent = ({ loadHelpPanelContent, updateDirty, onCancelClick }) => {
    return (
        <BaseFormContent
            onCancelClick={onCancelClick}
            content={<ReportTestPanel loadHelpPanelContent={loadHelpPanelContent} updateDirty={updateDirty} />}
        />
    );
};

export const FormContentReadOnlyWithErrors = ({ loadHelpPanelContent }) => {
    return (
        <BaseFormContent
            content={
                <SpaceBetween size="l">
                    <ReportTestPanel loadHelpPanelContent={loadHelpPanelContent} readOnlyWithErrors={true} />
                </SpaceBetween>
            }
            errorText="CloudFront can’t create the new distribution because of a permissions problem with your IAM role."
        />
    );
};