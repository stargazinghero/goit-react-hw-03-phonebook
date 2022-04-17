import styled from '@emotion/styled';

export const ContactListItemBlock = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
`;

export const ContactItemText = styled.p``;

export const Button = styled.button`
  height: 32px;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover,
  :focus {
    background-color: #188ce8;
  }
`;
