import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserLinktree = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>{user.username}</h2>
      <h3>{user.website}</h3>
      <h3>{user.LinkedIn}</h3>
      <h3>{user.GitHub}</h3>
      <h3>{user.Instagram}</h3>
    </div>
  );
};

export default UserLinktree;
