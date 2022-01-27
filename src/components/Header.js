import { PropTypes } from 'prop-types'

const Header = ({
	label,
	subtitle,
	backgroundColor = 'black',
	color = 'white',
	border = '2px solid orangered',
	width = '50vw',
}) => {
	const style = {
		width,
		border,
		backgroundColor,
		color,
		padding: '1rem 3rem',
	}
	return (
		<div style={style}>
			<h1>{label}</h1>
			<h3>{subtitle}</h3>
		</div>
	)
}

Header.propTypes = {
	label: PropTypes.string,
	subtitle: PropTypes.string,
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	border: PropTypes.string,
	width: PropTypes.string,
}

export default Header
