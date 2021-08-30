import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ToUserPage = () => {
  const { setIdUser, setConsulting } = useContext(UserContext);

  return (
    <div>
      <Link
        to="/Nachoman907"
        onClick={() => {
          setIdUser(100);
          setConsulting(true);
        }}
      >
        Click Here
      </Link>
    </div>
  );
};

export default ToUserPage;
