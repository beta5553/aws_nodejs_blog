/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    postOwnerId
    postOwnerUsername
    postTitle
    postBody
    createdAt
    comments {
      items {
        id
        commentOwnerId
        commentOwnerUsername
        content
        createdAt
      }
      nextToken
    }
    likes {
      items {
        id
        numberLikes
        likeOwnerId
        likeOwnerUsername
      }
      nextToken
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postOwnerId
      postOwnerUsername
      postTitle
      postBody
      createdAt
      comments {
        nextToken
      }
      likes {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    commentOwnerId
    commentOwnerUsername
    post {
      id
      postOwnerId
      postOwnerUsername
      postTitle
      postBody
      createdAt
      comments {
        nextToken
      }
      likes {
        nextToken
      }
    }
    content
    createdAt
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      commentOwnerId
      commentOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        createdAt
      }
      content
      createdAt
    }
    nextToken
  }
}
`;
export const getLike = `query GetLike($id: ID!) {
  getLike(id: $id) {
    id
    numberLikes
    likeOwnerId
    likeOwnerUsername
    post {
      id
      postOwnerId
      postOwnerUsername
      postTitle
      postBody
      createdAt
      comments {
        nextToken
      }
      likes {
        nextToken
      }
    }
  }
}
`;
export const listLikes = `query ListLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        createdAt
      }
    }
    nextToken
  }
}
`;
export const getTest1 = `query GetTest1($id: ID!) {
  getTest1(id: $id) {
    id
    numberLikes
    likeOwnerId
    likeOwnerUsername
    post {
      id
      postOwnerId
      postOwnerUsername
      postTitle
      postBody
      createdAt
      comments {
        nextToken
      }
      likes {
        nextToken
      }
    }
  }
}
`;
export const listTest1s = `query ListTest1s(
  $filter: Modeltest1FilterInput
  $limit: Int
  $nextToken: String
) {
  listTest1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        createdAt
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    events {
      id
      createdAt
      createdBy {
        id
        name
        email
      }
      startDate
      endDate
      description
      invited {
        id
        going
      }
      location
      preRendered
      private
      staff {
        id
      }
      title
      updatedAt
    }
    invitedTo {
      id
      user {
        id
        name
        email
      }
      event {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      going
    }
    staffing {
      id
      user {
        id
        name
        email
      }
      event {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      categories {
        id
        category
      }
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      events {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      invitedTo {
        id
        going
      }
      staffing {
        id
      }
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    createdAt
    createdBy {
      id
      name
      email
      events {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      invitedTo {
        id
        going
      }
      staffing {
        id
      }
    }
    startDate
    endDate
    description
    invited {
      id
      user {
        id
        name
        email
      }
      event {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      going
    }
    location
    preRendered
    private
    staff {
      id
      user {
        id
        name
        email
      }
      event {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      categories {
        id
        category
      }
    }
    title
    updatedAt
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      createdBy {
        id
        name
        email
      }
      startDate
      endDate
      description
      invited {
        id
        going
      }
      location
      preRendered
      private
      staff {
        id
      }
      title
      updatedAt
    }
    nextToken
  }
}
`;
export const getSiteMessage = `query GetSiteMessage($id: ID!) {
  getSiteMessage(id: $id) {
    id
    name
    email
    message
  }
}
`;
export const listSiteMessages = `query ListSiteMessages(
  $filter: ModelSiteMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listSiteMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      message
    }
    nextToken
  }
}
`;
export const getEventInvitees = `query GetEventInvitees($id: ID!) {
  getEventInvitees(id: $id) {
    id
    user {
      id
      name
      email
      events {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      invitedTo {
        id
        going
      }
      staffing {
        id
      }
    }
    event {
      id
      createdAt
      createdBy {
        id
        name
        email
      }
      startDate
      endDate
      description
      invited {
        id
        going
      }
      location
      preRendered
      private
      staff {
        id
      }
      title
      updatedAt
    }
    going
  }
}
`;
export const listEventInviteess = `query ListEventInviteess(
  $filter: ModelEventInviteesFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventInviteess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        name
        email
      }
      event {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      going
    }
    nextToken
  }
}
`;
export const getEventStaff = `query GetEventStaff($id: ID!) {
  getEventStaff(id: $id) {
    id
    user {
      id
      name
      email
      events {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      invitedTo {
        id
        going
      }
      staffing {
        id
      }
    }
    event {
      id
      createdAt
      createdBy {
        id
        name
        email
      }
      startDate
      endDate
      description
      invited {
        id
        going
      }
      location
      preRendered
      private
      staff {
        id
      }
      title
      updatedAt
    }
    categories {
      id
      category
    }
  }
}
`;
export const listEventStaffs = `query ListEventStaffs(
  $filter: ModelEventStaffFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventStaffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        name
        email
      }
      event {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      categories {
        id
        category
      }
    }
    nextToken
  }
}
`;
export const getCategories = `query GetCategories($id: ID!) {
  getCategories(id: $id) {
    id
    category
  }
}
`;
export const listCategoriess = `query ListCategoriess(
  $filter: ModelCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategoriess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category
    }
    nextToken
  }
}
`;
export const getAuthPayload = `query GetAuthPayload($id: ID!) {
  getAuthPayload(id: $id) {
    token
  }
}
`;
export const listAuthPayloads = `query ListAuthPayloads(
  $filter: ModelAuthPayloadFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthPayloads(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      token
    }
    nextToken
  }
}
`;
export const getPageInfo = `query GetPageInfo($id: ID!) {
  getPageInfo(id: $id) {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
}
`;
export const listPageInfos = `query ListPageInfos(
  $filter: ModelPageInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listPageInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    nextToken
  }
}
`;
export const getAllEvents = `query GetAllEvents($id: ID!) {
  getAllEvents(id: $id) {
    count
    events {
      id
      createdAt
      createdBy {
        id
        name
        email
      }
      startDate
      endDate
      description
      invited {
        id
        going
      }
      location
      preRendered
      private
      staff {
        id
      }
      title
      updatedAt
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalRecords
  }
}
`;
export const listAllEventss = `query ListAllEventss(
  $filter: ModelallEventsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAllEventss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      count
      events {
        id
        createdAt
        startDate
        endDate
        description
        location
        preRendered
        private
        title
        updatedAt
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalRecords
    }
    nextToken
  }
}
`;
