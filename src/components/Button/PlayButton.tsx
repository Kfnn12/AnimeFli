import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {ReactComponent as PlayIcon} from "../../assets/icons/play.svg"
import Button from './Button'

export default function PlayButton() {
  return (
    <Button variant="icon">
       <FontAwesomeIcon size="2xl" icon={faPlay}/>
    </Button>
  )
}
