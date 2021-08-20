// Write your code here
import {ListItem, Button} from './styledComponents'

const GradientDirection = props => {
  const {buttonData, buttonClicked, isActive, value} = props
  const {displayText, directionId} = buttonData

  const onClickedButton = () => {
    buttonClicked(directionId, value)
  }

  return (
    <ListItem>
      <Button type="button" onClick={onClickedButton} isActive={isActive}>
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirection
