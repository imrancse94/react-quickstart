import React from 'react'

export default function Card({title,icon,children}) {
  return (
    <div
          className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5"
          bis_skin_checked={1}
        >
          <div className="space-y-2" bis_skin_checked={1}>
            <p className="text-xs text-gray-400 uppercase">{title}</p>
            <div className="flex items-center space-x-2" bis_skin_checked={1}>
              {children}
            </div>
          </div>
          {icon}
          {/*  */}
        </div>
  )
}
