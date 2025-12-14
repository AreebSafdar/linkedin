import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}

// 'use client';


// import * as React from 'react';

// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { styled } from '@mui/material/styles';
// import ShareIcon from '@mui/icons-material/Share';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import {
//     Paper, Grid, Avatar, IconButton, Typography, CardContent, CardHeader,
//     Box, InputBase,
// } from '@mui/material';
// import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
// import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
// import NewspaperIcon from '@mui/icons-material/Newspaper';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Image from 'next/image';
// import Link from 'next/link';
// import NightView from '../img/nightview.jpg';
// import Post from '../img/post.jpg';
// import ShoeImage from '../img/shoes.png';

// import { red } from '@mui/material/colors';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import AddchartIcon from '@mui/icons-material/Addchart';
// import axios from 'axios';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: (theme.vars ?? theme).palette.text.secondary,
//     ...(theme.palette.mode === 'dark' && {
//         backgroundColor: '#1A2027',
//     }),
// }));

// export default function BasicGrid() {
//     const [posts, setPosts] = React.useState([])

//     const getPosts = async () => {
//         try {
//             const token = localStorage.getItem("token")
//             const response = await axios.get("http://192.168.10.6:8000/post/list", { headers: { Authorization: `Token ${token}` } })
//             setPosts(response.data)
//         } catch (error) {

//         }
//     }

//     React.useEffect(() => {
//         getPosts()
//     }, [])

//     // 
//     const createPost = async () => {
//     try {
//         const token = localStorage.getItem("token");
//         const response = await axios.post(
//             "http://192.168.10.6:8000/post/create",
//             { title: "My new post", content: "Hello world!" }, // sample body
//             { headers: { Authorization: `Token ${token}` } }
//         );
//         console.log("Post created:", response.data);
//     } catch (error) {
//         console.error("Error creating post:", error);
//     }
// };

//     return (
//         <Box sx={{ flexGrow: 1, marginTop: 10 }}>
//             <Grid container spacing={3} sx={{ marginTop: 5 }}>
//                 {/*Left Column */}
//                 <Grid size={4}>
//                     <Item>
//                         <CardHeader
//                             avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
//                             action={<IconButton><MoreVertIcon /></IconButton>}
//                             title="Shrimp and Chorizo Paella"
//                             subheader="September 14, 2016"
//                         />
//                         <CardContent>
//                             <Image src={NightView} alt='NightView' width={300} height={150} />
//                             <Typography variant="body2" color="text.secondary">
//                             </Typography>
//                         </CardContent>
//                         <IconButton><FavoriteIcon /></IconButton>
//                         <IconButton><ShareIcon /></IconButton>
//                         <CardContent>
//                             <Typography>Method:</Typography>
//                             <Typography>Heat 1/2 cup of broth...</Typography>
//                         </CardContent>
//                     </Item>
//                     <hr />
//                     <Paper component="form" sx={{ p: '6px 6px', display: 'flex', alignItems: 'center', width: 355, borderRadius: 5 }}>

//                         <Typography color='black'>
//                             Profile viewers
//                             <Typography sx={{ color: 'gray' }}>
//                                 Profile Analyist
//                             </Typography>
//                         </Typography>
//                         <AddchartIcon sx={{ marginRight: '20', color: 'orange' }} />
//                         <Typography sx={{ marginLeft: '20', color: 'blue' }}>

//                             29
//                         </Typography>

//                     </Paper>
//                     <br />
//                     <Paper sx={{ color: 'black', marginTop: '30' }}>
//                         <Typography variant='h6'>
//                             This is my first web page
//                         </Typography>
//                         <Typography variant='body1'>
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et velit amet temporibus aspernatur
//                             modi magnam, eius delectus. Repellat perferendis consectetur amet voluptates delectus, earum quibusdam?
//                         </Typography>
//                     </Paper>
//                 </Grid>
//                 {/*Center Column */}
//                 <Grid size={4}>
//                     <Item>
//                         <Paper component="form" sx={{ p: '3px 4px', display: 'flex', alignItems: 'center', width: 435, borderRadius: 5 }}>
//                             <AccountCircleIcon color="info" />
//                             <SearchIcon />
//                             <InputBase placeholder="Start a post" sx={{ ml: 1, flex: 1 }} />

