import React, { Component } from 'react';
import { Divider, Form, Button, Icon, Input } from 'semantic-ui-react';
import Box from './../../shared/box';

class SignIn extends Component {
  state = {
    form: {
      username: '',
      password: ''
    }
  };

  handleChange = (_, input) => {
    const fields = { ...this.state.form };
    fields[input.name] = input.value;

    this.setState({ form: fields });
  };

  render() {
    const { onShowRegister, onSubmit } = this.props;
    return (
      <div>
        <Box>
          <img src="images/logo.png" alt="logo" />
          <Form onSubmit={e => onSubmit(e, this.state.form)}>
            <Form.Field>
              <Input name="username" placeholder="Email o Usuario" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Input
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type="submit" primary fluid>
              Iniciar sesión
            </Button>
            <Divider horizontal>Ó</Divider>
            <Button color="facebook">
              <Icon name="facebook" />
              Inicia sesión con Facebook
            </Button>
          </Form>
        </Box>
        <Box>
          ¿No tienes una cuenta?{' '}
          <a href="" onClick={onShowRegister}>
            Registrate
          </a>
        </Box>
      </div>
    );
  }
}

export default SignIn;
