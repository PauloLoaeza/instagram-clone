import React from 'react';
import { Query } from 'react-apollo';
import gpl from 'graphql-tag';
import ToolBar from './../shared/toolbar';

const query = gpl`
  {
    allUsers {
      id,
      username
    }
  }
`;

const Home = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          <ToolBar />
          Usuarios:
          {data.allUsers.map(user => (
            <div key={user.id}>{user.username}</div>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Home;
