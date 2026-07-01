import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

type Payment = {
  id: string
  date: string
  amount: string
  status: "paid" | "pending" | "failed"
  method: string
}

type PaymentHistoryProps = {
  payments: Payment[]
}

export function PaymentHistory({ payments }: PaymentHistoryProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Method</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {payments.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-slate-400">
                No payments found
              </TableCell>
            </TableRow>
          ) : (
            payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      payment.status === "paid"
                        ? "success"
                        : payment.status === "pending"
                        ? "warning"
                        : "danger"
                    }
                  >
                    {payment.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}