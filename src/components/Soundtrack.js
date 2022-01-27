import { PropTypes } from 'prop-types'

const Soundtrack = ({ track, title }) => {
	return (
		<div>
			<figcaption>Listen to the {title} theme</figcaption>
			<div>
				<audio controls src={track}>
					Your browser does not support the
					<code>audio</code> element.
				</audio>
			</div>
		</div>
	)
}

Audio.propTypes = {
	title: PropTypes.string,
	track: PropTypes.string,
}

export default Soundtrack
