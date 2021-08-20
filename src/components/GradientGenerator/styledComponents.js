// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: ${props =>
    `linear-gradient(to ${props.direction}, ${props.colorOne}, ${props.colorTwo})`};
  height: 120vh;
`

export const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
`

export const GradientDirectionContainer = styled.ul`
  display: flex;
  flex-direction: row;
`

export const Form = styled.form`
  margin: 0;
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ContainerLabelAndInput = styled.div`
  margin: 20px;
`

export const ParagraphForm = styled.p`
  color: #ffffff;
  font-size: 18px;
  text-align: center;
`

export const Input = styled.input`
  width: 150px;
  height: 60px;
  background-color: ${props => props.bgColor};
  border: 0;
  cursor: pointer;
`

export const Button = styled.button`
  background-color: #00c9b7;
  color: #000000;
  padding: 10px;
  width: 150px;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`
