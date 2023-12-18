import React from "react";
import type { PropsWithoutRefOrColor } from "@radix-ui/themes";
import { Table as RTTable } from "@radix-ui/themes";

export const TableRoot = ({ ...props }): React.JSX.Element => (
  <RTTable.Root {...props} variant="surface" my="5" />
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

type TableProps = {
  data: {
    headers: string[];
    rows: (string[] | React.ReactNode[])[];
  };
} & PropsWithoutRefOrColor<typeof RTTable.Root>;

export const Table = ({
  data: { headers = [], rows = [] },
  ...props
}: TableProps): React.JSX.Element => (
  <RTTable.Root {...props} variant="surface" my="5">
    <RTTable.Header>
      <RTTable.Row>
        {headers.map((columnHeader, index) => (
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
