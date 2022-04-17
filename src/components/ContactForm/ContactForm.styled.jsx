import styled from '@emotion/styled';

export const FormContainer = styled.form`
  border: 1px solid #afb1b8;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  padding: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: #212121;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  margin-top: 5px;
  height: 30px;
  font-size: 24px;
  padding-left: 5px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus {
    border: 1px solid #2196f3;
  }
`;

export const Button = styled.button`
  padding: 10px 32px;
  font-size: 16px;
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
