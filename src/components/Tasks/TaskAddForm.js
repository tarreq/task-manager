import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'


function TaskAddForm(props) {

  const [taskOpen, setTaskOpen] = useState(true)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDesc, setTaskDesc] = useState('')

  const cancelButtonRef = useRef();

  const toggleTaskOpen = () => {
    setTaskOpen(!taskOpen)
  }

  useEffect(() => {
    const {editMode, editTask} = props
    if(editMode === true && editTask) {
      const {taskTitle, taskDesc, taskOpen} = props.editTask
      setTaskTitle(taskTitle)
      setTaskDesc(taskDesc)
      setTaskOpen(taskOpen)
    } else {
      resetForm()
    }
  }, [props])

  const resetForm = () => {
    setTaskTitle('')
    setTaskDesc('')
    setTaskOpen(true)
  }

  const {editMode} = props

  return (
    <Transition.Root show={props.open} as={Fragment}>
    <Dialog
      as="div"
      static
      className="fixed z-10 inset-0 overflow-y-auto"
      initialFocus={cancelButtonRef}
      open={props.open}
      onClose={props.closeAddTaskModal}
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
                      {editMode ? 'Edit Task' : 'Add Task'}
                    </label>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-500">
                      Task title
                    </label>
                    <input className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:border-teal" 
                      name="taskTitle" 
                      id="taskTitle" 
                      type="text" 
                      value={taskTitle}
                      placeholder="Type task title"
                      onChange={(e) => setTaskTitle(e.target.value)}
                     />
                  </div>

                  <div className="col-span-3 sm:col-span-2 mt-6">
                    <label className="block text-sm font-medium text-gray-500">
                      Task description
                    </label>
                    {/* <div className="mt-1 flex rounded-md shadow-sm"> */}
                    <textarea
                      id="taskDesc"
                      name="taskDesc"
                      rows={3}
                      className="shadow-sm border mt-1 py-2 px-3 focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Type task description"
                      value={taskDesc}
                      defaultValue={''}
                      onChange={(e) => setTaskDesc(e.target.value)}
                    />

                    {/* </div> */}
                  </div>
                  {/* Toggle */}
                  <div className="col-span-3 sm:col-span-2 mt-6">
                    <label className="block text-sm font-medium text-gray-500">
                      Task open
                    </label>
                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input 
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        type="checkbox" 
                        name="taskOpen" 
                        id="taskOpen"
                        checked={taskOpen}
                        onChange={toggleTaskOpen}
                      />
                      <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    {/* <label for="toggle" class="text-xs text-gray-700">Open</label> */}
                  </div>

                  
                </form>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => props.handleCreateUpdateTask({taskTitle, taskDesc, taskOpen, editMode})}
              >
                Save
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={props.closeAddTaskModal}
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

export default TaskAddForm
