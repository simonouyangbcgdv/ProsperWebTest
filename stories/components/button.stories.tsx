import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import Button from '../../src/components/button';

export default {
  component: Button,
  title: 'Components/Button',
};

export const primaryBlue = () => <Button label={text('Label', 'My Button')} onClick={action('clicked')} />;
