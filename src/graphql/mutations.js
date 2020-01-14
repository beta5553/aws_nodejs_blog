/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
export const createLike = `mutation CreateLike(
  $input: CreateLikeInput!
  $condition: ModelLikeConditionInput
) {
  createLike(input: $input, condition: $condition) {
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
export const updateLike = `mutation UpdateLike(
  $input: UpdateLikeInput!
  $condition: ModelLikeConditionInput
) {
  updateLike(input: $input, condition: $condition) {
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
export const deleteLike = `mutation DeleteLike(
  $input: DeleteLikeInput!
  $condition: ModelLikeConditionInput
) {
  deleteLike(input: $input, condition: $condition) {
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
export const createTest1 = `mutation CreateTest1(
  $input: CreateTest1Input!
  $condition: Modeltest1ConditionInput
) {
  createTest1(input: $input, condition: $condition) {
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
export const updateTest1 = `mutation UpdateTest1(
  $input: UpdateTest1Input!
  $condition: Modeltest1ConditionInput
) {
  updateTest1(input: $input, condition: $condition) {
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
export const deleteTest1 = `mutation DeleteTest1(
  $input: DeleteTest1Input!
  $condition: Modeltest1ConditionInput
) {
  deleteTest1(input: $input, condition: $condition) {
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
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createEvent = `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
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
export const updateEvent = `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
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
export const createSiteMessage = `mutation CreateSiteMessage(
  $input: CreateSiteMessageInput!
  $condition: ModelSiteMessageConditionInput
) {
  createSiteMessage(input: $input, condition: $condition) {
    id
    name
    email
    message
  }
}
`;
export const updateSiteMessage = `mutation UpdateSiteMessage(
  $input: UpdateSiteMessageInput!
  $condition: ModelSiteMessageConditionInput
) {
  updateSiteMessage(input: $input, condition: $condition) {
    id
    name
    email
    message
  }
}
`;
export const deleteSiteMessage = `mutation DeleteSiteMessage(
  $input: DeleteSiteMessageInput!
  $condition: ModelSiteMessageConditionInput
) {
  deleteSiteMessage(input: $input, condition: $condition) {
    id
    name
    email
    message
  }
}
`;
export const createEventInvitees = `mutation CreateEventInvitees(
  $input: CreateEventInviteesInput!
  $condition: ModelEventInviteesConditionInput
) {
  createEventInvitees(input: $input, condition: $condition) {
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
export const updateEventInvitees = `mutation UpdateEventInvitees(
  $input: UpdateEventInviteesInput!
  $condition: ModelEventInviteesConditionInput
) {
  updateEventInvitees(input: $input, condition: $condition) {
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
export const deleteEventInvitees = `mutation DeleteEventInvitees(
  $input: DeleteEventInviteesInput!
  $condition: ModelEventInviteesConditionInput
) {
  deleteEventInvitees(input: $input, condition: $condition) {
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
export const createEventStaff = `mutation CreateEventStaff(
  $input: CreateEventStaffInput!
  $condition: ModelEventStaffConditionInput
) {
  createEventStaff(input: $input, condition: $condition) {
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
export const updateEventStaff = `mutation UpdateEventStaff(
  $input: UpdateEventStaffInput!
  $condition: ModelEventStaffConditionInput
) {
  updateEventStaff(input: $input, condition: $condition) {
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
export const deleteEventStaff = `mutation DeleteEventStaff(
  $input: DeleteEventStaffInput!
  $condition: ModelEventStaffConditionInput
) {
  deleteEventStaff(input: $input, condition: $condition) {
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
export const createCategories = `mutation CreateCategories(
  $input: CreateCategoriesInput!
  $condition: ModelCategoriesConditionInput
) {
  createCategories(input: $input, condition: $condition) {
    id
    category
  }
}
`;
export const updateCategories = `mutation UpdateCategories(
  $input: UpdateCategoriesInput!
  $condition: ModelCategoriesConditionInput
) {
  updateCategories(input: $input, condition: $condition) {
    id
    category
  }
}
`;
export const deleteCategories = `mutation DeleteCategories(
  $input: DeleteCategoriesInput!
  $condition: ModelCategoriesConditionInput
) {
  deleteCategories(input: $input, condition: $condition) {
    id
    category
  }
}
`;
export const createAuthPayload = `mutation CreateAuthPayload(
  $input: CreateAuthPayloadInput!
  $condition: ModelAuthPayloadConditionInput
) {
  createAuthPayload(input: $input, condition: $condition) {
    token
  }
}
`;
export const updateAuthPayload = `mutation UpdateAuthPayload(
  $input: UpdateAuthPayloadInput!
  $condition: ModelAuthPayloadConditionInput
) {
  updateAuthPayload(input: $input, condition: $condition) {
    token
  }
}
`;
export const deleteAuthPayload = `mutation DeleteAuthPayload(
  $input: DeleteAuthPayloadInput!
  $condition: ModelAuthPayloadConditionInput
) {
  deleteAuthPayload(input: $input, condition: $condition) {
    token
  }
}
`;
export const createPageInfo = `mutation CreatePageInfo(
  $input: CreatePageInfoInput!
  $condition: ModelPageInfoConditionInput
) {
  createPageInfo(input: $input, condition: $condition) {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
}
`;
export const updatePageInfo = `mutation UpdatePageInfo(
  $input: UpdatePageInfoInput!
  $condition: ModelPageInfoConditionInput
) {
  updatePageInfo(input: $input, condition: $condition) {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
}
`;
export const deletePageInfo = `mutation DeletePageInfo(
  $input: DeletePageInfoInput!
  $condition: ModelPageInfoConditionInput
) {
  deletePageInfo(input: $input, condition: $condition) {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
}
`;
export const createAllEvents = `mutation CreateAllEvents(
  $input: CreateAllEventsInput!
  $condition: ModelallEventsConditionInput
) {
  createAllEvents(input: $input, condition: $condition) {
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
export const updateAllEvents = `mutation UpdateAllEvents(
  $input: UpdateAllEventsInput!
  $condition: ModelallEventsConditionInput
) {
  updateAllEvents(input: $input, condition: $condition) {
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
export const deleteAllEvents = `mutation DeleteAllEvents(
  $input: DeleteAllEventsInput!
  $condition: ModelallEventsConditionInput
) {
  deleteAllEvents(input: $input, condition: $condition) {
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
