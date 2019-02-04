import React, { Component } from 'react'
import './Input.css'

import DropDown from '../DropDown/DropDown'
import filterUsers from '../server/index'

export default class Input extends Component {
	componentDidMount() {
		const users = filterUsers('ben')
		console.log('USERS', users)
	}

	state = {
		cachedUsers: [],
	}

	render() {
		return (
			<div className='Input'>
				<input className='Input_box' />
				{this.renderDropDown()}
			</div>
		)
	}

	renderDropDown() {
		return <DropDown />
	}
}
