import React from 'react'

export function Page({ children }: any) {
  return (
    <div className="flex flex-col pt-12 items-center flex-1 min-h-screen max-w-screen-lg mx-auto overflow-auto">
      {children}
    </div>
  )
}
