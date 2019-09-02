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
    console.log(style)
    return(
      <div class={`${style.testi} ${mixin ? mixin : ''}`}>
        {isLoggedIn && <a href="#" class={style.delete} onClick={this.handleDelete}><Icon icon="times" /></a>}
        <div class={style.body}>
          <Icon icon="quote-left" class={style.quoteLeft} />
          <p>{text}</p>
          <Icon icon="quote-right" class={style.quoteRight} />
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
