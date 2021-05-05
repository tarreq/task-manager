import React, { Fragment, useRef, useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'

import TaskTable from '../components/DataTable'
import { listTasks, getTask } from '../graphql/queries';
import { createTask, deleteTask, updateTask, createUserTasks } from '../graphql/mutations';
import TaskAddForm from '../components/Tasks/TaskAddForm';
import AssignTaskForm from '../components/Tasks/AssignTaskForm';

import Spinner from '../assets/images/spin.svg'

function Tasks() {
  // const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState([])
  const [open, setOpen] = useState(false)
  const [assignFormOpen, setAssignFormOpen] = useState(false)
  const [taskOpen, setTaskOpen] = useState(true)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [editTaskId, setEditTaskId] = useState(null)
  const [assignTaskId, setAssignTaskId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [editTask, setEditTask] = useState(null)

  
  const head = ['ID', 'Title', 'Status', 'Description', 'Assigned to'];

  const fetchTasks = async () => {
    setIsLoading(true)
    try {
      const tasks = await API.graphql(graphqlOperation(listTasks));
      setTasks(tasks?.data?.listTasks?.items); 
      setIsLoading(false)
    } catch(err) {
      console.log('Error happened :', err)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [])


  const handleCreateUpdateTask = async ({taskTitle, taskDesc, taskOpen, editMode}) => {
    
    // Task object
    const task = {
      title: taskTitle,
      desc: taskDesc,
      status: taskOpen
    }

    // Create/update task
    try {
      await API.graphql(graphqlOperation(
        editMode ? updateTask : createTask, 
        editMode ? { input: { id: editTaskId, ...task }} : {input: task}));
      setOpen(false)
      fetchTasks()

    } catch(err) {
      console.log("Error happened ", err)
      setOpen(false)
    }

  }
  
  const handleCreateUserTask = async (taskId, userId) => {
    
    // userTask object
    const userTask = {
      taskId,
      userId
    }

    // Create userTask
    try {
      await API.graphql(graphqlOperation(createUserTasks, {input: userTask}));
      setAssignFormOpen(false)
      fetchTasks()

    } catch(err) {
      console.log("Error happened ", err)
      setAssignFormOpen(false)
    }

  }
  
  const openAddTaskModal = () => {
    setOpen(true)
  }

  const HandleOpenAssignTaskModal = (taskId) => {
    setAssignTaskId(taskId)
    setAssignFormOpen(true)
  }

  const closeAddTaskModal = () => {
    setOpen(false)
    setEditMode(false)
    setEditTaskId(null)
  }

  const closeAssignTaskModal = () => {
    setAssignTaskId(null)
    setAssignFormOpen(false)
  }

  const handleEditTask = taskIndex => {
    setEditMode(true)
    populateEditTask(taskIndex)
    openAddTaskModal()
  }
  
  const handleDeleteTask = async taskId => {
    try {
      await API.graphql(graphqlOperation(deleteTask, { input: { id: taskId }}));
      fetchTasks()
    } catch(err) {
      console.log("Error happened ", err)
    }
  }

  const populateEditTask = i => {
    setTaskTitle(tasks[i].title)
    setTaskDesc(tasks[i].desc)
    setTaskOpen(tasks[i].status)
    setEditTaskId(tasks[i].id)
  }

  const cProps = {
    handleEditTask,
    handleDeleteTask,
    HandleOpenAssignTaskModal
  }
 
  return (
    <main>
      <TaskAddForm 
        open={open} 
        setOpen={setOpen}
        closeAddTaskModal={closeAddTaskModal}
        handleCreateUpdateTask={handleCreateUpdateTask}
        editMode={editMode}
        editTask={editMode ? {
          taskTitle,
          taskDesc,
          taskOpen
        } : null}
      />
      <AssignTaskForm
        assignFormOpen={assignFormOpen}
        open={assignFormOpen} 
        setOpen={setAssignFormOpen}
        closeAssignTaskModal={closeAssignTaskModal}
        assignTaskId={assignTaskId}
        handleCreateUserTask={handleCreateUserTask}
      />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-3 text-right sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          onClick={openAddTaskModal}
        >
          Add New
        </button>
      </div>
        {isLoading ? 
        <div className="mt-4 flex justify-center"><img alt="" src={Spinner} className="w-10" /></div>
        :
        <div className="px-4 py-6 sm:px-0">
          <TaskTable head={head} data={tasks} tableModeParam='tasks' cProps={cProps} />
        </div>}
      </div>
    </main>
  )
}

export default Tasks
