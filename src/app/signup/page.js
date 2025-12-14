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



// 'use client';

// import * as React from 'react';
// import { useState } from 'react';
// import {
//   Button,
//   AppBar,
//   Box,
//   InputBase,
//   Toolbar,
//   IconButton,
//   Stack,
//   Typography,
//   Paper,
//   FormControlLabel,
//   Checkbox,
//   Link,
// } from '@mui/material';
// import Tooltip from '@mui/material/Tooltip';
// import GoogleIcon from '@mui/icons-material/Google';
// import MicrosoftIcon from '@mui/icons-material/Microsoft';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { setConstantValue } from 'typescript';

// const primary = {
//   main: '#f9fbe7',
//   light: '#42a5f5',
//   dark: '#1565c0',
//   contrastText: '#fff',
// };

// export default function SignInPage() {
//   const[click, clicked] = useState(0)
//   const[value, setvalue] =useState("")
//     const[val, setval] =useState("")
//   return(
//     <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', p: 4 }}>
//       {/* Header */}
//       <Stack spacing={2} sx={{ p: 2, borderRadius: 2, mb: 4 }}>
//         <Stack direction="row" alignItems="center">
//           <IconButton
//             href="/"
//             target="_blank"
//             rel="noopener noreferrer"
//             color="primary"
//             sx={{ mr: 1 }}
//           >
//             <Typography variant="h5"  >
//               Linked
//             </Typography>
//             <LinkedInIcon />
//           </IconButton>
//         </Stack>
//         <Stack >
//           <Typography variant="h5" sx={{ ml: 40 }}>
//             Make the most of your professional life
//           </Typography>
//         </Stack>
//       </Stack>

//       {/* Sign-In Form */}
//       <Stack
//         spacing={3}
//         sx={{
//           backgroundColor: 'white',
//           borderRadius: 2,
//           maxWidth: 300,
//           margin: '0 auto',
//           p: 4,
//           boxShadow: 3,
//         }}
//       >  
//         {/* Email Field */}
//         <Tooltip title="Please fill this field" followCursor>
//           <Box>
//             <Typography>Email</Typography>
//             <Paper
//               component="form"
//               sx={{
//                 p: '3px 4px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 width: '100%',
//               }}
//             >
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 value={value}
//                 placeholder="Enter your email"
//                 onChange={e => setvalue(e.target.value)}
//                 inputProps={{ 'aria-label': 'email input' }}
//               />
//             </Paper>
//           </Box>
//         </Tooltip>

//         {/* Password Field */}
//         <Tooltip title="Please fill this field" followCursor>
//           <Box>
//             <Typography>Password</Typography>
//             <Paper
//               component="form"
//               sx={{
//                 p: '3px 4px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 width: '100%',
//               }}
//             >
               
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Enter your password"
//                 type="password"
//                  value={val}
//                 onChange={e => setval(e.target.val)}
//                 inputProps={{ 'aria-label': 'password input' }}
//               />
//             </Paper>
//           </Box>
//         </Tooltip>
//         {/* Checkbox */}
//         <FormControlLabel
//           control={<Checkbox />}
//           label="Agree to terms"/>

//         {/* Agree Button */}
//         <Stack spacing={1} alignItems="center">
//           <Typography variant="body2" color="gray">
//             By clicking Agree & Join or Continue
//           </Typography>
//           <Button variant="contained" fullWidth onClick={()=>alert('Agree & join')}>
//            Agree & Join
//           </Button>
//         </Stack>
//         <hr />
//         <Button variant="outlined" fullWidth startIcon={<GoogleIcon />} >
//           Using google
//         </Button>
//         <Button variant="outlined" fullWidth startIcon={< MicrosoftIcon />} >
//           Using microsoft
//         </Button>
//         <Typography sx={{}}> Already on linked In?<Link href="/signin" sx={{ textDecoration: 'none', color: 'purple' }}> Sign In!!</Link></Typography>
//       </Stack>
//       <Typography variant='subtitle1' sx={{ ml: 43, p: 4, fontSize: 'small' }}>
//         Looking to create a page looking for a business?{' '}
//         <Link href="#" sx={{ textDecoration: 'none' }}>Get help</Link>
//       </Typography>    </Box>
//   );
// }


// /*'use client';

// import * as React from 'react';
// import Button from '@mui/material/Button';

// import { AppBar, Box, InputBase, Toolbar, IconButton, Stack, Typography, Paper, FormControlLabel, Checkbox } from '@mui/material';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';


// const primary = {
//   main: '#f9fbe7',
//   light: '#42a5f5',
//   dark: '#1565c0',
//   contrastText: '#fff',
// };

// export default function LinkedInButton() {
//   return (
//     <div>
//     <Stack spacing={2} sx={{ backgroundColor: 'yellow', p: 2 }}>
      
//       {/* Header with LinkedIn Icon 
//       <Stack direction="row" alignItems="center">
//         <IconButton
//           href="/"
//           target="_blank"
//           rel="noopener noreferrer"
//           color="primary"
//           sx={{ mr: 1 }}
//         >
//           <Typography variant="h6" sx={{ mr: 1 }}>
//             Linked
//           </Typography>
//           <LinkedInIcon />
//         </IconButton>
//       </Stack>
//       {/* Main Title 
//       <Typography variant="h5" ml={4} >
//         Make the most of your professional life
//       </Typography>
// </Stack>





    
// <div >

//       {/* Email Field 
//      <Box sx={{ ml: 2 }}>
//         <Typography>Email</Typography>
//         <Paper
//           component="form"
//           sx={{
//             p: '3px 4px',
//             display: 'flex',
//             alignItems: 'center',
//             width: 300,
//           }}
//         >
//           <InputBase
//             sx={{ ml: 1, flex: 1 }}
//             placeholder="Enter your email"
//             inputProps={{ 'aria-label': 'email input' }}
//           />
//         </Paper>
//       </Box>

//       {/* Password Field 
//       <Box sx={{ ml: 2 }}>
//         <Typography>Password</Typography>
//         <Paper
//           component="form"
//           sx={{
//             p: '3px 4px',
//             display: 'flex',
//             alignItems: 'center',
//             width: 300,
//           }}
//         >
//           <InputBase
//             sx={{ ml: 1, flex: 1 }}
//             placeholder="Enter your password"
//             type="password"
//             inputProps={{ 'aria-label': 'password input' }}
//           />
//            </Paper>
//         </Box>
       

//       {/* Checkbox 
//       <Box sx={{ ml: 200 }}>
//         <FormControlLabel
//           required
//           control={<Checkbox />}
//           label="Agree to terms"
//         />
//       </Box>
//       <Stack>
//                 <Typography variant='body1' color='gray'>
//                    By clicking Agree & Join or continue 
//                 </Typography>
//                 <Button 
//                  component="label"
//   role={undefined}
//   variant="contained"
//   width='20'
//   tabIndex={-1} 
//   >Agree & Join
//   </Button>
//             </Stack>
//             </div>
//     </div>
//   );
// }*/
