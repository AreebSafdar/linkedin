"use client";

import {
  Box,
  Paper,
  Avatar,
  Typography,
  Button,
  Stack,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

// Profile Header Section
function ProfileHeader() {
  return (
    <Paper sx={{ mb: 2, overflow: "hidden" }}>
      {/* Cover Photo */}
      <Box
        sx={{
          height: "200px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      />

      {/* Profile Info */}
      <Box sx={{ p: 3, position: "relative", pt: 0 }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
          {/* Avatar */}
          <Avatar
            src="https://i.pravatar.cc/150?img=10"
            sx={{
              width: 120,
              height: 120,
              border: "4px solid white",
              mt: -8,
            }}
          />

          {/* User Info */}
          <Box sx={{ flex: 1, mt: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
              John Developer
            </Typography>
            <Typography variant="h6" sx={{ color: "#666", mb: 1 }}>
              Junior Web Developer | React | JavaScript
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center", color: "#666" }}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">New York, USA</Typography>
            </Box>
          </Box>

          {/* Edit Button */}
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{
              textTransform: "none",
              borderRadius: 4,
            }}
          >
            Edit Profile
          </Button>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Contact Info */}
        <Stack direction="row" spacing={3}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <EmailIcon fontSize="small" sx={{ color: "#666" }} />
            <Typography variant="body2">john@example.com</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <LinkIcon fontSize="small" sx={{ color: "#666" }} />
            <Typography variant="body2">linkedin.com/in/johndeveloper</Typography>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}

// About Section
function AboutSection() {
  return (
    <Paper sx={{ mb: 2, p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        About
      </Typography>
      <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#555" }}>
        Hi! I'm a junior web developer with a passion for building beautiful and
        functional web applications. I specialize in React and JavaScript and I'm
        always eager to learn new technologies. I love working on projects that
        solve real-world problems and collaborating with amazing teams.
      </Typography>
    </Paper>
  );
}

// Experience Section
function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Junior React Developer",
      company: "Tech Startup Inc",
      duration: "Jan 2024 - Present",
      description: "Building responsive web applications using React",
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Web Solutions Co",
      duration: "Jun 2023 - Dec 2023",
      description: "Learned web development fundamentals and built small projects",
    },
  ];

  return (
    <Paper sx={{ mb: 2, p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Experience
      </Typography>

      {experiences.map((exp, index) => (
        <Box key={exp.id} sx={{ mb: index < experiences.length - 1 ? 2 : 0 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {exp.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", mb: 0.5 }}>
            {exp.company}
          </Typography>
          <Typography variant="caption" sx={{ color: "#999" }}>
            {exp.duration}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
            {exp.description}
          </Typography>
          {index < experiences.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Paper>
  );
}

// Education Section
function EducationSection() {
  return (
    <Paper sx={{ mb: 2, p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Education
      </Typography>

      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        Bachelor of Science in Computer Science
      </Typography>
      <Typography variant="body2" sx={{ color: "#666", mb: 0.5 }}>
        State University
      </Typography>
      <Typography variant="caption" sx={{ color: "#999" }}>
        2020 - 2023
      </Typography>
    </Paper>
  );
}

// Skills Section
function SkillsSection() {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
    "REST APIs",
    "Problem Solving",
  ];

  return (
    <Paper sx={{ mb: 2, p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Skills
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {skills.map((skill) => (
          <Card
            key={skill}
            sx={{
              p: 1,
              minWidth: "auto",
              bgcolor: "#f0f0f0",
              border: "1px solid #e0e0e0",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {skill}
            </Typography>
          </Card>
        ))}
      </Box>
    </Paper>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Todo App",
      description: "A simple todo list app built with React",
    },
    {
      id: 2,
      name: "Weather App",
      description: "Weather app that fetches data from an API",
    },
    {
      id: 3,
      name: "Portfolio Website",
      description: "My personal portfolio showcasing my projects",
    },
  ];

  return (
    <Paper sx={{ mb: 2, p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Projects
      </Typography>

      {projects.map((project) => (
        <Box key={project.id} sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {project.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            {project.description}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}

// Main Profile Page
export default function ProfilePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        p: 2,
        mt: 8,
      }}
    >
      {/* Container */}
      <Box sx={{ maxWidth: "600px", mx: "auto" }}>
        {/* All Sections */}
        <ProfileHeader />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />

        {/* Footer Spacing */}
        <Box sx={{ mb: 4 }} />
      </Box>
    </Box>
  );
}
