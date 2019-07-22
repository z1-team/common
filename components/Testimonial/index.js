import { h, Component } from 'preact'
import Icon from 'common/components/Icon'

import style from './style'

class Testi extends Component {

  handleDelete = (event) => {
    event.preventDefault()

    const { testiID, onDelete } = this.props

    if(typeof onDelete === 'function') {
      onDelete(testiID)
    }
  }

  render({class: mixin, text, user, rating, isLoggedIn}) {
    return(
      <div class={`${style.testi} ${mixin ? mixin : ''}`}>
        {isLoggedIn && <a href="#" class={style.delete} onClick={this.handleDelete}><Icon icon="times" /></a>}
        <div>
          <Icon icon="quote-left" />
          <p>{text}</p>
          <Icon icon="quote-right" />
        </div>
        <footer>
          <p>{user}</p>
          <ul class={`rate-${rating}`}>
            <li><Icon icon="star" /></li>
            <li><Icon icon="star" /></li>
            <li><Icon icon="star" /></li>
            <li><Icon icon="star" /></li>
            <li><Icon icon="star" /></li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Testi