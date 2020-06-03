import { withApollo } from '../lib/apollo'

import People from "../DataComponents/people";

const IndexPage = () => (
  <div className="ui container" style={{ paddingTop: 10, paddingBottom: 10 }}>
    <h1 className="ui header padding">User List</h1>
    <People />
  </div>
)

export default withApollo({ ssr: true })(IndexPage)
