import { h, Component } from 'preact'
import Icon from 'common/components/Icon'

import style from './style.scss'

class ToTop extends Component{
  state = {
    isVisible: false
  }

  componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const {isVisible} = this.state

		this.setState(prev => {
      const isVisible = window.pageYOffset > 400
      return prev.isVisible !== isVisible ? {isVisible} : null
    })
	}

  handleToTop = (event) => {
    event.preventDefault()
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  render(props, {isVisible}) {
    return (
      <a href="#" className={`${style.toTop} ${isVisible ? style.active : ''}`} onClick={this.handleToTop}>
        <Icon icon="arrow-up-alt" />
      </a>
    )
  }
}

export default ToTop
