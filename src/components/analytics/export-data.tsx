import React from "react"
import { Button } from "@/components/ui/button"

type ExportDataProps = {
  onExportCSV: () => void
  onExportJSON: () => void
  onExportPDF: () => void
}

export function ExportData({
  onExportCSV,
  onExportJSON,
  onExportPDF
}: ExportDataProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-sm font-medium text-white">Export Data</div>
        <div className="text-xs text-slate-400">
          Download your analytics in different formats
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="ghost" onClick={onExportCSV}>
          CSV
        </Button>

        <Button variant="ghost" onClick={onExportJSON}>
          JSON
        </Button>

        <Button variant="secondary" onClick={onExportPDF}>
          PDF
        </Button>
      </div>
    </div>
  )
}