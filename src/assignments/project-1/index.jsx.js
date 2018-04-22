import React from 'react'
import PropTypes from 'prop-types'
import Carousel from './carousel.jsx'
import Uploader from '../../ui/components/uploader.jsx'
<<<<<<< HEAD
import Button from './button.jsx'
import ProgressBar from './progressbar.jsx'
import Gallery from './gallery.jsx'

=======
import completedFilesList from './CompletedFilesList.jsx'
import CompletedFilesList from './CompletedFilesList.jsx'
import List from './List.jsx'
import PendingFilesList from './PendingFilesList.jsx'
import ImageItem from './ImageItem.jsx';
>>>>>>> 21609ac18b8ef6e0aac5820abbad87613d58454f

class Uploads extends React.Component {
	state = {
		activeImage: 0,
		uploaderActive: false,
	}

<<<<<<< HEAD

	return (
		<div className="container">

			<header role="banner">
				<Carousel />
			</header>

	      	<section className="uploader-component">
		      	<p className="content">Use the following image uploader to create a gallery. You can also follow along online for latest travel stories.</p>
			    <form action="#">
			           	<label tabIndex="0" htmlFor="uploader" className="uploader">
			            	Upload
			            <Uploader upload={actions.upload}/>
			        </label>
			    </form>

				<Button cssclass="button" content="Follow" openThisSite="window.open('http://google.com','_blank')" />

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
	toggleSidebar() {
		this.setState( {uploaderActive: !this.state.uploaderActive} )
		//console.log(this.uploaderActive)
	}

	render() {
		const {uploads, actions} = this.props
		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = uploads.files.filter(({progress}) => !progress)
		const buttonText = this.state.uploaderActive ? 'Toggle Navigation Off' : 	'Toggle Navigation On';
		const {activeImage, uploaderActive} = this.state
		
		return (
			<div className="gridContainer">
				<header className="mainHeader grid" role="banner">
					<h1>Main Header</h1>
				</header>
				<nav className="mainNavigation" role="navigation">
					Navigation Here
				</nav>
				<main className="mainContent" role="main">
					Big Image {activeImage}
					{uploads.files[activeImage] &&
						<img className="photograph" src={uploads.files[activeImage].url} />
					}
				</main>
				<aside className="foobar">
					{ !uploaderActive && 
						<button className="nav-button" onClick={this.toggleSidebar.bind(this)}><img src="./if_plus_1282963.png"/></button>
					}
					{ !!uploaderActive && 
						<div className="uploader">
							<h2>Upload Image</h2>
							<Uploader upload={actions.upload} />
							<PendingFilesList title='In Progress' pendingFiles={pendingFiles} />
							<button className="nav-button" onClick={this.toggleSidebar.bind(this)}>Close</button>
						</div>
					}
				</aside>
				<aside className="sidebar" role="complementary">
					<List>
					{completedFiles.map((file, index) =>
						<ImageItem
						   id
						   file={file}
						   title="FooBar"
						   onClick = {() => this.setState({activeImage: index})}
						/>
					)}
					</List>
				</aside>
				<footer className="mainFooter" role="contentinfo">
					Footer Content
				</footer>
	        </div>
		)
	}
>>>>>>> 21609ac18b8ef6e0aac5820abbad87613d58454f
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
