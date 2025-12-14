'use client';

import React, { useState } from 'react';
import {
  Button,
  Box,
  InputBase,
  Stack,
  Typography,
  Paper,
  FormControlLabel,
  Checkbox,
  Link,
  Tooltip,
  IconButton
} from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import axios from 'axios'

export default function SignInPage() {
  const [step, setStep] = useState(1); // ← Missing in your code
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = async () => {
    if (step === 1 && email) {
      setStep(2);
    } else if (step === 2 && password) {
      setStep(3);
    } else if (step === 3) {
      await handleSignup()
    }
  };

  const handleSignup = async () => {
    try {
      let payload = {
        email: email,
        password: password,
        first_name: "User",
        last_name: "Last Name"
      }
      const response = await axios.post("http://192.168.10.6:8000//register/", payload)
      const token = response.data.token
      localStorage.setItem("token", token)
      // TODO: navigate to home page
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', p: 4 }}>
      {/* Header */}
      <Stack spacing={2} sx={{ p: 2, borderRadius: 2, mb: 4 }}>
        <Stack direction="row" alignItems="center">
          <IconButton
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{ mr: 1 }}
          >
            <Typography variant="h5">Linked</Typography>
            <LinkedInIcon />
          </IconButton>
        </Stack>
        <Stack>
          <Typography variant="h5" sx={{ ml: 40 }}>
            Make the most of your professional life
          </Typography>
        </Stack>
      </Stack>

      {/* Sign-In Form */}
      <Stack
        spacing={3}
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          maxWidth: 300,
          margin: '0 auto',
          p: 4,
          boxShadow: 3,
        }}
      >
        {/* Email Field */}
        {step === 1 && (
          <Tooltip title="Please fill this field" followCursor>
            <Box>
              <Typography>Email</Typography>
              <Paper
                sx={{
                  p: '3px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </Paper>
            </Box>
          </Tooltip>
        )}

        {/* Password Field */}
        {step === 2 && (
          <Tooltip title="Please fill this field" followCursor>
            <Box>
              <Typography>Password</Typography>
              <Paper
                sx={{
                  p: '3px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // ← FIXED: was `e.target.val`
                />
              </Paper>
            </Box>
          </Tooltip>
        )}

        {/* Checkbox */}
        {step === 3 && (
          <FormControlLabel control={<Checkbox />} label="Agree to terms" />
        )}

        {/* Agree / Next Button */}
        <Stack spacing={1} alignItems="center">
          <Typography variant="body2" color="gray">
            By clicking Agree & Join or Continue
          </Typography>
          <Button variant="contained" fullWidth onClick={handleNext}>
            {step < 3 ? 'Continue' : 'Agree & Join'}
          </Button>
        </Stack>

        <hr />
        <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>
          Using Google
        </Button>
        <Button variant="outlined" fullWidth startIcon={<MicrosoftIcon />}>
          Using Microsoft
        </Button>
        <Typography>
          Already on LinkedIn?{' '}
          <Link href="/signin" sx={{ textDecoration: 'none', color: 'purple' }}>
            Sign In!!
          </Link>
        </Typography>
      </Stack>

      <Typography variant="subtitle1" sx={{ ml: 43, p: 4, fontSize: 'small' }}>
        Looking to create a page looking for a business?{' '}
        <Link href="#" sx={{ textDecoration: 'none' }}>
          Get help
        </Link>
      </Typography>
    </Box>
  );
}



