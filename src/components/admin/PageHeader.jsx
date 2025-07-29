import React from 'react'
// import { useMatches } from 'react-router-dom';

export default function PageHeader({title}) {
    //   const location = useMatches();  
    //   console.log("location", location);
  return (
    <div
        className="flex justify-between items-center border-b border-gray-300 mb-4"
      >
        <h1 className="text-2xl font-semibold pt-2 pb-2">{title}</h1>
      </div>
  )
}
