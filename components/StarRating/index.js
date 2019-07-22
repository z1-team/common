import { h, Component } from 'preact'
import Icon from 'common/components/Icon'

import style from './style.scss'

class StarRating extends Component {
  render({rating, class: mixin}) {
    const star = Math.round(rating*20)

    return (
      <div class={`${style.stars} ${mixin ? mixin : ''}`}>
        <ul class={style.highlighted} style={{width: star + '%'}}>
          <li><Icon icon="star" /></li>
          <li><Icon icon="star" /></li>
          <li><Icon icon="star" /></li>
          <li><Icon icon="star" /></li>
          <li><Icon icon="star" /></li>
        </ul>
        <ul>
          <li><Icon icon="star" /></li>
          <li><Icon icon="star" /></li>
          <li><Icon icon="star" /></li>
          <li><Icon icon="star" /></li>
          <li><Icon icon="star" /></li>
        </ul>
      </div>
    )
  }
}

export default StarRating
