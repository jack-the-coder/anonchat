import React from 'react';
import { Text } from 'grommet';

export default ({ name, message }) =>
  <Text>
    <strong>{name}</strong>: {message}
  </Text>