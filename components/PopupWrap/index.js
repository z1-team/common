import { h } from 'preact'

import style from './style.scss'

const Popups = ({isOpened, children, onClose}) => (
  <div class={isOpened ? `${style.active}` : `${style.normal}`} onClick={onClose}>
    {children}
  </div>
)

export default Popups
