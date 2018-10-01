import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import SignIn from './login/signin';
import SignUp from './login/signup';
import ForgotPassword from './login/forgotPassword';
import queries from '../graphql/queries';

class Login extends Component {
  state = {
    showLogin: true,
    showRegister: false,
    showForgotPassword: false
  };

  styles = {
    grid: {
      height: '100%',
      width: '900px',
      margin: '0 auto'
    }
  };

  handleShowRegister = e => {
    e.preventDefault();

    this.setState({
      showRegister: true,
      showLogin: false,
      showForgotPassword: false
    });
  };

  handleShowLogin = e => {
    e.preventDefault();

    this.setState({
      showRegister: false,
      showLogin: true,
      showForgotPassword: false
    });
  };

  handleSubmitLogin = (_, fields) => {
    console.log(fields);
  };

  handleSubmitRegister = async (_, fields) => {
    const response = await this.props.mutate({
      variables: fields
    });

    console.log('GraphQL', response);
  };

  render() {
    const { showLogin, showRegister, showForgotPassword } = this.state;
    return (
      <Grid columns={2} verticalAlign="middle" centered style={this.styles.grid}>
        <Grid.Row>
          <Grid.Column>
            <img src="images/phone.png" alt="phone" />
          </Grid.Column>
          <Grid.Column>
            {showLogin && (
              <SignIn onShowRegister={this.handleShowRegister} onSubmit={this.handleSubmitLogin} />
            )}
            {showRegister && (
              <SignUp onShowLogin={this.handleShowLogin} onSubmit={this.handleSubmitRegister} />
            )}
            {showForgotPassword && <ForgotPassword />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default graphql(queries.mutation.createUser)(Login);
