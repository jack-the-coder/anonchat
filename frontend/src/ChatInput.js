import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, FormField, Button, Box } from 'grommet';

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
        <Box
        tag='form'
        direction='row'
        align='center'
        justify='between'
        pad={{ bottom: 'small' }}
        elevation='none'
        >
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
          <FormField label="Message">
        <TextInput
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        </FormField>
        <Button type="submit" value={'Send'} label="Send"/>
      </form>
      </Box>
    );
  }
}

export default ChatInput;