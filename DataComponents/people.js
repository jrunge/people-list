import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const peopleQuery = gql`
  query users {
    people (ext: true, amount: 100)
      @rest(type: "[Person]", path: "/?{args}") {
      name
      gender
      phone
    }
  }
`

export default function PostList () {
  return (
    <Query query={peopleQuery}>
      {({ loading, error, data: { people } }) => {
        if (error) return <div>Error loading people.'</div>
        if (loading) return <div>Loading</div>

        return (
          <div>
            {people.map((person, i) => (
              <div key={`person-${i}`}>
                <div>{person.name}</div>
                <div>{person.gender}</div>
                <div>{person.phone}</div>
              </div>
            )
            )}
          </div>
        )
      }}
    </Query>
  )
}
