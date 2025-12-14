'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Typography,
  Stack,
  Tabs,
  Tab,
  Box,
  Paper,
  Grid,
  Alert,
  Button,
  Avatar,
  Card
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AodIcon from '@mui/icons-material/Aod';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Image from 'next/image';
import NightView from '../img/nightview.jpg';
import axios from '../axios'


export default function NestedGrid() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [list, setList] = React.useState([])
  const [getList, setGetList] = React.useState('')

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles?.('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  //Create List api
  const createList = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "/user/list",
        // { title: "My new list", content: getList },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setList(response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  React.useEffect(() => {
    createList()
  }, [])
  {/*button connect */ }
  const buttonConnection = async (user_id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/connection/create",
        {connection: user_id}
      );
      console.log("button connection:", response.data);
      await getPosts()
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }
  const ProfileCard = ({ person }) => (
    <Card sx={{ mb: 3, backgroundColor: '#f9f9f9', width: 250, p: 2, m: 1, borderRadius: 3, boxShadow: 3, mt: 4 }}>
      <Box sx={{ position: "relative" }}>
        <Image src={NightView} alt="NightView" width={220} height={100} />
        <Avatar
          src={person.avatar}
          sx={{
            width: 80,
            height: 80,
            border: "3px solid white",
            position: "absolute",
            top: 60,
            left: 70,
          }}
        />
      </Box>
      <Box sx={{ mt: 6, textAlign: "left" }}>
        <Typography variant="h5" sx={{ color: "black", fontSize: 15 }} >
          {person.first_name} {person.last_name}
        </Typography>
        <Typography variant="h5" sx={{ color: "black", fontSize: 15 }} >
          <b>{person.last_name}</b>
        </Typography>
        <Typography variant="h5" sx={{ color: "black", fontSize: 15 }} >
          {person.last_login}
        </Typography>
        <Typography variant="h5" sx={{ color: "gray", fontSize: 15 }} >
          Lead manager <br /> Dias consoulting
        </Typography>
        <Typography variant="h5" sx={{ color: "blue", fontSize: 15 }} >
          {person.is_active}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", fontSize: 12 }}>{person.role}</Typography>
        <Typography variant="body2" sx={{ color: "gray", fontSize: 12 }}>{person.location}</Typography>
        <Typography variant="body1" color="black">
          - {person.company}
        </Typography>
        <Typography variant="body1" color="gray">
          Based on you're profile
        </Typography>
        <Button variant='inline' onClick={() => buttonConnection(person.id)} sx={{ color: '#0072B1', border: '1px solid #0072B1', Width: 50, }}><PersonAddIcon />Connect</Button>
      </Box>
    </Card>
  );

  return (
    <Box sx={{ flexGrow: 1, marginTop: 18, ml: 15 }}>
      {/* Left and Right Column */}
      <Grid container spacing={2}>
        {/* Left Sidebar */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container spacing={4}>
            <Grid item xs={6} lg={3}>
              
              <Item>

                <Box
                  component="ul"

                  aria-labelledby="category-a"
                  sx={{ pl: 2, textAlign: 'left' }}
                >
                  <Typography variant='body1' sx={{ color: 'black', size: 15 }}>Manage my Network</Typography>
                  <Stack spacing={1}>
                    <hr />

                    <Typography variant="body2">
                      <PeopleIcon /> Connections
                    </Typography>
                    <Typography variant="body2">
                      <PersonIcon /> Following & Followers
                    </Typography>
                    <Typography variant="body2">
                      <GroupsIcon /> Groups
                    </Typography>
                    <Typography variant="body2">
                      <CalendarMonthIcon /> Events
                    </Typography>
                    <Typography variant="body2">
                      <AodIcon /> Pages
                    </Typography>
                    <Typography variant="body2">
                      <NewspaperIcon /> Newsletters
                    </Typography>
                  </Stack>
                </Box>
              </Item>
              <br />
              <hr />
              <Typography variant="body1" sx={{ color: "gray", fontSize: 14 }}>About Accessibillity Help Center<br /> Privicay & Terms Ad Choices <br /> Advertising Bussiness Services <br /> Get the Linkedin app More</Typography>
              <Typography variant="body1" sx={{ color: "gray", fontSize: 12 }}><b>Linkedin </b>Coporation © 2025</Typography>
            </Grid>
            {/* Right Sidebar */}
            <Grid item xs={12} md={5} lg={4}>
              <Item>
                <Box sx={{ width: 700 }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    sx={{ backgroundColor: '#fff' }}
                  >
                    <Tab value="one" label="Grow" />
                    <Tab value="two" label="Catch up" />
                  </Tabs>
                </Box>
              </Item>
              <Alert
                severity="info"
                sx={{ width: 720, mt: 2 }}
                action={
                  <Button color="inherit" size="small">
                    Manage
                  </Button>
                }
              >
                No Pending Invitation
              </Alert>
              {/* Puzzle Game Section*/}

              <Item sx={{ width: 720, mt: 2 }}>
                <Typography variant="body1">
                  Take a break with a LinkedIn puzzle game
                </Typography>
                <Typography variant="h5">Zip - a quick brain teaser</Typography>
                <Typography variant="body2">Solve in 60s or less</Typography>
                <Button variant="outlined" sx={{ mt: 1 }}>
                  Solve now
                </Button>
              </Item>


              {/* Profile Card Section */}
              <Card

                sx={{
                  width: 720, mt: 2, p: 2, display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  mt: 2,
                }}>
                <Typography variant='body1'
                  sx={{
                    color: 'gray', ml: 4
                  }}>
                  People you may know based on you're Recent activity
                </Typography>
                {list.map((person, index) => (
                  <ProfileCard key={index} person={person} />
                ))}
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Box>
  );
}
