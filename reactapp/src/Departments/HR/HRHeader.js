// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react"
import { HelpPanel, Header } from "@cloudscape-design/components"
import { ExternalLinkGroup } from "../../Components/Common/external-link-group"
import { InfoLink } from "../../Components/Common/InfoLink"
import { useHelpPanel } from "../../Components/Common/help-panel"


export function DashboardMainInfo() {
  return (
    <HelpPanel
      header={<h2>HR Help</h2>}
      footer={
        <ExternalLinkGroup
          items={[
            { href: "www.Google.com", text: "Try Googling it" },
            { href: "www.Google.com", text: "Consider if it's even important" },
            { href: "www.Google.com", text: "Try Googling it" },
          ]}
        />
      }
    >
      <p>
        This Help Panel has not been implemented.
      </p>
    </HelpPanel>
  )
}

export function DashboardHeader({ actions }) {
  const loadHelpPanelContent = useHelpPanel()
  return (
    <Header
      variant="h1"
      actions={actions}
    >
      HR Dashboard
    </Header>
  )
}
