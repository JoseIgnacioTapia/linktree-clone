import styled from 'styled-components';

export const CardContainer = styled.div`
  overflow: hidden;
  margin-bottom: 16px;
  border: 2px solid rgb(255, 255, 255);
  background-color: transparent;
  color: #fff;
  border-radius: 0px;
  width: 70%;
  cursor: pointer;

  display: flex;
  padding: 0 8px;
  transition: 0.2s;

  &:hover {
    color: #333;
    background-color: #fff;
  }
`;

export const Ahref = styled.a`
  display: inline-block;
  margin: 0;
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-weight: bold;
`;
