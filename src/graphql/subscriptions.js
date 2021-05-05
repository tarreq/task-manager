/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      fName
      lName
      email
      teams {
        nextToken
      }
      tasks {
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      fName
      lName
      email
      teams {
        nextToken
      }
      tasks {
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      fName
      lName
      email
      teams {
        nextToken
      }
      tasks {
        nextToken
      }
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      desc
      status
      users {
        nextToken
      }
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      desc
      status
      users {
        nextToken
      }
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      desc
      status
      users {
        nextToken
      }
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      users {
        nextToken
      }
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      users {
        nextToken
      }
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      users {
        nextToken
      }
    }
  }
`;
export const onCreateTeamUsers = /* GraphQL */ `
  subscription OnCreateTeamUsers {
    onCreateTeamUsers {
      id
      teamId
      userId
      user {
        id
        fName
        lName
        email
      }
      team {
        id
        name
      }
    }
  }
`;
export const onUpdateTeamUsers = /* GraphQL */ `
  subscription OnUpdateTeamUsers {
    onUpdateTeamUsers {
      id
      teamId
      userId
      user {
        id
        fName
        lName
        email
      }
      team {
        id
        name
      }
    }
  }
`;
export const onDeleteTeamUsers = /* GraphQL */ `
  subscription OnDeleteTeamUsers {
    onDeleteTeamUsers {
      id
      teamId
      userId
      user {
        id
        fName
        lName
        email
      }
      team {
        id
        name
      }
    }
  }
`;
export const onCreateUserTasks = /* GraphQL */ `
  subscription OnCreateUserTasks {
    onCreateUserTasks {
      id
      taskId
      userId
      user {
        id
        fName
        lName
        email
      }
      task {
        id
        title
        desc
        status
      }
    }
  }
`;
export const onUpdateUserTasks = /* GraphQL */ `
  subscription OnUpdateUserTasks {
    onUpdateUserTasks {
      id
      taskId
      userId
      user {
        id
        fName
        lName
        email
      }
      task {
        id
        title
        desc
        status
      }
    }
  }
`;
export const onDeleteUserTasks = /* GraphQL */ `
  subscription OnDeleteUserTasks {
    onDeleteUserTasks {
      id
      taskId
      userId
      user {
        id
        fName
        lName
        email
      }
      task {
        id
        title
        desc
        status
      }
    }
  }
`;
