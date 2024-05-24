import React, { useState } from 'react';
import { loginUser } from '../firebase';
import { Button, TextField, Typography, Container, Paper, Box, Snackbar, Alert, Avatar } from '@mui/material';
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((user) => {
        setSuccess('Login success!');
        navigate('/user');
      })
      .catch((errorMessage) => {
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    // Add your Google login implementation here
  };

  const handleFacebookLogin = () => {
    // Add your Facebook login implementation here
  };

  const handleMicrosoftLogin = () => {
    // Add your Microsoft login implementation here
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Title title="EVCFLO" subTitle="Login" />
        <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
              Forgot Password?
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
              Do not have account? SignUp?
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              or login with
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button
                onClick={handleGoogleLogin}
                variant="outlined"
                startIcon={<Avatar src="https://www.google.com/favicon.ico" />}
                sx={{ mr: 2 }}
              >
                Google
              </Button>
              <Button
                onClick={handleFacebookLogin}
                variant="outlined"
                startIcon={<Avatar src="https://www.facebook.com/favicon.ico" />}
              >
                Facebook
              </Button>
              <Button
                onClick={handleMicrosoftLogin}
                variant="outlined"
                startIcon={<Avatar src="https://login.microsoftonline.com/favicon.ico" />}
                sx={{ ml: 2 }}
              >
                Microsoft
              </Button>
            </Box>
          </form>
          <Box position="absolute" top="100%" mt={2} width="100%">
            {error && (
              <Snackbar
                open={Boolean(error)}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <Alert severity="error" sx={{ marginTop: '50px' }}>
                  {error}
                </Alert>
              </Snackbar>
            )}
            {success && (
              <Snackbar
                open={Boolean(success)}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <Alert severity="success" sx={{ marginTop: '50px' }}>
                  {success}
                </Alert>
              </Snackbar>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;