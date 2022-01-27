import Soundtrack from '../components/Soundtrack'
import BetterCallSaul from '../soundtracks/Better Call Saul.mp3'
import BreakingBad from '../soundtracks/Breaking Bad.mp3'
import PeakyBlinders from '../soundtracks/Peaky Blinders.mp3'
import SonsOfAnarchy from '../soundtracks/Sons of Anarchy.mp3'

export default {
	title: 'Soundtrack',
	component: Soundtrack,
}

const Template = args => <Soundtrack {...args} />

export const FirstSoundtrack = Template.bind({})
FirstSoundtrack.args = {
	title: 'Better Call Saul',
	track: BetterCallSaul,
}

export const SecondSoundtrack = Template.bind({})
SecondSoundtrack.args = {
	title: 'Breaking Bad',
	track: BreakingBad,
}

export const ThirdSoundtrack = Template.bind({})
ThirdSoundtrack.args = {
	title: 'Peaky Blinders',
	track: PeakyBlinders,
}

export const FourthSoundtrack = Template.bind({})
FourthSoundtrack.args = {
	title: 'Sons of Anarchy',
	track: SonsOfAnarchy,
}
