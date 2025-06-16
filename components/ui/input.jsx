import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    (<input
      type={type}
      data-slot="input"
      className={cn(
        "w-full p-5 bg-[#e4e4e4] rounded-[25px]",
        className
      )}
      {...props} />)
  );
}

export { Input }
