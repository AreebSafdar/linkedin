"use client";

import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Divider,
  Avatar,
  IconButton,
  Chip,
  useTheme,
  useMediaQuery,
  Badge,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

// Notification Types and Constants
const NOTIFICATION_TYPES = {
  LIKE: "like",
  COMMENT: "comment",
  CONNECTION: "connection",
  JOB: "job",
  FOLLOW: "follow",
};

const NOTIFICATIONS = [
  {
    id: 1,
    type: NOTIFICATION_TYPES.LIKE,
    user: {
      name: "Sarah Johnson",
      title: "Product Manager at Google",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    action: "liked your post",
    content: "Great insights about AI and machine learning!",
    timestamp: "2 hours ago",
    isNew: true,
  },
  {
    id: 2,
    type: NOTIFICATION_TYPES.COMMENT,
    user: {
      name: "Michael Chen",
      title: "Senior Developer at Meta",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    action: "commented on your post",
    content: "Thanks for sharing this amazing article!",
    timestamp: "4 hours ago",
    isNew: true,
  },
  {
    id: 3,
    type: NOTIFICATION_TYPES.CONNECTION,
    user: {
      name: "Emily Rodriguez",
      title: "UI/UX Designer at Apple",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    action: "sent you a connection request",
    content: null,
    timestamp: "1 day ago",
    isNew: false,
  },
  {
    id: 4,
    type: NOTIFICATION_TYPES.FOLLOW,
    user: {
      name: "David Kumar",
      title: "CEO at Startup Inc",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    action: "started following you",
    content: null,
    timestamp: "2 days ago",
    isNew: false,
  },
  {
    id: 5,
    type: NOTIFICATION_TYPES.JOB,
    user: {
      name: "LinkedIn Job Alert",
      title: "Opportunities matching your profile",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    action: "sent you a job recommendation",
    content: "Senior Full Stack Engineer at TechCorp",
    timestamp: "3 days ago",
    isNew: false,
  },
];

// Notification Item Component
function NotificationItem({ notification, onDismiss }) {
  const getNotificationColor = (type) => {
    switch (type) {
      case NOTIFICATION_TYPES.LIKE:
        return "#ff0000";
      case NOTIFICATION_TYPES.COMMENT:
        return "#0a66c2";
      case NOTIFICATION_TYPES.CONNECTION:
        return "#0a66c2";
      case NOTIFICATION_TYPES.JOB:
        return "#00a300";
      case NOTIFICATION_TYPES.FOLLOW:
        return "#0a66c2";
      default:
        return "#666";
    }
  };

  const getActionColor = (type) => {
    switch (type) {
      case NOTIFICATION_TYPES.LIKE:
        return "error";
      case NOTIFICATION_TYPES.JOB:
        return "success";
      default:
        return "primary";
    }
  };

  return (
    <Paper
      sx={{
        p: 2,
        mb: 1.5,
        borderLeft: notification.isNew ? `4px solid #0a66c2` : "4px solid transparent",
        bgcolor: notification.isNew ? "#f0f4ff" : "background.paper",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: 2,
          bgcolor: notification.isNew ? "#e8ecf7" : "#f5f5f5",
        },
      }}
    >
      <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
        {/* Avatar */}
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          invisible={!notification.isNew}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#0a66c2",
              boxShadow: "0 0 0 2px white",
            },
          }}
        >
          <Avatar
            src={notification.user.avatar}
            alt={notification.user.name}
            sx={{ width: 48, height: 48 }}
          />
        </Badge>

        {/* Content */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {notification.user.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", display: "block", mb: 0.5 }}
              >
                {notification.user.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <span style={{ fontWeight: 500 }}>{notification.action}</span>
              </Typography>

              {notification.content && (
                <Typography
                  variant="body2"
                  sx={{
                    bgcolor: "#f0f0f0",
                    p: 1,
                    borderRadius: 1,
                    mb: 1,
                    fontStyle: "italic",
                    color: "#666",
                  }}
                >
                  "{notification.content}"
                </Typography>
              )}

              <Typography variant="caption" sx={{ color: "#999" }}>
                {notification.timestamp}
              </Typography>
            </Box>

            {/* Actions Menu */}
            <IconButton
              size="small"
              sx={{
                color: "text.secondary",
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Action Buttons */}
          {(notification.type === NOTIFICATION_TYPES.CONNECTION ||
            notification.type === NOTIFICATION_TYPES.FOLLOW) && (
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Button
                size="small"
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                Accept
              </Button>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                Decline
              </Button>
            </Stack>
          )}

          {notification.type === NOTIFICATION_TYPES.JOB && (
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Button
                size="small"
                variant="contained"
                color="success"
                sx={{
                  textTransform: "none",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                View Job
              </Button>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontSize: "0.85rem",
                  px: 2,
                }}
              >
                Save
              </Button>
            </Stack>
          )}
        </Box>
      </Box>
    </Paper>
  );
}

// Filter Tabs Component
function FilterTabs({ activeFilter, onFilterChange }) {
  const filters = ["All", "Mentions", "Comments", "Follows", "Jobs"];

  return (
    <Stack direction="row" spacing={1} sx={{ mb: 2, overflowX: "auto", pb: 1 }}>
      {filters.map((filter) => (
        <Chip
          key={filter}
          label={filter}
          onClick={() => onFilterChange(filter)}
          variant={activeFilter === filter ? "filled" : "outlined"}
          sx={{
            cursor: "pointer",
            fontWeight: activeFilter === filter ? 600 : 400,
          }}
        />
      ))}
    </Stack>
  );
}

// Header Component
function NotificationHeader() {
  const newCount = NOTIFICATIONS.filter((n) => n.isNew).length;

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Notifications
        </Typography>
        {newCount > 0 && (
          <Chip
            label={`${newCount} New`}
            color="primary"
            size="small"
            icon={
              <Badge
                badgeContent={newCount}
                color="primary"
                sx={{
                  "& .MuiBadge-badge": {
                    right: -3,
                    top: 13,
                    border: `2px solid white`,
                    padding: "0 4px",
                  },
                }}
              />
            }
          />
        )}
      </Box>
      <Divider />
    </Box>
  );
}

// Main Notification Page Component
export default function NotificationPage() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [activeFilter, setActiveFilter] = useState("All");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDismissNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((n) => ({ ...n, isNew: false }))
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        p: isMobile ? 2 : 3,
        mt: 10,
      }}
    >
      <Box
        sx={{
          maxWidth: isMobile ? "100%" : "600px",
          mx: "auto",
        }}
      >
        <Paper sx={{ p: 3, boxShadow: 1 }}>
          <NotificationHeader />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <Button
              size="small"
              variant="text"
              onClick={handleMarkAllAsRead}
              sx={{ textTransform: "none" }}
            >
              Mark all as read
            </Button>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Notifications List */}
          <Stack spacing={0}>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onDismiss={() => handleDismissNotification(notification.id)}
                />
              ))
            ) : (
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                  No notifications yet
                </Typography>
                <Typography variant="body2" sx={{ color: "#999" }}>
                  When you get notifications, they'll show up here
                </Typography>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Empty State Info */}
        {notifications.length > 0 && (
          <Box sx={{ mt: 3, p: 2, textAlign: "center" }}>
            <Typography variant="caption" sx={{ color: "#999" }}>
              You're all caught up! Check back later for more updates.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
