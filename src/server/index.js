import faker from 'faker'

const createUser = () => {
	return {
		firstname: faker.name.firstName(),
		lastname: faker.name.lastName(),
	}
}

// Try changing this to test your input!
const USER_COUNT = 10000

const users = Array(USER_COUNT)
	.fill('')
	.map(x => createUser())

// This method is for you to edit, create the filtering however you deem necessary.
const filterUsers = inputString => {
	const formattedInputString =
		inputString.charAt(0).toUpperCase() + inputString.slice(1)

	const filteredUsers = users.filter(
		user =>
			user.firstname.includes(formattedInputString) ||
			user.lastname.includes(formattedInputString)
	)

	return filteredUsers
}

export default filterUsers
