"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Paper,
  TextField,
  Avatar,
  Typography,
  Button,
  Stack,
  Divider,
  InputAdornment,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

// Constants
const SIDEBAR_WIDTH = "25%";
const CHAT_WIDTH = "50%";
const EMPTY_STATE_IMAGE =
  "https://framerusercontent.com/images/1iHbOavyFopIG2QoPDcz4Wg438.jpg?width=2048&height=1152";
const HIRING_IMAGE =
  "https://framerusercontent.com/images/d55EmwjnHoE20q2MxFslUvK4KI.jpg?width=2400&height=1350";
const EMPTY_AVATAR_IMAGE =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const FOOTER_LINKS = [
  "About · Accessibility · Help Center",
  "Privacy & Terms · Advertising",
  "Get the LinkedIn app",
];

// Sidebar Component
function MessageSidebar() {
  return (
    <Paper
      elevation={0}
      sx={{
        width: SIDEBAR_WIDTH,
        bgcolor: "background.paper",
        borderRight: "1px solid",
        borderColor: "divider",
        overflowY: "auto",
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Messaging
      </Typography>

      <TextField
        fullWidth
        placeholder="Search messages"
        size="small"
        variant="outlined"
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            borderRadius: 1,
            bgcolor: "#f0f0f0",
          },
        }}
      />

      <List sx={{ p: 0 }}>
        <ListItem disableGutters>
          <ListItemButton
            sx={{
              borderRadius: 1,
              mb: 1,
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: "action.hover",
              },
            }}
          >
            <ListItemAvatar>
              <Avatar src={EMPTY_AVATAR_IMAGE} alt="User" />
            </ListItemAvatar>
            <ListItemText
              primary="No messages yet"
              secondary="Start a conversation to grow your network"
              primaryTypographyProps={{ fontWeight: 500 }}
              secondaryTypographyProps={{ fontSize: "0.85rem" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
}

// Empty State Component
function ChatEmptyState() {
  return (
    <Box
      sx={{
        flex: 1,
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fafafa",
      }}
    >
      <Avatar
        src={EMPTY_STATE_IMAGE}
        alt="No messages"
        sx={{ width: 160, height: 160, opacity: 0.3, mb: 2 }}
      />
      <Typography variant="h6" sx={{ fontWeight: 500, color: "text.secondary", mb: 2 }}>
        No messages yet
      </Typography>
      <Button
        variant="outlined"
        sx={{
          borderRadius: 4,
          textTransform: "none",
          px: 3,
        }}
      >
        Send a message
      </Button>
    </Box>
  );
}

// Message Input Component
function MessageInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box sx={{ p: 2, borderTop: "1px solid", borderColor: "divider" }}>
      <TextField
        fullWidth
        placeholder="Write a message..."
        variant="outlined"
        size="small"
        multiline
        maxRows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            bgcolor: "#f5f5f5",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                size="small"
                color="primary"
                onClick={handleSend}
                disabled={!message.trim()}
              >
                <SendIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

// Chat Area Component
function ChatArea() {
  return (
    <Box
      sx={{
        width: CHAT_WIDTH,
        bgcolor: "background.paper",
        borderRight: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Recipient Selection */}
      <Box sx={{ p: 2, borderBottom: "1px solid", borderColor: "divider" }}>
        <TextField
          fullWidth
          placeholder="Type a name or multiple names"
          size="small"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 4,
            },
          }}
        />
      </Box>

      <ChatEmptyState />
      <MessageInput />
    </Box>
  );
}

// Sidebar Info Component
function InfoSidebar() {
  return (
    <Box sx={{ width: SIDEBAR_WIDTH, p: 2, overflowY: "auto" }}>
      <Card sx={{ mb: 3, boxShadow: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={HIRING_IMAGE}
          alt="Hiring"
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "text.secondary" }}
          >
            See who's hiring on LinkedIn.
          </Typography>
        </CardContent>
      </Card>

      <Divider sx={{ my: 2 }} />

      <Stack spacing={1}>
        {FOOTER_LINKS.map((link, index) => (
          <Typography
            key={index}
            variant="caption"
            sx={{ color: "text.secondary", lineHeight: 1.8 }}
          >
            {link}
          </Typography>
        ))}
      </Stack>

      <Typography
        variant="caption"
        sx={{ color: "#999", display: "block", mt: 3 }}
      >
        LinkedIn Corporation © 2025
      </Typography>
    </Box>
  );
}

// Main Component
export default function MessagingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: "#f5f5f5",
        mt: 10,
        gap: 0,
      }}
    >
      <MessageSidebar />
      <ChatArea />
      <InfoSidebar />
    </Box>
  );
}
