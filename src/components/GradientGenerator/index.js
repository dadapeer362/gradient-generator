import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  Container,
  Heading,
  Paragraph,
  GradientDirectionContainer,
  Form,
  ContainerForm,
  ContainerLabelAndInput,
  ParagraphForm,
  Input,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    colorCodeOne: '#8ae323',
    colorCodeTwo: '#014f7b',
    clickedButtonId: gradientDirectionsList[0].directionId,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    direction: gradientDirectionsList[0].value,
  }

  onGetClickedButton = (id, direction) => {
    this.setState({clickedButtonId: id, direction})
  }

  onChangeColorOne = event => {
    this.setState({colorCodeOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorCodeTwo: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {colorCodeOne, colorCodeTwo, clickedButtonId} = this.state
    this.setState({
      colorOne: colorCodeOne,
      colorTwo: colorCodeTwo,
      direction: clickedButtonId,
    })
  }

  render() {
    const {
      colorCodeOne,
      colorCodeTwo,
      clickedButtonId,
      colorOne,
      colorTwo,
      direction,
    } = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        colorOne={colorOne}
        colorTwo={colorTwo}
        direction={direction}
      >
        <Container>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <GradientDirectionContainer>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                isActive={clickedButtonId === eachItem.directionId}
                value={eachItem.value}
                buttonData={eachItem}
                buttonClicked={this.onGetClickedButton}
              />
            ))}
          </GradientDirectionContainer>
          <Paragraph>Pick the Colors</Paragraph>
          <Form onSubmit={this.onSubmitForm}>
            <ContainerForm>
              <ContainerLabelAndInput>
                <ParagraphForm>{colorCodeOne}</ParagraphForm>
                <br />
                <Input
                  value={colorCodeOne}
                  type="color"
                  bgColor={colorCodeOne}
                  onChange={this.onChangeColorOne}
                />
              </ContainerLabelAndInput>
              <ContainerLabelAndInput>
                <ParagraphForm>{colorCodeTwo}</ParagraphForm>
                <br />
                <Input
                  value={colorCodeTwo}
                  type="color"
                  bgColor={colorCodeTwo}
                  onChange={this.onChangeColorTwo}
                />
              </ContainerLabelAndInput>
            </ContainerForm>
            <ContainerForm>
              <Button type="submit">Generate</Button>
            </ContainerForm>
          </Form>
        </Container>
      </MainContainer>
    )
  }
}

export default GradientGenerator
