// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BreadcrumbGroup, Container, Button, Form, FormField, DatePicker, TimeInput, Header, SpaceBetween } from '@cloudscape-design/components';
import { CustomAppLayout } from '../../Common/common-components';
import { Navigation } from '../../Common/navigation';
import { Notifications } from '../../Common/notifications';
import { resourceCreateBreadcrumbs } from '../../Common/breadcrumbs';
import { FormContent, FormHeader } from './ContentPanels/form-content';
import ToolsContent from './ContentPanels/tools-content';
import InputBox from '../../Common/InputBox';

//import '../../Common/Styles/form.scss';

const Breadcrumbs = () => (
  <BreadcrumbGroup items={resourceCreateBreadcrumbs} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />
);

function ReportTestCreatePage() {
    const [deliveryType, setDeliveryType] = useState();
    const [deliveredWhenDate, setDeliveredWhenDate] = useState();
    const [deliveredWhenTime, setDeliveredWhenTime] = useState();
    const [deliveredBy, setDeliveredBy] = useState();
    const [businessName, setBusinessName] = useState();
    const [deliveredTo, setDeliveredTo] = useState();
    const [itemType, setItemType] = useState();
    const [checkNo, setCheckNo] = useState();
    const [recievedBy, setRecievedBy] = useState();
    const [processedBy, setProcessedBy] = useState();
    const [processedDateDate, setProcessedDateDate] = useState();
    const [processedDateTime, setProcessedDateTime] = useState();

    const appLayout = useRef();

    const loadHelpPanelContent = index => {
        setToolsIndex(index);
        setToolsOpen(true);
        appLayout.current?.focusToolsClose();
    };


    function onClickCancel() {
        console.log("Navigate to Table");
    };



    function onClickCreate() {
        const report = {
            deliveryType,
            deliveredWhen: deliveredWhenDate+"T"+deliveredWhenTime,
            deliveredBy,
            businessName,
            deliveredTo,
            itemType,
            checkNo,
            recievedBy,
            processedBy,
            processedDate: processedDateDate+"T"+processedDateTime,
        };
        console.log(report);

        fetch('https://192.168.0.21:8080/api/ReportTest?' + new URLSearchParams(report), {method:"POST"})
            .then(response => {
                console.log(response)
            });

    };



    return (
        <form onSubmit={event => event.preventDefault()}>
            <Form
                actions={
                    <SpaceBetween direction="horizontal" size="xs">
                        <Button variant="link" onClick={onClickCancel}>
                            Cancel
                        </Button>
                        <Button data-testid="create" variant="primary" onClick={onClickCreate}>
                            Create item log
                        </Button>
                    </SpaceBetween>
                }
                errorText={null}
            >
                <SpaceBetween size="l">
                    <Container
                        id="distribution-panel"
                        header={<Header variant="h2">Create Incoming Item Log</Header>}
                    >
                        <SpaceBetween size="l">
                            <FormField
                                label="Delivery Type"
                                description="Enter the type of the delivery. || deliveryType"
                            >
                                <InputBox
                                    value={deliveryType}
                                    placeholder="Package, Mail, Check, ... etc"
                                    onChange={setDeliveryType}
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
                                            value={deliveredWhenDate}
                                            onChange={({ detail: { value } }) => setDeliveredWhenDate(value)}
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
                                            value={deliveredWhenTime}
                                            onChange={({ detail: { value } }) => setDeliveredWhenTime(value)}
                                        />
                                    </FormField>
                                </SpaceBetween>
                            </FormField>

                            <FormField
                                label="Carrier"
                                description="Enter who made the delivery. || deliveredBy"
                            >
                                <InputBox
                                    value={deliveredBy}
                                    placeholder="USPS, DHL, Fedex, UPS, ... etc"
                                    onChange={setDeliveredBy}
                                />
                            </FormField>

                            <FormField
                                label="Intended Recipient"
                                description="Enter the name of who the package is addressed to. || deliveredTo"
                            >
                                <InputBox
                                    value={deliveredTo}
                                    placeholder="Daniel, Marketing-Dept, ... etc"
                                    onChange={setDeliveredTo}
                                />
                            </FormField>

                            <FormField
                                label="Shipper"
                                description="Enter the name of the shipper. || businessName"
                            >
                                <InputBox
                                    value={businessName}
                                    placeholder="Pitney Bowes, Kalahari, U-Line "
                                    onChange={setBusinessName}
                                />
                            </FormField>

                            <FormField
                                label="item Type"
                                description="Enter the Type of Item. || itemType"
                            >
                                <InputBox
                                    value={itemType}
                                    placeholder="ItemType Is non-sensical but whatever."
                                    onChange={setItemType}
                                />
                            </FormField>

                            <FormField
                                label="Check Number"
                                description="If the delivery is a check - please record the number"
                            >
                                <InputBox
                                    value={checkNo}
                                    placeholder="00004482282"
                                    onChange={setCheckNo}
                                />
                            </FormField>

                            <FormField
                                label="Recieved By"
                                description="Record who is making this log. || recievedBy"
                            >
                                <InputBox
                                    value={recievedBy}
                                    placeholder="Mailroom Clerk, VSR, .. etc"
                                    onChange={setRecievedBy}
                                />
                            </FormField>

                            <FormField
                                label="ProcessedBy"
                                description="This will get recorded differently in production app. || processedBy"
                            >
                                <InputBox
                                    value={processedBy}
                                    placeholder="But we are going to leave it as fillable string for now "
                                    onChange={setProcessedBy}
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
                                            value={processedDateDate}
                                            onChange={({ detail: { value } }) => setProcessedDateDate(value)}
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
                                            value={processedDateTime}
                                            onChange={({ detail: { value } }) => setProcessedDateTime(value)}
                                        />
                                    </FormField>
                                </SpaceBetween>
                            </FormField>
                        </SpaceBetween>
                    </Container>
                </SpaceBetween>
            </Form>
        </form>
    )
}
  /*return (
    <CustomAppLayout
      ref={appLayout}
      contentType="form"
      content={
        <ContentLayout header={<FormHeader loadHelpPanelContent={loadHelpPanelContent} />}>
          <FormContent loadHelpPanelContent={loadHelpPanelContent} />
        </ContentLayout>
      }
      breadcrumbs={<Breadcrumbs />}
      navigation={<Navigation activeHref="#/distributions" />}
      tools={ToolsContent[toolsIndex]}
      toolsOpen={toolsOpen}
      onToolsChange={({ detail }) => setToolsOpen(detail.open)}
      notifications={<Notifications />}
    />
  );
}

console.log(CustomAppLayout)
console.log(ContentLayout)
console.log(FormHeader)
console.log(FormContent)
console.log(Breadcrumbs)
console.log(Navigation)
console.log(Notifications)
*/

export default ReportTestCreatePage;