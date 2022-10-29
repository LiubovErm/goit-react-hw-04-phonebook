import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Input = styled.input`
  max-width: 500px;
  margin-top: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px;
`;

export const Button = styled.button`
  cursor: pointer;  
  width: 180px;
  border: none;
  border-radius: ${props => props.theme.radii.normal};
  padding: ${props => props.theme.space[3]}px;
  margin-top: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  background-color:${props => props.theme.colors.green};
  color:${props => props.theme.colors.white};
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;