import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  font-size: 20px;
  color: #212121;
`;

export const FilterInput = styled.input`
  margin-left: 10px;
  margin-top: 5px;
  height: 20px;
  font-size: 18px;
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
