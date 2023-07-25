// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import { Container } from "@cloudscape-design/components"
import styles from "./styles.module.scss"

export function BaseStaticWidget({ config, Content = React.Fragment, Header = React.Fragment, Footer }) {
    const Wrapper = config?.provider ?? React.Fragment
    return (
        <div
            className={styles.staticWidget}
        >
            <Wrapper>
                <Container
                    header={<Header />}
                    fitHeight={true}
                    footer={Footer?<Footer />:null}
                >
                    <Content />
                </Container>
            </Wrapper>
        </div>
    )
}
export default BaseStaticWidget;



