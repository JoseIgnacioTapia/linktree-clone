import { Route, Redirect } from 'react-router';

// Simulando Autenticación
let auth;
auth = true;
// auth = null;

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Usando destructuración, spread operator y un alias para poder renderizar el componente
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
