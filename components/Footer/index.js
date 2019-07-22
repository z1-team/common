import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import style from './style.scss'

class Footer extends Component {
	handleClick = (event) => {
		event.preventDefault()

		const {isLoggedIn, onLogin} = this.props

		onLogin(isLoggedIn)
	}
	render({isLoggedIn, logo, class: mixin}) {
    return (
      <div class={`${style.wrFooter} ${mixin ? mixin : ''}`} id="footer">
        <div class="container">
          <div class={style.footer}>
            <span class={style.logo}><img src={logo}/></span>
            <small>&copy; 2019 Moneyonline &mdash; все займы онлайн на карту или наличными в одном месте. 16+</small>
            <ul class={style.admin}>
              <li><button onClick={this.handleClick}>{isLoggedIn ? "Выйти" : "Войти"}</button></li>
              {isLoggedIn && <li><Link href="/moderate">Модерация отзывов</Link></li>}
              <li><Link activeClassName="active" href="/confidentiality">Политика конфиденциальности</Link></li>
            </ul>
          </div>
        </div>
      </div>
		)
	}
}

export default Footer
