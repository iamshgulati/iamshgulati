import React from "react";
import { Table as RTTable } from "@radix-ui/themes";

export const TableRoot = ({ ...props }): React.JSX.Element => (
  <RTTable.Root variant="surface" my="5" {...props} />
);

export const TableHeader = ({ ...props }): React.JSX.Element => (
  <RTTable.Header {...props} />
);

export const TableBody = ({ ...props }): React.JSX.Element => (
  <RTTable.Body {...props} />
);

export const TableColumnHeaderCell = ({ ...props }): React.JSX.Element => (
  <RTTable.ColumnHeaderCell {...props} />
);

export const TableRow = ({ ...props }): React.JSX.Element => (
  <RTTable.Row {...props} />
);

export const TableCell = ({ ...props }): React.JSX.Element => (
  <RTTable.Cell {...props} />
);

interface TableProps
  extends React.ComponentPropsWithoutRef<typeof RTTable.Root> {
  header: string[];
  rows: (string | React.ReactNode)[][];
}

export const Table = ({
  header = [],
  rows = [],
  ...props
}: TableProps): React.JSX.Element => (
  <RTTable.Root variant="surface" my="5" {...props}>
    <RTTable.Header>
      <RTTable.Row>
        {header.map((columnHeader, index) => (
          <RTTable.ColumnHeaderCell key={index}>
            {columnHeader}
          </RTTable.ColumnHeaderCell>
        ))}
      </RTTable.Row>
    </RTTable.Header>
    <RTTable.Body>
      {rows.map((row, index) => {
        return (
          <RTTable.Row key={index}>
            {row.map((cell, index) => (
              <RTTable.Cell key={index}>{cell}</RTTable.Cell>
            ))}
          </RTTable.Row>
        );
      })}
    </RTTable.Body>
  </RTTable.Root>
);
