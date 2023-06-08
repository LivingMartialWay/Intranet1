import React, {useEffect, useState, useMemo} from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";




export default () => {
  const [
    selectedItems,
    setSelectedItems
  ] = useState([]);

  const [todos, setTodos] = useState([]);

    useEffect(
        ()=>{
          fetch('https://localhost:7098/api/Todos/')
           .then(response=> response.json())
           .then(responseTodos => {
               console.log(responseTodos)
               setTodos(responseTodos)
          });  
        },[]);

    const tableColumns = useMemo(
    ()=>[
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
          sortingField: "alt"
        },
        { id: "deliveredWhen", header: "deliveredWhen", cell: e => e.deliveredWhen },
        { id: "deliveredBy", header: "deliveredBy", cell: e => e.deliveredBy },
        { id: "businessName", header: "businessName", cell: e => e.businessName },
        { id: "deliveredTo", header: "deliveredTo", cell: e => e.deliveredTo },
        { id: "itemType", header: "itemType", cell: e => e.itemType },
        { id: "checkNo", header: "checkNo", cell: e => e.checkNo },
        { id: "recievedBy", header: "recievedBy", cell: e => e.recievedBy },
        { id: "processedBy", header: "processedBy", cell: e => e.processedBy },
        { id: "processedDate", header: "processedDate", cell: e => e.processedDate }
      ],[]
    );


  return (
    <Table
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}

      columnDefinitions={tableColumns}
      columnDisplay={[
        { id: "recNo", visible: false },
        { id: "deliveryType", visible: true },
        { id: "deliveredWhen", visible: true },
        { id: "deliveredBy", visible: true },
        { id: "businessName", visible: true },
        { id: "deliveredTo", visible: true },
        { id: "itemType", visible: true },
        { id: "checkNo", visible: true },
        { id: "recievedBy", visible: true },
        { id: "processedBy", visible: true },
        { id: "processedDate", visible: true }
      ]}
      items={todos}
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
          filteringPlaceholder="Find resources"
          filteringText=""
        />
      }
      header={
        <Header
          counter={
            selectedItems.length
              ? "(" + selectedItems.length + "/"+todos.length+")"
              : "("+todos.length+")"
          }
        >
          Table with common features
        </Header>
      }
      pagination={
        <Pagination
          currentPageIndex={1}
          pagesCount={2}
          ariaLabels={{
            nextPageLabel: "Next page",
            previousPageLabel: "Previous page",
            pageLabel: pageNumber =>
              `Page ${pageNumber} of all pages`
          }}
        />
      }
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          preferences={{
            pageSize: 10,
            contentDisplay: [
              { id: "variable", visible: true },
              { id: "value", visible: true },
              { id: "type", visible: true },
              { id: "description", visible: true }
            ]
          }}
          pageSizePreference={{
            title: "Page size",
            options: [
              { value: 10, label: "10 resources" },
              { value: 20, label: "20 resources" }
            ]
          }}
          wrapLinesPreference={{
            label: "Wrap lines",
            description:
              "Select to see all the text and wrap the lines"
          }}
          stripedRowsPreference={{
            label: "Striped rows",
            description:
              "Select to add alternating shaded rows"
          }}
          contentDensityPreference={{
            label: "Compact mode",
            description:
              "Select to display content in a denser, more compact mode"
          }}
          contentDisplayPreference={{
            title: "Column preferences",
            description:
              "Customize the columns visibility and order.",
            liveAnnouncementDndStarted: (
              position,
              total
            ) =>
              `Picked up item at position ${position} of ${total}`,
            liveAnnouncementDndDiscarded:
              "Reordering canceled",
            liveAnnouncementDndItemReordered: (
              initialPosition,
              currentPosition,
              total
            ) =>
              initialPosition === currentPosition
                ? `Moving item back to position ${currentPosition} of ${total}`
                : `Moving item to position ${currentPosition} of ${total}`,
            liveAnnouncementDndItemCommitted: (
              initialPosition,
              finalPosition,
              total
            ) =>
              initialPosition === finalPosition
                ? `Item moved back to its original position ${initialPosition} of ${total}`
                : `Item moved from position ${initialPosition} to position ${finalPosition} of ${total}`,
            dragHandleAriaDescription:
              "Use Space or Enter to activate drag for an item, then use the arrow keys to move the item's position. To complete the position move, use Space or Enter, or to discard the move, use Escape.",
            dragHandleAriaLabel: "Drag handle",
            options: [
              {
                id: "variable",
                label: "Variable name",
                alwaysVisible: true
              },
              { id: "value", label: "Text value" },
              { id: "type", label: "Type" },
              { id: "description", label: "Description" }
            ]
          }}
          stickyColumnsPreference={{
            firstColumns: {
              title: "Stick first column(s)",
              description:
                "Keep the first column(s) visible while horizontally scrolling the table content.",
              options: [
                { label: "None", value: 0 },
                { label: "First column", value: 1 },
                { label: "First two columns", value: 2 }
              ]
            },
            lastColumns: {
              title: "Stick last column",
              description:
                "Keep the last column visible while horizontally scrolling the table content.",
              options: [
                { label: "None", value: 0 },
                { label: "Last column", value: 1 }
              ]
            }
          }}
        />
      }
    />
  );
}