import { h } from 'preact'
import Icon from 'common/components/Icon'

import style from './style.scss'

const Header = ({class: mixin, children}) => (
	<div class={`${style.wrHeader} ${mixin ? mixin : ''}`}>
		<div class="container">
			<div class={style.header}>
				{children}
			</div>
		</div>
	</div>
)

export default Header
