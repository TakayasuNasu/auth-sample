import React from 'react'
import { Story, Meta } from '@storybook/react'
import AppButton, { ComponentProps } from './AppButton'

export default {
  title: 'Organisms/AppButton',
  component: AppButton,
} as Meta

const Template: Story<ComponentProps> = (args) => <AppButton {...args} />

export const Button = Template.bind({})
Button.args = { title: 'this is button.' }
