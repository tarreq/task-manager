import React from 'react'

function UserItem({data, cProps}) {
  // return (
    return data.map((user, i) => (
      <tr key={user.email}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={user.image || "https://ubisoft-avatars.akamaized.net/a3c1a636-db47-4751-941b-1acc538932de/default_256_256.png"} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{user.title}</div>
          <div className="text-sm text-gray-500">{user.department}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user?.teams?.items.map(user => user.team.name) }
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button 
          class="outline-none mr-1 mb-1 px-1 py-1 bg-transprent text-xs font-bold text-blue-500 uppercase focus:outline-none hover:bg-indigo-100 rounded"
          onClick={() => cProps.handleOpenAddUserTeamModal(i)}
        >
          Add user team
        </button>
        </td>
      </tr>
    ))
  // )
}

export default UserItem
