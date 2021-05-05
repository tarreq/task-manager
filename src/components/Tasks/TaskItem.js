import React from 'react'

function TaskItem({data, cProps}) {

    return data.map((task, i) => (
      <tr key={i}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{i+1}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{task.title}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${task.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {task.status ? 'Active' : 'Closed'}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.desc}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {task?.users?.items.map(user => user.user.email) }
          {/* {task?.users?.items.reduce((acc, item) => `${acc}, ${item.user.email}`, '') } */}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button 
          class="outline-none mr-1 mb-1 px-1 py-1 bg-transprent text-xs font-bold text-blue-500 uppercase focus:outline-none hover:bg-indigo-100 rounded"
          onClick={() => cProps.HandleOpenAssignTaskModal(task.id)}
        >
          Assign
        </button>
        <button 
          class="outline-none mr-1 mb-1 px-1 py-1 bg-transprent text-xs font-bold text-blue-500 uppercase focus:outline-none hover:bg-indigo-100 rounded"
          onClick={() => cProps.handleEditTask(i)}
        >
          Edit
        </button>
        <button 
          class="outline-none mr-1 mb-1 px-1 py-1 bg-transprent text-xs font-bold text-red-500 uppercase focus:outline-none hover:bg-red-100 rounded"
          onClick={() => cProps.handleDeleteTask(task.id)}
        >
          Delete
        </button>
        </td>
      </tr>
    ))
}

export default TaskItem
