import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';
import UsersTable from '../components/DataTable';

import Spinner from '../assets/images/spin.svg'
import UserTeamForm from '../components/Users/UserTeamForm';
import { createTeamUsers } from '../graphql/mutations';

function Users() {
  const [users, setUsers] = useState([]);
  const [addUserTeamModalOpen, setAddUserTeamModalOpen] = useState(false);
  const [assignTeamUserId, setAssignTeamUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const head = ['Username', 'Position', 'Status', 'Team'];

  const fetchUsers = async () => {
    setIsLoading(true)
      try {
        const users = await API.graphql(graphqlOperation(listUsers));
        setUsers(users?.data?.listUsers?.items);  
        setIsLoading(false)
      } catch(err) {
        console.log('Error happened :', err)
        setIsLoading(false)
      }
    }

  useEffect(() => {
    fetchUsers();
  }, [])

  const handleOpenAddUserTeamModal = (userIndex) => {
    setAssignTeamUserId(users[userIndex].id)
    setAddUserTeamModalOpen(true)
  }
  
  const handleCloseAddUserTeamModal = () => {
    setAssignTeamUserId(null)
    setAddUserTeamModalOpen(false)
  }

  const handleCreateTeamUsers = async (teamId, userId) => {
    const teamUser = {
      teamId,
      userId
    }
    try {
      await API.graphql(graphqlOperation(createTeamUsers, {input: teamUser}));
      setAddUserTeamModalOpen(false)
      fetchUsers()

    } catch(err) {
      console.log("Error happened ", err)
      setAddUserTeamModalOpen(false)
    }

  }

  const cProps = {
    handleOpenAddUserTeamModal
  }

  return (
    <main>
      <UserTeamForm 
        open={addUserTeamModalOpen}
        handleOpenAddUserTeamModal={handleOpenAddUserTeamModal}
        handleCloseModal={handleCloseAddUserTeamModal}
        modalTitle='Add user team'
        handleModalMainAction={handleCreateTeamUsers}
        actionButtonLabel='Save'
        canelButtonLabel='Cancel'
        assignTeamUserId={assignTeamUserId}
      
      />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {isLoading ? 
        <div className="mt-4 flex justify-center"><img alt="" src={Spinner} className="w-10" /></div>
        :
        <div className="px-4 py-6 sm:px-0">
          <UsersTable head={head} data={users} tableModeParam='users' cProps={cProps} />
        </div>}
      </div>
    </main>
  )
}

export default Users
