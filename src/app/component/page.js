
'use client';


import * as React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import {
    Paper, Grid, Avatar, IconButton, Typography, CardContent, CardHeader,
    Box, InputBase, Stack, Card, useTheme, useMediaQuery
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image';
import Link from 'next/link';
import NightView from '../img/nightview.jpg';
import CommentIcon from '@mui/icons-material/Comment';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import Post from '../img/post.jpg';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShoeImage from '../img/shoes.png';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddchartIcon from '@mui/icons-material/Addchart';
import axios from '../axios';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...(theme.palette.mode === 'dark' && {
        backgroundColor: '#1A2027',
    }),
}));

export default function BasicGrid() {
    const [posts, setPosts] = React.useState([])
    const [postContent, setPostContent] = React.useState()
    const [openCommentPostId, setOpenCommentPostId] = React.useState(null);
    const [likeButtonColor, setLikeButtonColor] = React.useState("red")
    const [commnt, setCommnt] = React.useState("")
    const [comments, setComments] = React.useState({})
    //Fetch Post
    const getPosts = async () => {
        try {
            const token = localStorage.getItem("token")
            const response = await axios.get(
                "/post/list",
                // { headers: { Authorization: `Token ${token}` } }
            )
            setPosts(response.data)
        } catch (error) {
            console.error("Error fetching posts:", error)
        }
    };
    //fetch comment
    const fetchComments = async (postId) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(
                `/postcomment/list?post=${postId}`,
                { headers: { Authorization: `Token ${token}` } }
            );
            setComments((prev) => ({
                ...prev,
                [postId]: response.data,
            }));
            // setComments(response.data)
            // return response.data;
        } catch (error) {
            console.error("Error fetching comments:", error);
            return [];
        }
    };

    // Like/ liked
    const likePost = async (postId, isLiked) => {
        try {
            const token = localStorage.getItem("token");
            if (isLiked) {
                await axios.delete(
                    "/postlike/delet",
                    { post: postId }, // send this post which is liking
                );
            } else {
                await axios.post(
                    "/postlike/create",
                    { post: postId },
                );
            }
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };
    // Submit comment
    const handleCommentSubmit = async (postId) => {
        try {
            const token = localStorage.getItem("token");
            await axios.post(
                "/postcomment/create",
                { post: postId, content: commnt },
                { headers: { Authorization: `Token ${token}` } }
            );
            setCommnt("");
            fetchComments(postId);
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };
    //show/comment 
    const handleShowComment = (postId) => {
        if (openCommentPostId === postId) {
            setOpenCommentPostId(null);
        } else {
            setOpenCommentPostId(postId);
            fetchComments(postId);
        }
    };
    React.useEffect(() => { getPosts() }, [])
    // create post
    const createPost = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                "/post/create",
                { title: "My new post", content: postContent }, // sample body
                // { headers: { Authorization: `Token ${token}` } }
            );
            console.log("Post created:", response.data);
            await getPosts()
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };
    return (
        <Box sx={{ flexGrow: 1, marginTop: 4 }}>
            <Grid container spacing={2} sx={{ marginTop: 5 }}>
                {/*Left Column - Hidden on mobile and tablets */}
                <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                    <Item>
                        <CardHeader
                            avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
                            action={<IconButton><MoreVertIcon /></IconButton>}
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardContent>
                            <Image src={NightView} alt='NightView' width={300} height={150} />
                            <Typography variant="body2" color="text.secondary">
                            </Typography>
                        </CardContent>
                        <IconButton><FavoriteIcon /></IconButton>
                        <IconButton><ShareIcon /></IconButton>
                        <CardContent>
                            <Typography>Method:</Typography>
                            <Typography>Heat 1/2 cup of broth...</Typography>
                        </CardContent>
                    </Item>
                    <hr />
                    <Paper component="form" sx={{ p: '6px 6px', display: 'flex', alignItems: 'center', width: { xs: '100%', sm: '100%', md: 355 }, borderRadius: 5 }}>

                        <Stack color='black'>
                            Profile viewers
                            <Typography sx={{ color: 'gray' }}>
                                Profile Analyist
                            </Typography>
                        </Stack>
                        <AddchartIcon sx={{ marginRight: '20', color: 'orange' }} />
                        <Typography sx={{ marginLeft: '20', color: 'blue' }}>

                            29
                        </Typography>

                    </Paper>
                    <br />
                    <Paper sx={{ color: 'black', marginTop: '30' }}>
                        <Typography variant='h6'>
                            This is my first web page
                        </Typography>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et velit amet temporibus aspernatur
                            modi magnam, eius delectus. Repellat perferendis consectetur amet voluptates delectus, earum quibusdam?
                        </Typography>
                    </Paper>
                </Grid>
                {/*Center Column */}
                <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                    <Item>
                        <Paper component="form" sx={{ p: '3px 4px', display: 'flex', alignItems: 'center', width: { xs: '100%', sm: '100%', md: 435 }, borderRadius: 5 }}>
                            <AccountCircleIcon color="info" />
                            <SearchIcon />
                            <InputBase onChange={(e) => setPostContent(e.target.value)} placeholder="Start a post" sx={{ ml: 1, flex: 1 }} />

                        </Paper>
                        <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4, md: 9 }, mt: 2, mr: 2, flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <SmartDisplayIcon color="success" />
                                <Link href="/">Video</Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <PhotoSizeSelectActualIcon color="primary" />
                                <Link href="/">Photos</Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <NewspaperIcon color="warning" />
                                <Link href="/">Write Article</Link>
                            </Box>
                        </Box>
                    </Item>
                    <Button variant='contained' sx={{ width: { xs: '100%', sm: '100%', md: 448 }, backgroundColor: 'text.secondary' }} onClick={createPost}>Click me</Button>

                    <hr />
                    {posts.map((post) => (
                        <Paper key={post.id} component="form" sx={{ p: '6px 6px', display: 'flex', alignItems: 'center', width: { xs: '100%', sm: '100%', md: 425 }, borderRadius: 5, marginTop: 4 }}>
                            <Stack variant="body2" color="text.secondary" sx={{ width: '100%' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: 'purple', mt: 1 }}>{post.user.first_name?.[0]}</Avatar>
                                    }
                                    action={
                                        <Box sx={{ marginLeft: 20 }}>
                                            <MoreVertIcon onClick={() => console.log("More clicked")} />
                                            <CloseIcon onClick={() => console.log("Close clicked")} />
                                        </Box>
                                    }
                                    title={`${post.user.first_name} ${post.user.last_name}`}
                                    subheader={
                                        <Typography sx={{ mt: 0, fontSize: 12, color: "gray" }}>
                                            {post.created_at}
                                        </Typography>
                                    }
                                />

                                <hr />
                                {/* <Image src={Post} alt='post' width={409} height={320} />  */}
                                {/*post content*/}

                                <Typography variant='h5' sx={{ color: 'black', mt: 3 }}>{post.content}</Typography>
                                {/*show {like and comment} */}
                                <Typography variant='body2' sx={{ marginLeft: 1, mt: 3 }}>{post.likes_count} Likes</Typography>
                                <Typography variant='body2' sx={{ marginLeft: 30 }}>{post.comments_count} Comments</Typography>
                                {/*action {like and comment} */}

                                <Box sx={{ display: 'flex', gap: 3, mt: 2, mr: 2, flexWrap: 'wrap' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <FavoriteIcon sx={{ color: post.is_liked ? "red" : "grey" }} onClick={() => likePost(post.id)} />
                                        <Typography>{post.is_liked ? "like" : "liked"}</Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                                        <CommentIcon sx={{ cursor: "pointer" }} onClick={() => handleShowComment(post.id)} />
                                        <Typography>Comment</Typography>
                                    </Box>
                                    <br />
                                </Box>
                                {/*comment section */}
                                {openCommentPostId === post.id && (
                                    <Box sx={{ mt: 1 }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                border: "1px solid #ccc",
                                                borderRadius: 2,
                                                px: 1,
                                                py: 0.5,
                                                mt: 1,
                                                width: { xs: '100%', sm: '100%', md: 350 }
                                            }}
                                        >
                                            <InputBase
                                                placeholder="Write a comment...in this field"
                                                value={commnt}
                                                onChange={(e) => setCommnt(e.target.value)}
                                                sx={{ flex: 1, ml: 1 }}
                                            />

                                            <Button
                                                variant="contained"
                                                size="small"
                                                color="primary"
                                                onClick={() => handleCommentSubmit(post.id)}
                                                sx={{ ml: 1 }}
                                            >
                                                Comment
                                            </Button>
                                        </Box>
                                        {/* Show comments */}
                                        {comments[post.id]?.map((c) => (
                                            <Card key={c.id} sx={{ mt: 1, p: 1 }}>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar sx={{ bgcolor: 'black', mt: 1 }}>
                                                            {c.user.first_name?.[0]}
                                                        </Avatar>
                                                    }
                                                    action={
                                                        <Box sx={{ marginLeft: 2, color: 'gray' }}>
                                                            <MoreHorizIcon onClick={() => console.log("More clicked")} />
                                                        </Box>
                                                    }
                                                    title={
                                                        <Typography variant="body2" sx={{ color: 'black' }}>
                                                            {c.user.first_name} {c.user.last_name}
                                                        </Typography>
                                                    }
                                                    subheader={new Date(c.created_at).toLocaleString()} // formats comment date
                                                />

                                                <Typography sx={{ ml: 9, mt: 1, fontSize: 15, color: "black" }}>
                                                    {c.content}
                                                </Typography>
                                                <Box sx={{ display: 'flex', gap: 1, mt: 2, ml: 2 }}>
                                                    <Button sx={{ display: 'flex', fontSize: 12, alignItems: 'center', gap: 1, color: 'gray' }}>
                                                        Like | Reply
                                                    </Button>
                                                </Box>
                                            </Card>
                                        ))}
                                    </Box>
                                )}
                            </Stack>
                        </Paper>
                    ))}
                </Grid>
                {/*Right Column */}
                <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                    <Item>
                        <Typography>Today view surface</Typography>
                        <Image src={ShoeImage} alt='ShoeImage' width={300} height={200} />
                    </Item>
                    <br />
                    <Paper component="form" sx={{ p: '6px 6px', display: 'flex', alignItems: 'center', width: { xs: '100%', sm: '100%', md: 355 }, borderRadius: 5 }}>
                        <Card>
                            <Typography color='black' marginTop={2} marginLeft={3}>
                                Add Youre feed back
                            </Typography>
                            <CardHeader
                                avatar={<Avatar sx={{ bgcolor: 'black' }}>S</Avatar>}
                                action={<IconButton><MoreVertIcon /></IconButton>}
                                title="Sana"
                                subheader="September 14, 2016"
                            />
                            <Button variant="outlined"><AddIcon />Follow</Button>
                            <CardHeader
                                avatar={<Avatar sx={{ bgcolor: red[500] }}>C</Avatar>}
                                action={<IconButton><MoreVertIcon /></IconButton>}
                                title="Cristo"
                                subheader="September 14, 2016"
                            />
                            <Button variant="outlined"><AddIcon />Follow</Button>

                            <CardHeader
                                avatar={<Avatar sx={{ bgcolor: 'blue' }}>A</Avatar>}
                                action={<IconButton><MoreVertIcon /></IconButton>}
                                title="Abdullah"
                                subheader="September 14, 2016"
                            />
                            <Button variant="outlined"><AddIcon />Follow</Button>

                            <CardHeader
                                avatar={<Avatar sx={{ bgcolor: 'green' }}>S</Avatar>}
                                action={<IconButton><MoreVertIcon /></IconButton>}
                                title="Saad"
                                subheader="September 14, 2016" />
                            <Button variant="outlined"><AddIcon />Follow</Button>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
}










