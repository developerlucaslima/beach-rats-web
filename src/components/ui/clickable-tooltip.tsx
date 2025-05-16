'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

import { TooltipProvider } from "./tooltip"

function ClickableTooltip({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  const [open, setOpen] = React.useState(false)
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  return (
    <TooltipProvider>
      <TooltipPrimitive.Root
        data-slot="clickable-tooltip"
        open={open}
        onOpenChange={setOpen}
      >
        <TooltipPrimitive.Trigger
          {...props}
          data-slot="tooltip-trigger"
          ref={triggerRef}
          onClick={(e: { preventDefault: () => void }) => {
            e.preventDefault()
            setOpen((prev) => !prev)
          }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        >
          {children}
        </TooltipPrimitive.Trigger>
      </TooltipPrimitive.Root>
    </TooltipProvider>
  )
}

export {
  ClickableTooltip,
}
