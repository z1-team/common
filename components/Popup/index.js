import { h, Component } from 'preact'

import style from './style.scss'

class Popup extends Component {
  handleClick(event) {
    event.stopPropagation()
  }

  render({isOpened, children, name, class: mixin}) {
    return (
      <div class={`${style[name]} ${isOpened ? style.active : ''} ${mixin}`} onClick={this.handleClick}>
        {children}
      </div>
    )
  }
}

export default Popup
