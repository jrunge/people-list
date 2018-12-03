import { Query } from "react-apollo";
import gql from "graphql-tag";
import PeopleTable from "../Components/peopletable";

export const peopleQuery = gql`
  query users {
    people(ext: true, amount: 100) @rest(type: "[Person]", path: "/?{args}") {
      name
      surname
      gender
      region
      phone
      email
      photo
    }
  }
`;

export default function PostList() {
  return (
    <Query query={peopleQuery}>
      {({ loading, error, data: { people } }) => {
        if (error) return <div>Error loading people.'</div>;
        if (loading) return <div>Loading</div>;

        return <PeopleTable rows={people} />;
      }}
    </Query>
  );
}
