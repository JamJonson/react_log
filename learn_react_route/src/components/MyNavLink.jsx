import React from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends React.Component{
	render() {
		return (
			/*将外部所有属性传给NavLink, {...this.props}*/
			<NavLink {...this.props} activeClassName="activeClass" />
		)
	}
}
