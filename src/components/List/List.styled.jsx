import styled from 'styled-components';

export const ContactList = styled.ul`
  list-style: none;
`;

export const ContactItem = styled.li`
  margin-bottom: ${props => props.theme.space[3]}px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  cursor: pointer;  
  width: 180px;
  margin-left: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal};
  border: none;
  padding: ${props => props.theme.space[3]}px;
  background-color:${props => props.theme.colors.green};
  color:${props => props.theme.colors.white};
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;