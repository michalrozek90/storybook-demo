import { PropTypes } from 'prop-types'

const Button = ({ label, backgroundColor = 'purple', color = 'gold', size = 'medium', onClick }) => {
	let scale = 1
	if (size === 'small') scale = 0.5
	if (size === 'large') scale = 3.5

	const style = {
		backgroundColor,
		color,
		padding: `${scale * 1}rem ${scale * 2}rem`,
		border: '2px solid orangered',
		borderRadius: '15px',
		cursor: 'pointer',
		fontSize: '1.5rem',
	}
	return (
		<button onClick={onClick} style={style}>
			{label}
		</button>
	)
}

Button.propTypes = {
	label: PropTypes.string,
	backgroundColor: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	onClick: PropTypes.func,
}

export default Button
