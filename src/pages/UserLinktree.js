import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {
  ContainerLinks,
  ImageProfile,
  NameTitle,
} from '../styles/ProfileStyles';
import LinkCard from '../components/LinkCard';
import imageweb from '../images/browser.svg';
import imgLinkedIn from '../images/brand-linkedin.svg';
import imgGithub from '../images/brand-github.svg';
import imgInsta from '../images/brand-instagram.svg';

const UserLinktree = () => {
  const { user } = useContext(UserContext);

  const { image, fullname, website, LinkedIn, GitHub, Instagram } = user;
  return (
    <ContainerLinks>
      <ImageProfile src={image} alt="profile" />
      <NameTitle>{fullname}</NameTitle>
      <LinkCard src={website} srcimage={imageweb} type={'WebSite'} />
      <LinkCard src={LinkedIn} srcimage={imgLinkedIn} type={'LinkedIn'} />
      <LinkCard src={GitHub} srcimage={imgGithub} type={'GitHub'} />
      <LinkCard src={Instagram} srcimage={imgInsta} type={'Instagram'} />
    </ContainerLinks>
  );
};

export default UserLinktree;
