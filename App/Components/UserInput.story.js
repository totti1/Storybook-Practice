import React from 'react'
import { storiesOf } from '@storybook/react-native'

import UserInput from './UserInput'
import styles from './Styles/UserInputStyle'

storiesOf('UserInput')
  .add('Default', () => (
    <UserInput
        style={styles.input}
        placeholder='first Input'
    />
  ))