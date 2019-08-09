import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import style from './style.scss'

import Button from 'common/components/Button'

class Cookie extends Component {
  state = {
    current: '',
    show: ''
  }

  componentDidMount() {
    this.setState({show: 'active'})
  }

  handleMore = (event) => {
    event.preventDefault()
    this.setState({current: 'all'})
  }

  handleAgree = (id) => {
    const {onAccept} = this.props
    this.setState({show: ''})
    onAccept()
  }

  render({class: mixin}, {current, show}) {
    const getAgreement = localStorage.getItem('agreeWithCookie')

    if(getAgreement) {
      return null
    }

    return (
      <div class={`${style.cookie} ${show !== '' ? style[show] : ''} ${current !== '' ? style[current] : ''} ${mixin ? mixin : ''}`}>
        <button class={style.close} onClick={this.handleAgree}></button>
        <div class={style.brief}>
          <p class={style.briefText}>Сайт использует файлы cookies.</p>
          <a href="#" class={style.briefMore} onClick={this.handleMore}>Подробнее</a>
        </div>
        <div class={style.full}>
          <section>
            <h3>Сайт использует файлы cookies</h3>
            <p>Файл cookie - это небольшой фрагмент текста, передаваемый в браузер с сайта, который вы посетили. Он помогает сайту запомнить информацию о вас, например то, на каком языке вы предпочитаете его просматривать. Это будет полезно при следующем посещении этого же сайта. Благодаря файлам cookie просмотр сайтов становится значительно более удобным.</p>
            <p>Файлы cookie используются нами так же:</p>
            <ul>
              <li>для аналитики, например, для подсчета количества посещений страницы</li>
              <li>для того, чтобы дать вам возможность регистрироваться, авторизовываться через социальные сети и делиться информацией в социальных сетях.</li>
            </ul>
          </section>
          <footer>
            <Button class={style.button} id="agree-cookie" onClick={this.handleAgree}>Ок, спасибо</Button>
            <Link href="/confidentiality">Политика конфиденциальности</Link>
          </footer>
        </div>
      </div>
    )
  }
}

export default Cookie