//                         </Paper>
//                         <Box sx={{ display: 'flex', gap: 9, mt: 2, mr: 2 }}>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                                 <SmartDisplayIcon color="success" />
//                                 <Link href="/">Video</Link>
//                             </Box>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                                 <PhotoSizeSelectActualIcon color="primary" />
//                                 <Link href="/">Photos</Link>
//                             </Box>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                                 <NewspaperIcon color="warning" />
//                                 <Link href="/">Write Article</Link>
//                             </Box>
//                         </Box>
//                     </Item>
//                     <Button variant='contained' sx={{width:448 , backgroundColor:'text.secondary'}} onClick={createPost}>Click me</Button>

//                     <hr />
//                     <Paper component="form" sx={{ p: '6px 6px', display: 'flex', alignItems: 'center', width: 425, borderRadius: 5 }}>
//                         <Typography variant="body2" color="text.secondary">
//                             <Typography>
//                                 <CardHeader
//                                     avatar={<Avatar sx={{ bgcolor: 'black', width: 25, height: 25 }}>R</Avatar>}
//                                     title="Rubie" />
//                             </Typography>
//                             <hr />
//                             <Typography>
//                                 <CardHeader
//                                     avatar={<Avatar sx={{ bgcolor: 'purple', size: 'medium', marginTop: '3' }}>A</Avatar>}
//                                     action={<IconButton><MoreVertIcon /></IconButton>}
//                                     title="Shrimp and Chorizo Paella"
//                                     subheader="September 14, 2016"
//                                 />
//                                 <Image src={Post} alt='post' width={409} height={320} />
//                             </Typography>
//                         </Typography>
//                     </Paper>
//                     <hr />
//                     <Paper sx={{ color: 'black', marginTop: '30' , borderRadius: 5 }}>
//                         <CardHeader
//                             avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
//                             action={<IconButton><MoreVertIcon /></IconButton>}
//                             title="Shrimp and Chorizo Paella"
//                             subheader="September 14, 2016"
//                         />
//                         <CardContent>
//                             <Image src={NightView} alt='NightView' width={420} height={300} />
//                             <Typography variant="body2" color="text.secondary">
//                                 This impressive paella is a perfect party dish...
//                             </Typography>
//                         </CardContent>
//                         <IconButton><FavoriteIcon /></IconButton>
//                         <IconButton><ShareIcon /></IconButton>
//                         <CardContent>
//                         </CardContent>
//                     </Paper>
//                 </Grid>
//                 {/*Right Column */}
//                 <Grid size={4}>
//                     <Item>
//                         <Typography>Today view surface</Typography>
//                         <Image src={ShoeImage} alt='ShoeImage' width={300} height={200} />
//                     </Item>
//                     <br />
//                     <Paper component="form" sx={{ p: '6px 6px', display: 'flex', alignItems: 'center', width: 355, borderRadius: 5 }}>

//                         <Typography color='black' marginTop={2} marginLeft={3}>
//                             Add Youre feed back

//                             <Typography>
//                                 <CardHeader
//                                     avatar={<Avatar sx={{ bgcolor: 'black' }}>S</Avatar>}
//                                     action={<IconButton><MoreVertIcon /></IconButton>}
//                                     title="Sana"
//                                     subheader="September 14, 2016"
//                                 />
//                                 <Button variant="outlined"><AddIcon />Follow</Button>
//                                 <CardHeader
//                                     avatar={<Avatar sx={{ bgcolor: red[500] }}>C</Avatar>}
//                                     action={<IconButton><MoreVertIcon /></IconButton>}
//                                     title="Cristo"
//                                     subheader="September 14, 2016"
//                                 />
//                                 <Button variant="outlined"><AddIcon />Follow</Button>

//                                 <CardHeader
//                                     avatar={<Avatar sx={{ bgcolor: 'blue' }}>A</Avatar>}
//                                     action={<IconButton><MoreVertIcon /></IconButton>}
//                                     title="Abdullah"
//                                     subheader="September 14, 2016"
//                                 />
//                                 <Button variant="outlined"><AddIcon />Follow</Button>

