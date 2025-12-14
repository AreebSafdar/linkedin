'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Avatar, IconButton, Divider, Stack } from '@mui/material';
import Image from 'next/image';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CloseIcon from '@mui/icons-material/Close';
import NightView from '../img/nightview.jpg';

const jobs = [
  {
    id: 1,
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/12tech.png/1200px-12tech.png',
    title: 'Senior Python Django Developer',
    company: '12 Tech',
    location: 'Pakistan (Remote)',
    promoted: true,
    activelyReviewing: true,
    easyApply: true,
  },
  {
    id: 2,
    companyLogo: 'https://via.placeholder.com/40x40.png?text=SB',
    title: 'Senior Python Full Stack Developer',
    company: 'Staffbee Solutions INC',
    location: 'Pakistan (Remote)',
    salary: '₹540K/yr – ₹900K/yr',
    promoted: false,
    activelyReviewing: false,
  },
  {
    id: 3,
    companyLogo: 'https://via.placeholder.com/40x40.png?text=HB',
    title: 'Python Developer',
    company: 'Highbrow Technology Inc',
    location: 'Pakistan (Remote)',
    promoted: true,
    activelyReviewing: true,
    easyApply: true,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 , ml: 20}}>
      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Item>
            <Box sx={{ position: 'relative' }}>
              <Image src={NightView} alt="NightView" width={400} height={150} />
              <Avatar
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                sx={{
                  width: 80,
                  height: 80,
                  border: '3px solid white',
                  position: 'absolute',
                  top: 100,
                  left: 16,
                }}
              />
            </Box>
            <Box sx={{ mt: 6, textAlign: 'left' }}>
              <Typography variant="h5" color="black">
                Areeb Safdar
              </Typography>
              <Typography variant="body1">
                intern in mui/js/css/react
              </Typography>
              <Typography variant="body2">
                Rahim Yar Khan district
              </Typography>
              <Typography variant="body1" color="black">
                - Cleverstack
              </Typography>
            </Box>
          </Item>

          <Item sx={{ marginTop: 2, textAlign: 'left' }}>
            <Typography>
              <FormatLineSpacingIcon /> Preference
            </Typography>
            <Typography>
              <BookmarkIcon /> My Jobs
            </Typography>
            <Typography>
              <CollectionsBookmarkIcon /> My Career Insight
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography sx={{ color: 'blue', mt: 1 }}>
              <EditCalendarIcon /> Post a free job
            </Typography>
          </Item>
        </Grid>

        {/* Job List */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3, mt: 4, marginTop:'25' }}>
            <Typography variant="h6" gutterBottom>
              Top job picks for you
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Based on your profile, preferences, and activity like applies,
              searches, and saves
            </Typography>

            {jobs.map((job, index) => (
              <React.Fragment key={job.id}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  mb={2}
                >
                  <Box display="flex">
                    <Avatar src={job.companyLogo} sx={{ mr: 2 }} />
                    <Box>
                      <Typography fontWeight="bold" color="primary">
                        {job.title}
                      </Typography>
                      <Typography variant="body2">
                        {job.company} · {job.location}
                      </Typography>
                      {job.salary && (
                        <Typography variant="body2" color="text.secondary">
                          {job.salary}
                        </Typography>
                      )}
                      <Stack direction="row" spacing={1} mt={0.5}>
                        {job.activelyReviewing && (
                          <Typography variant="caption" color="green">
                            ✔ Actively reviewing applicants
                          </Typography>
                        )}
                        {job.promoted && (
                          <Typography variant="caption">Promoted</Typography>
                        )}
                        {job.easyApply && (
                          <Typography variant="caption" color="primary">
                            · Easy Apply
                          </Typography>
                        )}
                      </Stack>
                    </Box>
                  </Box>
                  <IconButton size="small">
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
                {index !== jobs.length - 1 && <Divider />}
              </React.Fragment>
            ))}
            <Box mt={2} textAlign="center">
              <Typography
                variant="body2"
                color="primary"
                sx={{ cursor: 'pointer' }}
              >
                Show all →
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}


// 'use client';

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Typography, Skeleton, Avatar } from '@mui/material';
// import Image from 'next/image';
// import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
// import EditCalendarIcon from '@mui/icons-material/EditCalendar';
// import {
//   IconButton,
//   Divider,
//   Stack,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';


