import React, { useState } from 'react';
import {
  Container, CssBaseline, TextField, Button, Avatar, Grid,
} from '@material-ui/core';
// import PropTypes from 'prop-types';
import cookie from 'react-cookies';
import { useStyle } from './style';
// import config from "../../../config";
// import { serviceRequest } from '../../../services/serviceRequest';
// import { ErrorMessage } from '../../ErrorMessage';

// const path = "/api/v1/";
// const domain = config.apiDomain;
// const preparePayload = (method, data) => {
//   const token = cookie.load('jwtToken');
//   const requestHeaders = { Authorization: token };
//   const url = `https://${domain}${path}`;

//   return {
//     method,
//     url,
//     data,
//     headers: requestHeaders,
//   };
// };

export const ReplyForm = () => {
  const classes = useStyle();

  const [content, setContent] = useState('');
  const [replyForm, setReplyForm] = useState(false);
  //   const { commentID } = props;

  const avatarURL = 'http://api.adorable.io/avatar/50/';

  //   const [isError, setIsError] = useState(false);
  //   const [errorMsg, setErrorMsg] = useState('');
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const openReplyForm = () => {
    setReplyForm(true);
  };
  const closeReplyForm = () => {
    setReplyForm(false);
    setContent('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const data = { commentID, content };
    //   const payload = preparePayload('post', data);
    //   const response = await serviceRequest(payload);
    //   if (response.status && response.status === 'success') {
    //     setContent('');
    //     window.location.reload();
    //   } else if (response.status && response.status === 'error') {
    //     setIsError(true);
    //     setErrorMsg(response.message);
    //   } else {
    //     throw new Error('Internal Service Error');
    //   }
    // } catch (error) {
    //   setErrorMsg('Internal Service Error');
    //   setIsError(true);
    // }
  };

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      {/* {isError && <ErrorMessage message={errorMsg} styles={{ color: "red" }} />} */}
      <Button
        type="submit"
        className={classes.replyButton}
        onClick={openReplyForm}
      >
        REPLY
      </Button>
      {replyForm && (
        <form onSubmit={handleSubmit}>
          <Grid container wrap="nowrap" className={classes.grid}>
            <Grid item>
              <Avatar
                component="span"
                alt="profile picture"
                className={classes.avatar}
                src={avatarURL + cookie.load('username')}
              />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                type="text"
                multiline
                autoComplete="on"
                component="span"
                className={classes.input}
            //   variant="outlined"
                value={content}
                onChange={handleChange}
              />
              <Button
                disabled={!content.trim()}
                variant="contained"
                type="submit"
                color="primary"
                className={classes.button}
              >
                REPLY
              </Button>
              <Button
                type="submit"
                color="primary"
                className={classes.button}
                onClick={closeReplyForm}
              >
                CANCEL
              </Button>

            </Grid>
          </Grid>

        </form>
      )}
    </Container>
  );
};

// ReplyForm.propTypes = {
//   commentID: PropTypes.number.isRequired,
// };
