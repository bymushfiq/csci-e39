import React from 'react'
import PropTypes from 'prop-types'
import Carousel from './carousel.jsx'
import Uploader from '../../ui/components/uploader.jsx'
import Button from './button.jsx'
import ProgressBar from './progressbar.jsx'
import Gallery from './gallery.jsx'


<<<<<<< HEAD
const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)


	return (
		<div className="container">

			<header className="carousel-component" role="banner">
				<Carousel />
			</header>

	      	<section className="uploader-component">
		      	<p className="content">Use the following image uploader to create a gallery. You can also follow along online for latest travel stories.</p>
			    <form action="#">
			           	<label tabIndex="0"  className="uploader">
			            	Upload
			            <Uploader upload={actions.upload}/>
			        </label>
			    </form>
				<Button cssclass="button-component" content="Follow" openThisSite={()=> {window.open('http://google.com','_blank')} } />
	     	</section>

			<section className="progressbar-component">
				<ProgressBar title="In Progress" pendingFiles={pendingFiles}/>
			</section>

			<main className="gallery-component" role="main">
				<Gallery title="Completed" completedFiles={completedFiles}/>
        	</main>

		</div>
	)
=======

//step 1: extend the react component
class Uploads extends React.Component {

	//step 2: add in a constructor
	constructor(props) {
		super(props);
		this.state = {
			sidebarActive: false,	//step 3: we are setting state here: by default the state/status is false
		}
	}

	//step 4: we have toggle function (which changes/toggles state to the oppisite of current state)
		//this is available but we are not using it yet
	toggleSidebar() {
		this.setState({sidebarActive: !this.state.sidebarActive})
	}

	//step 5: copy render and join the consts
	render() {
		//ternary operator below - depending on is the sidebar state active? 1) if so text is 'Toggle Sidebar Off' 2) If not 'Toggle Sidebar On'
		const buttonText = this.state.sidebarActive ? 'Toggle Sidebar Off' : 	'Toggle Sidebar On';
		const {sidebarActive} = this.state
		const {uploads, actions} = this.props //step 6

		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = uploads.files.filter(({progress}) => !progress)

		//step 7: added classNames
			//here we are passing an onclick (we are using the function here) to a button
		//step 8: we are checking the state of sidebarActive (true/false) && rendering the sidebar

		return <div>

			<h1 className="heading">CSS Grid when some sections don not render!</h1>
			<div className="instructions">
				<p>The challenge: Fix the CSS Grid so that the main area takes up all of the available space when the sidebar react component does not render. </p>
				<button onClick={this.toggleSidebar.bind(this)}>{buttonText}</button>
			</div>	

			{sidebarActive && <div className="sidebar">
				<h1 className="heading">Upload Images</h1>
				{/* do not delete this uploader component */}
				<Uploader upload={actions.upload} />
				{/* do not delete this uploader component */}

				<h2 className="heading">In Progress</h2>
				<ul>
					{pendingFiles.map(file => {
						const {id, name, progress} = file

						return <li key={id}>
							<label>{name}</label>
							<progress value={progress} max="100">{progress}%</progress>
						</li>
					})}
				</ul>
			</div>
		}

			<div className="main">
				<h2>Completed</h2>
				<ul>
					{completedFiles.map(file => {
						const {id, name, url, error} = file

						return <li key={id}>
							<label>{name}</label>
							{!error && <img src={url} style={{maxWidth: `200px`}} />}
							{!!error && <p className="failure">{error}</p>}
						</li>
					})}
				</ul>
			</div>
		</div>
	}
>>>>>>> cf69934b00423f9faa689fe08ade6ec8660bfe0a
}

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
})

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
			name: PropTypes.string.isRequired,
			progress: PropTypes.number,
			url: PropTypes.string,
			error: PropTypes.string,
		})).isRequired,
		update: statusPropType.isRequired,
		delete: statusPropType.isRequired,
		share: statusPropType.isRequired,
	}).isRequired,
	actions: PropTypes.object.isRequired,
}

export default Uploads
