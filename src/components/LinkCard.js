import React from 'react';
import { CardContainer, Ahref } from '../styles/LinkCardStyles';

const LinkCard = ({ type, src, srcimage }) => {
  return (
    <CardContainer>
      <img src={srcimage} alt="icon" />
      <Ahref src={src}>{type}</Ahref>
    </CardContainer>
  );
};

export default LinkCard;
