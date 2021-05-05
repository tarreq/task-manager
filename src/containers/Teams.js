import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { listTeams } from '../graphql/queries';
import TeamTable from '../components/DataTable'


function Teams() {
  const [teams, setTeams] = useState(null)
  
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
  
  const head = ['ID', 'Name', 'Status']
  return (
    <main>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Teams</h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Replace with your content */}
        <div className="px-4 py-6 sm:px-0">
          {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}
          <TeamTable head={head} data={teams} tableModeParam='teams' />
        </div>
        {/* /End replace */}
      </div>
    </main>
  )
}

export default Teams
