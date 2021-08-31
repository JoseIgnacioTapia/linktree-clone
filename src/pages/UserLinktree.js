import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { ImageProfile, ContainerLinks } from '../styles/ProfileStyles';

const UserLinktree = () => {
  const { user } = useContext(UserContext);

  const { image, fullname, website, LinkedIn, GitHub, Instagram } = user;
  return (
    <ContainerLinks>
      <ImageProfile src={image} alt="profile" />
      <h2>{fullname}</h2>
      <h3>{website}</h3>
      <h3>{LinkedIn}</h3>
      <h3>{GitHub}</h3>
      <h3>{Instagram}</h3>
    </ContainerLinks>
  );
};

export default UserLinktree;
