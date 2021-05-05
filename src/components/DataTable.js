import UserItem from './Users/UserItem'
import TaskItem from './Tasks/TaskItem'
import TeamItem from './Teams/TeamItem'

export default function DataTable({head, data, tableModeParam, cProps}) {
  
  const tableMode = {
    users: <UserItem data={data || []} cProps={cProps} />,
    tasks: <TaskItem data={data || []} cProps={cProps} />,
    teams: <TeamItem data={data || []} cProps={cProps} />
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {head && head.map((item) => (
                    <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                    {item}
                    </th>
                  ))}
                  
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th> */}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableMode[tableModeParam]}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
