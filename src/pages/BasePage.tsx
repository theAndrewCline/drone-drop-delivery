import React from 'react'
import 'twin.macro'

export function Page({ children }: any) {
  return (
    <div tw="flex flex-col items-center flex-1 min-h-screen pt-4 mx-auto max-w-screen-lg">
      {children}
    </div>
  )
}
