import styled from 'styled-components';

export const ImageProfile = styled.img`
  border-radius: 50%;
  width: 130px;
  height: 130px;
  display: block;
  object-fit: contain;
  object-position: initial;
  filter: none;
`;

export const ContainerLinks = styled.div`
  margin: 0px auto;
  height: 100%;
  width: 100%;
  max-width: 680px;
  padding-bottom: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameTitle = styled.h1`
  /* color: rgb(255,255,255); */
  color: #333;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;