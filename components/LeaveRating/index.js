import { h, Component } from 'preact'
import Icon from 'common/components/Icon'

import style from './style.scss'

class LeaveRating extends Component {
  state = {
    hover: 0,
    isHover: false
  }

  handleClick = (event) => {
    const value = parseInt(event.target.getAttribute('data-value'))
    const { onChange } = this.props

    if(typeof onChange === 'function') {
      onChange(value)
    }
  }

  handleMove = (event) => {
    const value = parseInt(event.target.getAttribute('data-value'))

    this.setState({hover: value, isHover: true})
  }

  handleLeave = () => {
    this.setState({isHover: false})
  }

  selectValue() {
    const { hover, isHover } = this.state
    const { rating } = this.props

    return isHover ? hover : rating
  }

  render({class: mixin}) {
    const value = this.selectValue()
    return (
      <ul class={`${style.leaveRate} rate-${value} ${mixin ? mixin: ''}`} onMouseLeave={this.handleLeave}>
        <li data-value="1" onClick={this.handleClick} onMouseEnter={this.handleMove}><Icon class={style.icon} icon="star" /></li>
        <li data-value="2" onClick={this.handleClick} onMouseEnter={this.handleMove}><Icon class={style.icon} icon="star" /></li>
        <li data-value="3" onClick={this.handleClick} onMouseEnter={this.handleMove}><Icon class={style.icon} icon="star" /></li>
        <li data-value="4" onClick={this.handleClick} onMouseEnter={this.handleMove}><Icon class={style.icon} icon="star" /></li>
        <li data-value="5" onClick={this.handleClick} onMouseEnter={this.handleMove}><Icon class={style.icon} icon="star" /></li>
      </ul>
    )
  }
}

export default LeaveRating
