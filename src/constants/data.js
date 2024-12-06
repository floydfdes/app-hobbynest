import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import {
  SearchIcon,
  ExploreIcon,
  CreateIcon,
  ThumbUpIcon,
  FavoriteIcon,
  EditIcon,
  CommentIcon,
  VisibilityIcon,
  PersonAddIcon,
  InteractionIcon
} from '@mui/icons-material';

export const socialLinks = [
  { icon: LinkedIn, url: 'https://www.linkedin.com/in/floyd-fernandes/', label: 'LinkedIn' },
  { icon: Twitter, url: 'https://twitter.com/floydintech', label: 'Twitter' },
  { icon: GitHub, url: 'https://github.com/floydfdes', label: 'GitHub' },
  { icon: Instagram, url: 'https://www.instagram.com/floyd_fernandes_24/', label: 'Instagram' },
];

export const featureSections = [
  {
    id: "visitors",
    title: "For All Visitors",
    features: [
      { id: "browse", icon: <SearchIcon />, text: "Browse and view posts" },
      { id: "explore", icon: <ExploreIcon />, text: "Explore diverse interests" }
    ]
  },
  {
    id: "members",
    title: "For Registered Members",
    features: [
      { id: "create", icon: <CreateIcon />, text: "Create your own posts" },
      { id: "like", icon: <ThumbUpIcon />, text: "Like and dislike posts" },
      { id: "comment", icon: <CommentIcon />, text: "Comment on posts" },
      { id: "likeComments", icon: <FavoriteIcon />, text: "Like other people's comments" },
      { id: "edit", icon: <EditIcon />, text: "Edit or delete your own posts and comments" }
    ]
  }
];