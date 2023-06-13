import React, { useEffect, useState } from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import {
    Table,
    Box,
    Button,
    CollectionPreferences,
    Header,
    Pagination,
    TextFilter,
    SpaceBetween,
    ButtonDropdown,
} from "@cloudscape-design/components";
import { columnDefinitions, getMatchesCountText, paginationLabels, collectionPreferencesProps } from './ReportTestTableConfig';
import "@cloudscape-design/global-styles/index.css"

function EmptyState({ title, subtitle, action }) {
    return (
        <Box textAlign="center" color="inherit">
            <Box variant="strong" textAlign="center" color="inherit">
                {title}
            </Box>
            <Box variant="p" padding={{ bottom: 's' }} color="inherit">
                {subtitle}
            </Box>
            {action}
        </Box>
    );
}  

export default function CollectionHooksTable() {
    const [preferences, setPreferences] = useState({ pageSize: 10, visibleContent: ['RecNo', 'deliveryType', 'deliveredWhen'] });

    const [todos, setTodos] = useState([]);

    useEffect(
        () => {
            fetch('https://localhost:7182/api/ReportTest')
                .then(response => response.json())
                .then(responseTodos => {
                    console.log(responseTodos)
                    setTodos(responseTodos)
                });
        }, []);

    const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
        todos,
    {
      filtering: {
        empty: (
          <EmptyState
            title="No instances"
            subtitle="No instances to display."
            action={<Button>Create instance</Button>}
          />
        ),
        noMatch: (
          <EmptyState
            title="No matches"
            subtitle="We can’t find a match."
            action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>}
          />
        ),
      },
      pagination: { pageSize: preferences.pageSize },
      sorting: {},
      selection: {},
    }
    );
    const { selectedItems } = collectionProps;

  return (
      <Table
      {...collectionProps}
      selectedItems={selectedItems}
      columnDefinitions={columnDefinitions}
      visibleColumns={preferences.visibleContent}
      items={items}
      loadingText="Loading resources"
      selectionType="multi"
      trackBy="recNo"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No resources</b>
          <Box
            padding={{ bottom: "s" }}
            variant="p"
            color="inherit"
          >
            No resources to display.
          </Box>
          <Button>Create resource</Button>
        </Box>
      }
      filter={
          <TextFilter
          {...filterProps}
          countText={getMatchesCountText(filteredItemsCount)}
        />
      }
       header={
        <Header
          counter={
            selectedItems.length
              ? "(" + selectedItems.length + "/"+todos.length+")"
              : "("+todos.length+")"
          }
          actions={
            <SpaceBetween
              direction="horizontal"
              size="xs"
            >
              <ButtonDropdown
                items={[
                  {
                    text: "Deactivate",
                    id: "rm",
                    disabled: false
                  },
                  {
                    text: "Activate",
                    id: "mv",
                    disabled: false
                  },
                  {
                    text: "Status 3",
                    id: "rn",
                    disabled: false
                  },
                  {
                    text: "View details",
                    id: "rm",
                    disabled: false
                  },
                  {
                    text: "Edit",
                    id: "mv",
                    disabled: false
                  },
                  {
                    text: "Delete",
                    id: "rn",
                    disabled: false
                  }
                ]}
              >
                Actions
              </ButtonDropdown>
              <Button>Secondary button</Button>
              <Button variant="primary">
                Create resource
              </Button>
            </SpaceBetween>
          }
        >
          Table with action buttons
       </Header>
      }
     pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels} />}
     preferences={
        <CollectionPreferences
          {...collectionPreferencesProps}
          preferences={preferences}
          onConfirm={({ detail }) => setPreferences(detail)}
        />
      } 
    />
  );
}