import React from 'react';
import * as Table from 'reactabular-table';

import 'semantic-ui-css/semantic.css';

const columns = [
  {
    property: 'photo',
    // props: {
    //   style: { minWidth: 50, width: 50 }
    // },
    header: {
      label: 'Photo'
    },
    cell: {
      formatters: [
        (photo, extra) => (
          <img src={photo} className="ui tiny rounded image"/>
        )
      ]
    }
  },
  {
    property: 'name',
    header: {
      label: 'First Name'
    }
  },
  {
    property: 'surname',
    header: {
      label: 'Last Name'
    }
  },
  {
    property: 'gender',
    header: {
      label: 'Gender'
    }
  },
  {
    property: 'region',
    header: {
      label: 'Region'
    }
  },
  {
    property: 'phone',
    header: {
      label: 'Phone'
    }
  },
  {
    property: 'email',
    header: {
      label: 'Email'
    }
  }
];

class PeopleTable extends React.Component {
  render() {
    return (
      <Table.Provider
        className="ui table striped"
        columns={columns}
      >
        <Table.Header
        />

        <Table.Body
          rows={this.props.rows}
          rowKey="email"
        />
      </Table.Provider>
    );
  }

}

export default PeopleTable
