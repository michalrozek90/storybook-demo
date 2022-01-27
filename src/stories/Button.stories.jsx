import Button from '../components/Button'

export default {
	title: 'Button',
	component: Button,
	argTypes: { handleClick: { action: console.log('Button clicked!') } },
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	backgroundColor: 'purple',
	color: 'gold',
	label: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
	backgroundColor: 'gold',
	color: 'purple',
	label: 'Secondary Button',
}

export const Small = Template.bind({})
Small.args = {
	size: 'small',
	label: 'Small Button',
}

export const Medium = Template.bind({})
Medium.args = {
	size: 'medium',
	label: 'Medium Button',
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
	label: 'Large Button',
}
