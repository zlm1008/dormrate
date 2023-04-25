import { gql, useQuery } from "@apollo/client";
import { Grid } from "@aws-amplify/ui-react"

let LIST_REVIEWS = gql`
    {
      listRatingModel1s(limit: 10) {
        items {
          UniversityName
          UniversityRating
          DormName
          DormRating
          RoomNumber
          RoomRating
          Rating
        }
      }
    }
`;

//const allReviews = API.graphql({ query: LIST_REVIEWS });
export function ListReviews() {
  const { data, loading, error } = useQuery(LIST_REVIEWS);

  if (loading) return "Loading...";
  if (error) return <pre>{"ERROR: " + error.message}</pre>;
  return (
    <div>
      <Grid>{JSON.stringify(data)}</Grid>
    </div>
  );
}