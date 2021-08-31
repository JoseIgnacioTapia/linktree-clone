import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {
  ContainerLinks,
  ImageProfile,
  NameTitle,
} from '../styles/ProfileStyles';
import LinkCard from '../components/LinkCard';
import imageweb from '../images/browser.svg';

const UserLinktree = () => {
  const { user } = useContext(UserContext);

  const { image, fullname, website, LinkedIn, GitHub, Instagram } = user;
  return (
    <ContainerLinks>
      <ImageProfile src={image} alt="profile" />
      <NameTitle>{fullname}</NameTitle>
      <LinkCard src={website} srcimage={imageweb} type={'WebSite'} />
      <h3>{website}</h3>
      <h3>{LinkedIn}</h3>
      <h3>{GitHub}</h3>
      <h3>{Instagram}</h3>
    </ContainerLinks>
  );
};

export default UserLinktree;
