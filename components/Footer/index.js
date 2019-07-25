import { h, Component } from 'preact'

import style from './style.scss'

class Footer extends Component {
	handleClick = (event) => {
		event.preventDefault()

		const {isLoggedIn, onLogin} = this.props

		onLogin(isLoggedIn)
	}
	render({isLoggedIn, logo, class: mixin, children}) {
    return (
      <div class={`${style.wrFooter} ${mixin ? mixin : ''}`} id="footer">
        <div class="container">
          <div class={style.footer}>
            {children}
          </div>
        </div>
      </div>
		)
	}
}

export default Footer
