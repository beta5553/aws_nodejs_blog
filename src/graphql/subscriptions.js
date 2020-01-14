/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateLike = `subscription OnCreateLike {
  onCreateLike {
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
export const onUpdateLike = `subscription OnUpdateLike {
  onUpdateLike {
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
export const onDeleteLike = `subscription OnDeleteLike {
  onDeleteLike {
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
export const onCreateTest1 = `subscription OnCreateTest1 {
  onCreateTest1 {
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
export const onUpdateTest1 = `subscription OnUpdateTest1 {
  onUpdateTest1 {
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
export const onDeleteTest1 = `subscription OnDeleteTest1 {
  onDeleteTest1 {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateSiteMessage = `subscription OnCreateSiteMessage {
  onCreateSiteMessage {
    id
    name
    email
    message
  }
}
`;
export const onUpdateSiteMessage = `subscription OnUpdateSiteMessage {
  onUpdateSiteMessage {
    id
    name
    email
    message
  }
}
`;
export const onDeleteSiteMessage = `subscription OnDeleteSiteMessage {
  onDeleteSiteMessage {
    id
    name
    email
    message
  }
}
`;
export const onCreateEventInvitees = `subscription OnCreateEventInvitees {
  onCreateEventInvitees {
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
export const onUpdateEventInvitees = `subscription OnUpdateEventInvitees {
  onUpdateEventInvitees {
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
export const onDeleteEventInvitees = `subscription OnDeleteEventInvitees {
  onDeleteEventInvitees {
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
export const onCreateEventStaff = `subscription OnCreateEventStaff {
  onCreateEventStaff {
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
export const onUpdateEventStaff = `subscription OnUpdateEventStaff {
  onUpdateEventStaff {
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
export const onDeleteEventStaff = `subscription OnDeleteEventStaff {
  onDeleteEventStaff {
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
export const onCreateCategories = `subscription OnCreateCategories {
  onCreateCategories {
    id
    category
  }
}
`;
export const onUpdateCategories = `subscription OnUpdateCategories {
  onUpdateCategories {
    id
    category
  }
}
`;
export const onDeleteCategories = `subscription OnDeleteCategories {
  onDeleteCategories {
    id
    category
  }
}
`;
export const onCreateAuthPayload = `subscription OnCreateAuthPayload {
  onCreateAuthPayload {
    token
  }
}
`;
export const onUpdateAuthPayload = `subscription OnUpdateAuthPayload {
  onUpdateAuthPayload {
    token
  }
}
`;
export const onDeleteAuthPayload = `subscription OnDeleteAuthPayload {
  onDeleteAuthPayload {
    token
  }
}
`;
export const onCreatePageInfo = `subscription OnCreatePageInfo {
  onCreatePageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
}
`;
export const onUpdatePageInfo = `subscription OnUpdatePageInfo {
  onUpdatePageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
}
`;
export const onDeletePageInfo = `subscription OnDeletePageInfo {
  onDeletePageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
}
`;
export const onCreateAllEvents = `subscription OnCreateAllEvents {
  onCreateAllEvents {
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
export const onUpdateAllEvents = `subscription OnUpdateAllEvents {
  onUpdateAllEvents {
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
export const onDeleteAllEvents = `subscription OnDeleteAllEvents {
  onDeleteAllEvents {
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
