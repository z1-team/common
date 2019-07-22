import { h } from 'preact'
import style from './style.scss'

const Icon = ({icon, class: mixin}) => <i className={`${style.if} ${style[icon]} ${mixin ? mixin : ''}`}></i>

export default Icon
