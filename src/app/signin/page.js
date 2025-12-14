'use client';

import * as React from 'react';
import { useState } from 'react';
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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppleIcon from '@mui/icons-material/Apple';
import axios from '../axios';
import { useRouter } from "next/navigation"

export default function SignInPage() {
    //useState to track inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    // Button is disabled if the email and password is empty
    const isDisabled = !email || !password;
    // await handleSignup()

    const handleSignin = async () => {
        try {
            let payload = {
                email: email,
                password: password
            }
            const response = await axios.post("http://192.168.10.6:8000/login/", payload)
            const token = response.data.token
            localStorage.setItem("token", token)
            router.push("/component")
        } catch (error) {
            alert("error")
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
                    {/* Signin Form */}
                    <Stack
                        spacing={3}
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: 2,
                            maxWidth: 400,
                            margin: '0 auto',
                            p: 5,
                            boxShadow: 3,
                        }}
                    >
                        <Typography variant="h4" sx={{ ml: 40 }}>
                            Sign in
                        </Typography>

                        {/* Social Buttons */}
                        <Button
                            variant="outlined"
                            sx={{ color: 'white', backgroundColor: 'black' }}
                            fullWidth
                            startIcon={<GoogleIcon />}
                        >
                            Open Google
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ color: 'white', backgroundColor: 'black' }}
                            startIcon={<AppleIcon />}
                        >
                            Sign in with Apple
                        </Button>

                        <hr />

                        {/* Email Field */}
                        <Tooltip title="Please fill this field" followCursor>
                            <Box>
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
                                        placeholder="Email or phone"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} // Update state
                                        inputProps={{ 'aria-label': 'email input' }}
                                    />
                                </Paper>
                            </Box>
                        </Tooltip>

                        {/* Password Field */}
                        <Tooltip title="Please fill this field" followCursor>
                            <Box>
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
                                        onChange={(e) => setPassword(e.target.value)} // Update state
                                        inputProps={{ 'aria-label': 'password input' }}
                                    />
                                </Paper>
                            </Box>
                        </Tooltip>

                        {/* Checkbox */}
                        <FormControlLabel
                            control={<Checkbox />}
                            size="small"
                            label="Keep me logged in"
                        />

                        {/* Sign In Button */}
                        <Stack spacing={1} alignItems="center">
                            <Button
                                variant="contained"
                                sx={{ color: 'white', backgroundColor: 'primary' }}
                                fullWidth
                                onClick={handleSignin}
                                disabled={isDisabled} // Disable when fields are empty
                            >
                                {/* <Link
                                    href="/"
                                    sx={{ textDecoration: 'none', color: 'white' }}
                                > */}
                                Sign in
                                {/* </Link> */}
                            </Button>
                        </Stack>
                    </Stack>

                    {/* Footer */}
                    <Typography
                        variant="subtitle1"
                        sx={{ ml: 53, p: 4, fontSize: 'small' }}
                    >
                        New to loggedIn?{' '}
                        <Link href="/signup" sx={{ textDecoration: 'none' }}>
                            Join now
                        </Link>
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
}


