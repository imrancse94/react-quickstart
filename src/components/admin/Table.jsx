import React from 'react'

export default function Table({
    headers = [],
    actionHeader = null,
    children = null
}) {

    

  return (
    <div
  className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
  bis_skin_checked={1}
>
  <table className="min-w-full">
    <thead>
      <tr>
        {headers.length > 0 && 
        headers.map((header,i) =>(
        <th key={i} className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          {header}
        </th>)
        )}

        {headers.length > 0 && actionHeader}
      </tr>
    </thead>
    <tbody className="bg-white">
      {children}
    </tbody>
  </table>
</div>
  )
}
