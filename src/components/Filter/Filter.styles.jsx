import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 500px;
  margin: 20px auto 0 auto;
  padding: ${props => props.theme.space[3]}px;;
`;