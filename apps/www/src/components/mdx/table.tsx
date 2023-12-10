import { Table as RTTable } from "@radix-ui/themes";

const TableRoot = ({ ...props }): React.JSX.Element => (
  <RTTable.Root {...props} variant="surface" my="5" />
);

const TableHeader = ({ ...props }): React.JSX.Element => (
  <RTTable.Header {...props} />
);

const TableBody = ({ ...props }): React.JSX.Element => (
  <RTTable.Body {...props} />
);

const TableColumnHeaderCell = ({ ...props }): React.JSX.Element => (
  <RTTable.ColumnHeaderCell {...props} />
);

const TableRow = ({ ...props }): React.JSX.Element => (
  <RTTable.Row {...props} />
);

const TableCell = ({ ...props }): React.JSX.Element => (
  <RTTable.Cell {...props} />
);

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  ColumnHeaderCell: TableColumnHeaderCell,
  Row: TableRow,
  Cell: TableCell,
};
