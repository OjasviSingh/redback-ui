import HamburgerMenu from './HamburgerMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Components/HamburgerMenu',
    component: HamburgerMenu,
};

export default meta;

export const Default: StoryObj<typeof HamburgerMenu> = {
    args: {},
};
