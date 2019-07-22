import { h } from 'preact'
import Icon from 'common/components/Icon'

import style from './style.scss'

const Header = ({place, showBot, class: mixin, children}) => (
	<div class={`${style.wrHeader} ${mixin ? mixin : ''}`}>
		<div class="container">
			<div class={style.header}>
				<div class={style.contacts}>
					<p class={style.contactsText}><Icon icon="marker" />{place}</p>
				</div>
				{children}
			</div>
		</div>
	</div>
)

export default Header
