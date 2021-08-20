// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style: none;
`

export const Button = styled.button`
  border-radius: 5px;
  padding: 8px;
  font-size: 16px;
  color: #000000;
  font-weight: bold;
  border: 0;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  background-color: ${props => (props.isActive ? '#ffffff' : 'yellow')};
  width: 120px;
  margin: 20px;
  cursor: pointer;
`
