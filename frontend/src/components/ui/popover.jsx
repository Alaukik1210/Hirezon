import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils"; // Ensure this utility is correctly implemented and imported

// Popover Root component
const Popover = PopoverPrimitive.Root;

// Popover Trigger component
const PopoverTrigger = PopoverPrimitive.Trigger;

// Popover Anchor component
const PopoverAnchor = PopoverPrimitive.Anchor;

// Popover Content component
const PopoverContent = React.forwardRef(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none " +
            "data-[state=open]:animate-in data-[state=closed]:animate-out " +
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 " +
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 " +
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);

// Set a display name for the PopoverContent component
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// PropTypes for validation
PopoverContent.propTypes = {
  className: PropTypes.string, // Ensures className is a string
  align: PropTypes.oneOf(["start", "center", "end"]), // Only accepts valid align values
  sideOffset: PropTypes.number, // Ensures sideOffset is a number
};

// Default props (if needed)
PopoverContent.defaultProps = {
  align: "center",
  sideOffset: 4,
};

// Export components
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
