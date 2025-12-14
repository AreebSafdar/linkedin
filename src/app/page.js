"use client";

import Link from 'next/link';
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material';

const samplePosts = [
  { id: 1, author: 'Alice', content: 'Excited to share my first project built with React!', time: '2h' },
  { id: 2, author: 'Bob', content: 'Looking for frontend opportunities. DM me!', time: '1d' },
];

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: '#f3f2ef', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Top hero */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Welcome to your professional community
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                Connect with people, discover opportunities, and grow your career.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="row" spacing={1} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                <Link href="/profile" ><Button variant="outlined">Profile</Button></Link>
                <Link href="/component"><Button variant="contained">Feed</Button></Link>
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={3}>
          {/* Feed */}
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              {/* Start a post */}
              <Paper sx={{ p: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar>Y</Avatar>
                  <Button fullWidth variant="outlined">Start a post</Button>
                </Stack>
              </Paper>

              {/* Sample posts */}
              {samplePosts.map((p) => (
                <Card key={p.id}>
                  <CardHeader avatar={<Avatar>{p.author[0]}</Avatar>} title={p.author} subheader={p.time} />
                  <CardContent>
                    <Typography variant="body1">{p.content}</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Stack direction="row" spacing={2}>
                      <Button size="small">Like</Button>
                      <Button size="small">Comment</Button>
                      <Button size="small">Share</Button>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Right sidebar */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>People you may know</Typography>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
                  <Avatar />
                  <Box>
                    <Typography variant="body2">Jane Doe</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Frontend Developer</Typography>
                    <Box sx={{ mt: 1 }}>
                      <Button size="small" variant="contained">Connect</Button>
                    </Box>
                  </Box>
                </Stack>
              </Paper>

              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Hiring on LinkedIn</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>See curated jobs that match your profile.</Typography>
                <Box sx={{ mt: 2 }}>
                </Box>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