//                                 <CardHeader
//                                     avatar={<Avatar sx={{ bgcolor: 'green' }}>S</Avatar>}
//                                     action={<IconButton><MoreVertIcon /></IconButton>}
//                                     title="Saad"
//                                     subheader="September 14, 2016" />
//                                 <Button variant="outlined"><AddIcon />Follow</Button>

//                             </Typography>
//                         </Typography>

//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }










// // 'use client';

// // import * as React from 'react';
// // import { styled } from '@mui/material/styles';
// // import {
// //     Paper, Grid, Avatar, IconButton, Typography, CardContent, CardHeader,
// //     Box, InputBase, Card
// // } from '@mui/material';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import ShareIcon from '@mui/icons-material/Share';
// // import MoreVertIcon from '@mui/icons-material/MoreVert';
// // import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
// // import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
// // import NewspaperIcon from '@mui/icons-material/Newspaper';
// // import SearchIcon from '@mui/icons-material/Search';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import LinkedInImage from '@/app/img/nightview.jpg';
// // import LImage from '@/app/img/shoes.png';
// // import { red } from '@mui/material/colors';

// // const Item = styled(Paper)(({ theme }) => ({
// //     backgroundColor: '#fff',
// //     ...theme.typography.body2,
// //     padding: theme.spacing(1),
// //     textAlign: 'center',
// //     color: (theme.vars ?? theme).palette.text.secondary,
// //     ...(theme.palette.mode === 'dark' && {
// //         backgroundColor: '#1A2027',
// //     }),
// // }));

// // const Network = () => {
// //     return (
// //         <Box sx={{ flexGrow: 1, marginTop: 10 }}>
// //             <Grid container spacing={3}>
// //                 <Grid item xs="auto">
// //                     <Item>
// //                         {/* Card Section
// //                         <CardHeader
// //                             avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
// //                             action={<IconButton><MoreVertIcon /></IconButton>}
// //                             title="Shrimp and Chorizo Paella"
// //                             subheader="September 14, 2016"
// //                         />
// //                         <CardContent>
// //                             <Image src={LinkedInImage} alt='Linkedin Image' width={300} height={150} />
// //                             <Typography variant="body2" color="text.secondary">
// //                                 This impressive paella is a perfect party dish...
// //                             </Typography>
// //                         </CardContent>
// //                         <IconButton><FavoriteIcon /></IconButton>
// //                         <IconButton><ShareIcon /></IconButton>
// //                         <CardContent>
// //                             <Typography>Method:</Typography>
// //                             <Typography>Heat 1/2 cup of broth...</Typography>
// //                         </CardContent>
// //                     </Item>
// //                 </Grid>

// //                 <Grid item xs={6}>
// //                     <Item>
// //                         <Paper component="form" sx={{ p: '3px 4px', display: 'flex', alignItems: 'center', width: 300, borderRadius: 5 }}>
// //                             <AccountCircleIcon color="info" />
// //                             <SearchIcon />
// //                             <InputBase placeholder="Search a post" sx={{ ml: 1, flex: 1 }} />
// //                         </Paper>
// //                         <Typography variant="body2" color="text.secondary">
// //                             <ul className="navigation-menu">
// //                                 <li><SmartDisplayIcon color="success" /><Link href="/">Video</Link></li>
// //                                 <li><PhotoSizeSelectActualIcon color="primary" /><Link href="/">Photos</Link></li>
// //                                 <li><NewspaperIcon color="warning" /><Link href="/">Write Article</Link></li>
// //                             </ul>
// //                         </Typography>
// //                     </Item>
// //                 </Grid>

// //                 <Grid item xs>
// //                     <Item>
// //                         <Typography>Today view surface</Typography>
// //                         <Image src={LImage} alt='Linkedin Image' width={300} height={200} />
// //                     </Item>
// //                 </Grid>
// //             </Grid>

// //         </Box>
// //     );
// // };

// // export default Network;
