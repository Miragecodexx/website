"use client"

import { Toaster } from "sonner"

export function Toast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#2C2C2C",
          color: "#F4F1ED",
          border: "1px solid #CBB582",
        },
        success: {
          style: {
            background: "#2C2C2C",
            color: "#F4F1ED",
            border: "1px solid #CBB582",
          },
        },
      }}
    />
  )
} 