// // import Link from 'next/link';
// import NightView from '../img/nightview.jpg';
// import { StayPrimaryLandscape } from '@mui/icons-material';
// // import Post from '../img/post.jpg';
// // import ShoeImage from '../img/shoes.png';
// const jobs = [
//   {
//     id: 1,
//     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/12tech.png/1200px-12tech.png',
//     title: 'Senior Python Django Developer',
//     company: '12 Tech',
//     location: 'Pakistan (Remote)',
//     promoted: true,
//     activelyReviewing: true,
//     easyApply: true,
//   },
//   {
//     id: 2,
//     companyLogo: 'https://via.placeholder.com/40x40.png?text=SB',
//     title: 'Senior Python Full Stack Developer',
//     company: 'Staffbee Solutions INC',
//     location: 'Pakistan (Remote)',
//     salary: '₹540K/yr – ₹900K/yr',
//     promoted: false,
//     activelyReviewing: false,
//   },
//   {
//     id: 3,
//     companyLogo: 'https://via.placeholder.com/40x40.png?text=HB',
//     title: 'Python Developer',
//     company: 'Highbrow Technology Inc',
//     location: 'Pakistan (Remote)',
//     promoted: true,
//     activelyReviewing: true,
//     easyApply: true,
//   },
// ];


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

// export default function FullWidthGrid() {
//   return (
//     <Box sx={{ flexGrow: 1, marginTop: 10 }}>
//       <Grid container spacing={2}>
//         <Grid size={{ xs: 6, md: 4 }}>
//           <Item>
//             <Box sx={{ display: 'flex', alignItems: 'center', }}>
//               <Box sx={{ margin: 1 }}>
//                 <Image src={NightView} alt='NightView' width={400} height={150} />
//                 <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
//               </Box>
//             </Box>

//             <Box sx={{ width: '100%' }}>
//               <Typography variant='h5' sx={{ mr: 35 ,color: 'black'}}>Areeb safdar</Typography>
//               <Typography variant='body1' sx={{ mr: 30 }}>intern in mui/js/css/react</Typography>
//               <Typography variant='body2' sx={{ mr: 30 }}>Rahim yar khan districtt</Typography>
//               <Typography variant='body1' sx={{ mr: 35, color: 'black' }}>-Cleverstack</Typography>
//             </Box>
//           </Item>
//           <Item sx={{ marginTop: 2}}>
//             <Box sx={{ flexGrow: 1, color:'black'}}>
//             <Typography sx={{ mr: 34 }}><FormatLineSpacingIcon/>Prefrence</Typography>
//                           <br/>
//             <Typography sx={{ mr: 36 }}><BookmarkIcon/>My Jobs</Typography>
//                           <br/>
//             <Typography sx={{ mr: 30 }}><CollectionsBookmarkIcon/>My carer insight</Typography>
//             <hr/>
//            <Typography sx={{mr: 30,color:'blue',marginTop:2}}><EditCalendarIcon/>Post for free job</Typography> 
//             </Box>
//           </Item>
//         </Grid>

//         {/* Next Page */}

//         <Grid size={{ xs: 7, md: 4 }}>
//           <Paper elevation={3} sx={{ p: 3, mt: 4, maxWidth: 1000, mx: 'auto' }}>
//             <Typography variant="h6" gutterBottom>
//               Top job picks for you
//             </Typography>
//             <Typography variant="body2" color="text.secondary" mb={2}>
//               Based on your profile, preferences, and activity like applies, searches, and saves
//             </Typography>

//             {jobs.map((job, index) => (
//               <React.Fragment key={job.id}>
//                 <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
//                   <Box display="flex">
//                     <Avatar src={job.companyLogo} sx={{ mr: 2 }} />
//                     <Box>
//                       <Typography fontWeight="bold" color="primary">
//                         {job.title}
//                       </Typography>
//                       <Typography variant="body2">{job.company} · {job.location}</Typography>
//                       {job.salary && (
//                         <Typography variant="body2" color="text.secondary">
//                           {job.salary}
//                         </Typography>
//                       )}
//                       <Stack direction="row" spacing={1} mt={0.5}>
//                         {job.activelyReviewing && (
//                           <Typography variant="caption" color="green">
//                             ✔ Actively reviewing applicants
//                           </Typography>
//                         )}
//                         {job.promoted && (
//                           <Typography variant="caption">Promoted</Typography>
//                         )}
//                         {job.easyApply && (
//                           <Typography variant="caption" color="primary">
//                             · Easy Apply
//                           </Typography>
//                         )}
//                       </Stack>
//                     </Box>
//                   </Box>
//                   <IconButton size="small">
//                     <CloseIcon fontSize="small" />
//                   </IconButton>
//                 </Box>
//                 {index !== jobs.length - 1 && <Divider />}
//               </React.Fragment>
//             ))}

