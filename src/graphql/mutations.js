/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      users {
        nextToken
      }
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      users {
        nextToken
      }
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      users {
        nextToken
      }
    }
  }
`;
export const createTeamUsers = /* GraphQL */ `
  mutation CreateTeamUsers(
    $input: CreateTeamUsersInput!
    $condition: ModelTeamUsersConditionInput
  ) {
    createTeamUsers(input: $input, condition: $condition) {
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
export const updateTeamUsers = /* GraphQL */ `
  mutation UpdateTeamUsers(
    $input: UpdateTeamUsersInput!
    $condition: ModelTeamUsersConditionInput
  ) {
    updateTeamUsers(input: $input, condition: $condition) {
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
export const deleteTeamUsers = /* GraphQL */ `
  mutation DeleteTeamUsers(
    $input: DeleteTeamUsersInput!
    $condition: ModelTeamUsersConditionInput
  ) {
    deleteTeamUsers(input: $input, condition: $condition) {
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
export const createUserTasks = /* GraphQL */ `
  mutation CreateUserTasks(
    $input: CreateUserTasksInput!
    $condition: ModelUserTasksConditionInput
  ) {
    createUserTasks(input: $input, condition: $condition) {
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
export const updateUserTasks = /* GraphQL */ `
  mutation UpdateUserTasks(
    $input: UpdateUserTasksInput!
    $condition: ModelUserTasksConditionInput
  ) {
    updateUserTasks(input: $input, condition: $condition) {
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
export const deleteUserTasks = /* GraphQL */ `
  mutation DeleteUserTasks(
    $input: DeleteUserTasksInput!
    $condition: ModelUserTasksConditionInput
  ) {
    deleteUserTasks(input: $input, condition: $condition) {
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
