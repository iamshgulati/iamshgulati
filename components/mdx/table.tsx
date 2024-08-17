import * as RTTable from "@radix-ui/themes/dist/esm/components/table.js";
import type React from "react";

export const TableRoot = ({ ...props }): React.JSX.Element => (
	<RTTable.Root variant="surface" my="5" {...props} />
);

export const TableHeader = ({ ...props }): React.JSX.Element => <RTTable.Header {...props} />;

export const TableBody = ({ ...props }): React.JSX.Element => <RTTable.Body {...props} />;

export const TableColumnHeaderCell = ({ ...props }): React.JSX.Element => (
	<RTTable.ColumnHeaderCell {...props} />
);

export const TableRow = ({ ...props }): React.JSX.Element => <RTTable.Row {...props} />;

export const TableCell = ({ ...props }): React.JSX.Element => <RTTable.Cell {...props} />;

type TableProps = React.ComponentPropsWithoutRef<typeof RTTable.Root> & {
	header: string[];
	rows: (string | React.ReactNode)[][];
};

export const Table = ({ header = [], rows = [], ...props }: TableProps): React.JSX.Element => (
	<RTTable.Root variant="surface" my="5" {...props}>
		<RTTable.Header>
			<RTTable.Row>
				{header.map((columnHeader) => (
					<RTTable.ColumnHeaderCell key={columnHeader}>{columnHeader}</RTTable.ColumnHeaderCell>
				))}
			</RTTable.Row>
		</RTTable.Header>
		<RTTable.Body>
			{rows.map((row) => (
				<RTTable.Row key={row.toString()}>
					{row.map((cell) => (
						<RTTable.Cell key={cell?.toString()}>{cell}</RTTable.Cell>
					))}
				</RTTable.Row>
			))}
		</RTTable.Body>
	</RTTable.Root>
);
