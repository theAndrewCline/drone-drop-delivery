import React from 'react'

export function Page({ children }: any) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-screen p-4 overflow-auto">
      {children}
    </div>
  )
}
