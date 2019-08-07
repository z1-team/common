import { h } from 'preact'

import style from './style.scss'

const Popups = ({isOpened, children, onClose, class: mixin}) => (
  <div class={`${isOpened ? style.active : style.normal} ${mixin ? mixin : ''}`} onClick={onClose}>
    {children}
  </div>
)

export default Popups
