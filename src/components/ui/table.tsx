import React from "react"
import { cn } from "@/lib/utils"

type TableProps = React.TableHTMLAttributes<HTMLTableElement>

export function Table({ className, ...props }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className={cn(
          "w-full text-sm border-collapse",
          className
        )}
        {...props}
      />
    </div>
  )
}

type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>

export function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <thead
      className={cn("bg-slate-900 text-slate-400", className)}
      {...props}
    />
  )
}

type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>

export function TableBody({ className, ...props }: TableBodyProps) {
  return (
    <tbody
      className={cn("text-slate-200", className)}
      {...props}
    />
  )
}

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>

export function TableRow({ className, ...props }: TableRowProps) {
  return (
    <tr
      className={cn(
        "border-t border-slate-800 hover:bg-slate-900/50",
        className
      )}
      {...props}
    />
  )
}

type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      className={cn("px-3 py-2", className)}
      {...props}
    />
  )
}

type TableHeaderCellProps = React.ThHTMLAttributes<HTMLTableCellElement>

export function TableHeaderCell({
  className,
  ...props
}: TableHeaderCellProps) {
  return (
    <th
      className={cn("px-3 py-2 text-left font-medium", className)}
      {...props}
    />
  )
}