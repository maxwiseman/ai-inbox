"use client";

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import * as React from "react";
import { CaretSortIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { cn } from ".";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuTrigger,
} from "./context-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Input } from "./input";
import { Spinner } from "./spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

export function DataTable<T>({
  data,
  columns,
  searchKey,
  defaultVisibility = {},
  paginated = false,
  loading = false,
}: {
  data: T[];
  columns: ColumnDef<T>[];
  searchKey?: string;
  defaultVisibility?: VisibilityState;
  paginated?: boolean;
  loading?: boolean;
}): React.ReactElement {
  if (columns[0] && columns[0].id !== "select")
    columns.unshift({
      id: "select",
      // eslint-disable-next-line react/no-unstable-nested-components -- It is ok because we are using tanstack tables
      header: ({ table }) => (
        <Checkbox
          aria-label="Select all"
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          className="table-cell"
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(Boolean(value));
          }}
        />
      ),
      // eslint-disable-next-line react/no-unstable-nested-components -- It is ok because we are using tanstack tables
      cell: ({ row }) => (
        <Checkbox
          aria-label="Select row"
          checked={row.getIsSelected()}
          className="table-cell"
          onCheckedChange={(value) => {
            row.toggleSelected(Boolean(value));
          }}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    });

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(defaultVisibility);
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: paginated ? getPaginationRowModel() : undefined,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center pb-4">
        {searchKey ? (
          <Input
            className="max-w-sm"
            onChange={(event) =>
              table.getColumn(searchKey)?.setFilterValue(event.target.value)
            }
            placeholder="Filter..."
            value={
              (table.getColumn(searchKey)?.getFilterValue() as
                | string
                | undefined) ?? ""
            }
          />
        ) : null}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto" variant="outline">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    checked={column.getIsVisible()}
                    className="capitalize"
                    key={column.id}
                    onCheckedChange={(value) => {
                      column.toggleVisibility(Boolean(value));
                    }}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead
                          className="[&:has([role=checkbox])]:px-1[&:has([role=checkbox])]:pl-2 bg-muted [&:has([role=checkbox])]:pl-2"
                          key={header.id}
                        >
                          {/* eslint-disable-next-line no-nested-ternary -- It's fine in this case */}
                          {header.isPlaceholder ? null : typeof header.column
                              .columnDef.header === "string" ? (
                            <Button
                              className="p-0 font-bold hover:bg-transparent"
                              onClick={() => {
                                header.column.toggleSorting(
                                  header.column.getIsSorted() === "asc",
                                );
                              }}
                              variant="ghost"
                            >
                              {header.column.columnDef.header.toString()}
                              <CaretSortIcon className="ml-2 h-4 w-4" />
                            </Button>
                          ) : (
                            flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )
                          )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
            </ContextMenuTrigger>
            <ContextMenuContent>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <ContextMenuCheckboxItem
                      checked={column.getIsVisible()}
                      className="capitalize"
                      key={column.id}
                      onCheckedChange={(value) => {
                        column.toggleVisibility(Boolean(value));
                      }}
                    >
                      {column.id}
                    </ContextMenuCheckboxItem>
                  );
                })}
            </ContextMenuContent>
          </ContextMenu>
          {/* </Table>
        <div
          className={cn(
            "flex w-full items-center gap-4 overflow-hidden bg-muted/50 p-2 py-2 transition-all",
            {
              "h-0 p-0": !loading,
            },
          )}
        >
          <Spinner />
          Checking for new assignments...
        </div>
        <Table> */}
          <TableBody>
            <tr>
              <td className="p-0" colSpan={10000}>
                <div
                  className={cn(
                    "flex items-center gap-2 overflow-hidden bg-muted/50 p-2 transition-all",
                    { "h-0 p-0": !loading },
                  )}
                >
                  <Spinner className="h-4 w-4" />
                  Checking for new assignments...
                </div>
              </td>
            </tr>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  data-state={row.getIsSelected() && "selected"}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      className="[&:has([role=checkbox])]:px-1[&:has([role=checkbox])]:pl-2 [&:has([role=checkbox])]:pl-2"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        {paginated ? (
          <div className="space-x-2">
            <Button
              disabled={!table.getCanPreviousPage()}
              onClick={() => {
                table.previousPage();
              }}
              size="sm"
              variant="outline"
            >
              Previous
            </Button>
            <Button
              disabled={!table.getCanNextPage()}
              onClick={() => {
                table.nextPage();
              }}
              size="sm"
              variant="outline"
            >
              Next
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTableSimple<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>): React.ReactElement {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                data-state={row.getIsSelected() && "selected"}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center" colSpan={columns.length}>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
