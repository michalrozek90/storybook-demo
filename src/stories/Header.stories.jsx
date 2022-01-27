import Header from '../components/Header'

export default {
	title: 'Header',
	component: Header,
}

const Template = args => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
	backgroundColor: 'black',
	color: 'white',
	label: 'Best soundtracks ever!',
}

export const Secondary = Template.bind({})
Secondary.args = {
	backgroundColor: 'white',
	color: 'black',
	label: 'Best soundtracks ever!',
}

export const Narrow = Template.bind({})
Narrow.args = {
	width: '30vw',
	label: 'Best soundtracks ever!',
}

export const Normal = Template.bind({})
Normal.args = {
	width: '50vw',
	label: 'Best soundtracks ever!',
}

export const Wide = Template.bind({})
Wide.args = {
	width: '100vw',
	label: 'Best soundtracks ever!',
}
