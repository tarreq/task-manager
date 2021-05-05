import React, { Fragment, useRef, useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { Dialog, Transition, Listbox } from '@headlessui/react'
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { listUsers } from '../../graphql/queries';

function AssignTaskForm(props) {
  const cancelButtonRef = useRef();
  const [users, setUsers] = useState(null)
  const [selectedUserId, setSelectedUserId] = useState(null)

  const fetchUsers = async () => {
    try {
      const users = await API.graphql(graphqlOperation(listUsers));
      setUsers(users.data.listUsers.items);  
    } catch(err) {
      console.log('Error happened :', err)
    }
    
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Transition.Root show={props.assignFormOpen} as={Fragment}>
    <Dialog
      as="div"
      static
      className="fixed z-10 inset-0 overflow-y-auto"
      initialFocus={cancelButtonRef}
      open={props.assignFormOpen}
      onClose={props.closeAssignTaskModal}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {/* form start  */}
                <form className="w-full font-sans" >
                  <div className="text-sm text-grey mb-10">
                    <label className="block text-sm text-2xl font-bold text-gray-700">
                      Assign Task
                    </label>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <select 
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                    onChange={(e) => setSelectedUserId(e.target.value)}
                   >
                    <option value={0}>Choose user</option>
                    {users && users.map(user => (
                      <option value={user.id}>{user.email}</option>
                    ))}
                  </select>
                   </div>
                </form>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => props.handleCreateUserTask(props.assignTaskId, selectedUserId)}
              >
                Assign
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={props.closeAssignTaskModal}
                ref={cancelButtonRef}
              >
                Cancel
              </button>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
  )
}

export default AssignTaskForm
