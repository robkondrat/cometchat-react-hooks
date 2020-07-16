import React, {useState} from 'react';
import {NotificationManager} from 'react-notifications';
import {CometChat} from '@cometchat-pro/chat';
import config from '../config';

const Login = props => {
  const [uidValue, setUidValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitting(true);
    CometChat.login(uidValue, config.apiKey).then(
      User => {
        NotificationManager.success('You are now logged in', 'Login Success');
        console.log('Login Successful:', {User});
        props.setUser(User);
      },
      error => {
        NotificationManager.error('Please try again', 'Login Failed');
        console.log('Login failed with exception:', {error});
        setIsSubmitting(false);
      }
    );
  };

  return (
    ### Login to Awesome chat

    <input
      type='text'
      name='username'
      className='form-control'
      placeholder='Your Username'
      value={uidValue}
      onChange={event => setUidValue(event.target.value)}
    />
    <input
      type='submit'
      className='btn btn-primary btn-block'
      value={`${isSubmitting ? 'Loading...' : 'Login'}`}
      disabled={isSubmitting}
    />
  );
};

export default App;