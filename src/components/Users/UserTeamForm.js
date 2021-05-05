import React, { Fragment, useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import Modal from '../Modal'

import { listTeams } from '../../graphql/queries';


function UserTeamForm(props) {
  const [teams, setTeams] = useState(null)
  const [selectedTeamId, setSelectedTeamId] = useState(null)

  const fetchTeams = async () => {
    try {
      const teams = await API.graphql(graphqlOperation(listTeams));
      setTeams(teams.data.listTeams.items);  
    } catch(err) {
      console.log('Error happened :', err)
    }
    
  }

  useEffect(() => {
    fetchTeams()
  }, [])

  return (
      <Modal {...props} mainActionParams={[selectedTeamId, props.assignTeamUserId]}>
        <form className="w-full font-sans" >
        <div className="text-sm text-grey mb-10">
          <label className="block text-sm text-2xl font-bold text-gray-700">
            Add User team
          </label>
        </div>
          <div className="col-span-3 sm:col-span-2">
            <select 
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
            onChange={(e) => setSelectedTeamId(e.target.value)}
            >
            <option value={0}>Choose team</option>
            {teams && teams.map(team => (
              <option value={team.id}>{team.name}</option>
            ))}
            </select>
          </div>
        </form>
      </Modal>
  )
}

export default UserTeamForm
