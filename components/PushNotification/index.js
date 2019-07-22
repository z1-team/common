import { h, Component } from 'preact'

import style from './style.scss'

import Button from 'common/components/Button'

class Push extends Component {
  render({class: mixin, isOpen, onAccept, onDecline}) {
    return (
      <div class={`${style.normal} ${isOpen ? style.active : ''} ${mixin ? mixin : ''}`}>
        <button class={style.closeButton} onClick={onDecline}></button>
        <p>Раз в 2-3 недели мы добавляем проверенные займы. Хотите получать их спецпредложения для первых клиентов?</p>
        <ul>
          <li>
            <a href="#" onClick={onDecline}>Нет, спасибо</a>
          </li>
          <li>
            <Button class={style.button} id="accept" onClick={onAccept}>Продолжить</Button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Push
