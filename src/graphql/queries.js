/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fName
        lName
        email
        teams {
        items {
          team {
            name
            id
          }
        }
      }
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        desc
        status
        users {
        items {
          userId
          user {
            email
          }
        }
      }
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      users {
        nextToken
      }
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;
export const getTeamUsers = /* GraphQL */ `
  query GetTeamUsers($id: ID!) {
    getTeamUsers(id: $id) {
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
export const listTeamUserss = /* GraphQL */ `
  query ListTeamUserss(
    $filter: ModelTeamUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamId
        userId
      }
      nextToken
    }
  }
`;
export const getUserTasks = /* GraphQL */ `
  query GetUserTasks($id: ID!) {
    getUserTasks(id: $id) {
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
export const listUserTaskss = /* GraphQL */ `
  query ListUserTaskss(
    $filter: ModelUserTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTaskss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        taskId
        userId
      }
      nextToken
    }
  }
`;
