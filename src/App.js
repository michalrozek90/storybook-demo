import Audio from './components/Audio'
import Button from './components/Button'
import Header from './components/Header'

function App() {
	return (
		<div className='App'>
			<Header label='Best soundtracks ever!' subtitle={"Let's crack straight into it!"} />
			<Button label='Sprawdź więcej!' />
			<Audio />
		</div>
	)
}

export default App
