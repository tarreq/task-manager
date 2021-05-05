import React from 'react'

function UserItem({data, cProps}) {
  // return (
    return data.map((team, i) => (
      <tr key={team.email}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{i+1}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{team.name}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button 
          class="outline-none mr-1 mb-1 px-1 py-1 bg-transprent text-xs font-bold text-blue-500 uppercase focus:outline-none hover:bg-indigo-100 rounded"
          // onClick={() => cProps.handleOpenAddUserTeamModal(i)}
        >
          Edit
        </button>
        </td>
      </tr>
    ))
  // )
}

export default UserItem
