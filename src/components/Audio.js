import Soundtrack from './Soundtrack'
import ListofSongs from '../constants/ListOfSongs'

const Audio = () => {
	return ListofSongs.map(song => {
		const { id, track, title } = song
		return (
			<div id={id}>
				<Soundtrack track={track} title={title} />
			</div>
		)
	})
}

export default Audio
