/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      UniversityName
      UniversityRating
      DormName
      DormRating
      RoomNumber
      RoomRating
      Review
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      UniversityName
      UniversityRating
      DormName
      DormRating
      RoomNumber
      RoomRating
      Review
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      UniversityName
      UniversityRating
      DormName
      DormRating
      RoomNumber
      RoomRating
      Review
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
