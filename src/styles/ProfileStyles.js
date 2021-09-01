import styled from 'styled-components';

export const ImageProfile = styled.img`
  background-color: #fff;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  display: block;
  object-fit: cover;
  object-position: initial;
  filter: none;
`;

export const ContainerLinks = styled.div`
  /* margin: 0px auto; */
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* margin-top: -20%; */

  background: linear-gradient(0deg, rgb(154, 155, 155), rgb(63, 64, 73));
`;

export const NameTitle = styled.h1`
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 32px;
`;
