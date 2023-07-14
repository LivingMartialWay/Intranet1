// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import { Container } from "@cloudscape-design/components"
import styles from "./styles.module.scss"

export function BaseStaticWidget({ config, Content = React.Fragment }) {
    const Wrapper = config?.provider ?? React.Fragment
    return (
        <div
            className={styles.staticWidget}
        >
            <Wrapper>
                <Container
                    fitHeight={true}
                >
                    <Content />
                </Container>
            </Wrapper>
        </div>
    )
}
export default BaseStaticWidget;