//             <Box mt={2} textAlign="center">
//               <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
//                 Show all →
//               </Typography>
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }












// 'use client';

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Typography, Avatar, IconButton, Divider, Stack } from '@mui/material';
// import Image from 'next/image';
// import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
// import EditCalendarIcon from '@mui/icons-material/EditCalendar';
// import CloseIcon from '@mui/icons-material/Close';
// import NightView from '../img/nightview.jpg';

// const people = [
//   {
//     name: "Ayesha Parveen",
//     subtitle: "The Islamia University of ...",
//     image: "/images/user1.jpg"
//   },
//   {
//     name: "AQSA ASIM",
//     subtitle: "Muhammad is a mutual ...",
//     image: "/images/avatar-a.png",
//     isAvatar: true
//   },
//   {
//     name: "Ch Abdullah",
//     subtitle: "Student at The Islamia University...",
//     image: "/images/user2.jpg"
//   },
//   {
//     name: "Jam N. Yaseen",
//     subtitle: "BS Physics Student | Web Developer...",
//     image: "/images/user3.jpg"
//   },
//   {
//     name: "Rashid Khan",
//     subtitle: "Student at The Islamia University...",
//     image: "/images/user4.jpg"
//   },
//   {
//     name: "Abdul Sami Khan",
//     subtitle: "Recent Information Technology ...",
//     image: "/images/user5.jpg"
//   },
//   {
//     name: "Okasha Shehbaz Mueed",
//     subtitle: "Cyber Security Student | LCO...",
//     image: "/images/user6.jpg"
//   },
//   {
//     name: "Hafiz Muhammad",
//     subtitle: "Student at The Islamia University...",
//     image: "/images/user7.jpg"
//   }
// ];


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

// export default function FullWidthGrid() {
//   return (
//     <Box sx={{ flexGrow: 1, marginTop: 10 , ml: 20}}>
//       <Grid container spacing={2}>
//         {/* Sidebar */}
//         <Grid item xs={12} md={4}>
//           <Item>
//             <Box sx={{ position: 'relative' }}>
//               <Image src={NightView} alt="NightView" width={400} height={150} />
//               <Avatar
//                 src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
//                 sx={{
//                   width: 80,
//                   height: 80,
//                   border: '3px solid white',
//                   position: 'absolute',
//                   top: 100,
//                   left: 16,
//                 }}
//               />
//             </Box>
//             <Box sx={{ mt: 6, textAlign: 'left' }}>
//               <Typography variant="h5" color="black">
//                 Areeb Safdar
//               </Typography>
//               <Typography variant="body1">
//                 intern in mui/js/css/react
//               </Typography>
//               <Typography variant="body2">
//                 Rahim Yar Khan district
//               </Typography>
//               <Typography variant="body1" color="black">
//                 - Cleverstack
//               </Typography>
//             </Box>
//           </Item>

//           <Item sx={{ marginTop: 2, textAlign: 'left' }}>
//             <Typography>
//               <FormatLineSpacingIcon /> Preference
//             </Typography>
//             <Typography>
//               <BookmarkIcon /> My Jobs
//             </Typography>
//             <Typography>
//               <CollectionsBookmarkIcon /> My Career Insight
//             </Typography>
//             <Divider sx={{ my: 1 }} />
//             <Typography sx={{ color: 'blue', mt: 1 }}>
//               <EditCalendarIcon /> Post a free job
//             </Typography>
//           </Item>
//         </Grid>
//         </Grid>

//         {/* Job List */}
//         <Grid item xs={12} md={8}>
//           <Paper elevation={3} sx={{ p: 3, mt: 4, marginTop:'25' }}>
//             <Typography variant="h6" gutterBottom>
//               Top job picks for you
//             </Typography>
//             <Typography variant="body2" color="text.secondary" mb={2}>
//               Based on your profile, preferences, and activity like applies,
//               searches, and saves
//             </Typography>
//                  </Paper>
//                 </Grid> 
//                                  </Box> 
//                 );
// }


