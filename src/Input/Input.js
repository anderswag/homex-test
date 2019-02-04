import React, { Component } from 'react'
import './Input.css'

import DropDown from '../DropDown/DropDown'
import filterUsers from '../server/index'

export default class Input extends Component {
	state = {
		inputText: null,
		cachedUsers: [],
		users: null, // ["Anderson"] || null || []
	}

	/////////////
	// RENDERS //
	/////////////

	render() {
		return (
			<div className='Input'>
				<input className='Input_box' />
				{this.renderDropDown()}
			</div>
		)
	}

	renderDropDown() {
		const { users } = this.state
		if (!users) {
			return
		}

		return <DropDown />
	}

	/////////////
	// GETTERS //
	/////////////

	getUsers() {
		const users = filterUsers()
		this.setState({ users })
	}
}
