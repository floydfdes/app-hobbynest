import CommentIcon from '@mui/icons-material/Comment';
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export const signUpFields = [
  {
    fieldId: 'firstName',
    fieldName: 'First Name',
    fieldOptions: [],
    fieldType: 'text',
    placeholder: 'John',
  },
  {
    fieldId: 'lastName',
    fieldName: 'Last Name',
    fieldOptions: [],
    fieldType: 'text',
    placeholder: 'Doe',
  },
  {
    fieldId: 'age',
    fieldName: 'Age',
    fieldOptions: [],
    fieldType: 'number',
    placeholder: '46',
  },
  {
    fieldId: 'gender',
    fieldName: 'Gender',
    fieldOptions: ['', 'Male', 'Female'],
    fieldType: '',
    placeholder: '',
  },
  {
    fieldId: 'email',
    fieldName: 'Email',
    fieldOptions: [],
    fieldType: 'email',
    placeholder: 'johndoe@gmail.com',
  },
  {
    fieldId: 'password',
    fieldName: 'Password',
    fieldOptions: [],
    fieldType: 'password',
    placeholder: '',
  },
];

export const loginFields = [
  {
    fieldId: 'email',
    fieldName: 'Email',
    fieldOptions: [],
    fieldType: 'email',
  },
  {
    fieldId: 'password',
    fieldName: 'Password',
    fieldOptions: [],
    fieldType: 'password',
  },
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
