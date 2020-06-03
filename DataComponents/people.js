import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from "graphql-tag";
import PeopleTable from "../Components/peopletable";

export const peopleQuery = gql`
  query users {
    results(results: 100) @rest(type: "Results", path: "/?{args}") {
      name @type(name: "Name") {
        first
        last
      }
      gender
      phone
      email
      nat
      picture @type(name: "Picture") {
        medium
      }
    }
  }
`;

export default function People() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    peopleQuery
  )

  if (error) return <div>Error loading people.</div>
  if (loading) return <div>Loading</div>

  const { results } = data
  const people = results.map(person => {
    return {
      name: person.name.first,
      surname: person.name.last,
      gender: person.gender,
      phone: person.phone,
      email: person.email,
      region: person.nat,
      photo: person.picture.medium
    }
  })
  return (
    <PeopleTable rows={people} />
  );
}
