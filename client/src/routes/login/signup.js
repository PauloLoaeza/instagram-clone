import React, { Component } from 'react';
import { Button, Icon, Divider, Form } from 'semantic-ui-react';
import Box from './../../shared/box';

class SignUp extends Component {
  state = {
    form: {
      username: '',
      password: '',
      fullname: '',
      email: ''
    }
  };

  handleChange = (_, input) => {
    const fields = { ...this.state.form };
    fields[input.name] = input.value;

    this.setState({ form: fields });
  };

  render() {
    const { onShowLogin, onSubmit } = this.props;
    return (
      <div>
        <Box>
          <img src="images/logo.png" alt="logo" />
          <h4>Regístrate para ver fotos y videos de tus amigos.</h4>

          <Form onSubmit={e => onSubmit(e, this.state.form)}>
            <Button color="facebook">
              <Icon name="facebook" />
              Iniciar sesión con Facebook
            </Button>
            <Divider horizontal>Ó</Divider>
            <Form.Field>
              <Form.Input
                name="email"
                placeholder="Email"
                icon={<Icon name="remove circle" color="red" />}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                name="fullname"
                placeholder="Nombre completo"
                icon={<Icon name="remove circle" color="red" />}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                name="username"
                placeholder="Nombre de usuario"
                icon={<Icon name="remove circle" color="red" />}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                type="password"
                name="password"
                placeholder="Contraseña"
                icon={<Icon name="remove circle" color="red" />}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type="submit" primary fluid>
              Regístrate
            </Button>
          </Form>
        </Box>
        <Box>
          ¿Ya tienes una cuenta?{' '}
          <a href="" onClick={onShowLogin}>
            Inicia sesión
          </a>
        </Box>
      </div>
    );
  }
}
export default SignUp;
