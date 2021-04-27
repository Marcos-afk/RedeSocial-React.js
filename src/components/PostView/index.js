import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from 'react-markdown';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root:{
    width: '100%',
    height: '100%'
  },
  imagePreview: {
    width: '100%'
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  markdown: {
    color: theme.palette.text.primary,
  },
  desc:{
    textIndent: 20,
    marginTop: theme.spacing(1),
    textAlign: 'justify'
}

}));

 export default function PostView({ post }) {
  const classes = useStyles();
  const { image, title, date, autor, hashtags, description , comment } = post;

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box mb={2}>
        <Typography variant="h2" color="textPrimary">
          {title}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <Box>
          <Avatar className={classes.avatar} src={autor?.avatar} />
        </Box>
        <Box>
          <Typography variant="body1" color="textPrimary">
            {autor?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {moment(date).fromNow()}
          </Typography>
        </Box>
      </Box>
      <Box mb={2}>
        <Typography variant="body1" color="textPrimary">
          {hashtags}
        </Typography>
      </Box>
      {image && (
        <Box mb={2}>
          <img className={classes.imagePreview} src={image} alt="background" />
        </Box>
      )}
       <Typography variant="body2" color="textPrimary" component="p" className={classes.desc}>
                    {description}
        </Typography>
      <Box>
        <IconButton aria-label="like">
          <FavoriteIcon />
          <Typography
            style={{ cursor: 'pointer' }}
            color="textSecondary"
            variant="body2"
          >
            {post.likes}
          </Typography>
        </IconButton>
      </Box>
      <Divider />
      <Box mb={8}>
        <Markdown source={comment} className={classes.markdown} />
      </Box>
    </Container>
  );
}

