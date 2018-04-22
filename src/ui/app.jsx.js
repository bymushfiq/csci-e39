import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import Module from '../assignments/project-1/index.jsx'
=======
import Module from '../assignments/project-2/index.jsx'
>>>>>>> 21609ac18b8ef6e0aac5820abbad87613d58454f

const App = ({auth, ...props}) => {
	switch (auth.status) {
		case `init`: return <span>Authorizing</span>
		case `failure`: return <span>{auth.message}</span>

		default: return <Module {...props} />
	}
}

export default App
