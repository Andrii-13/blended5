import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
import { comments } from '../../helpers/comments';
import { useGetBlogQuery } from '../../redux/commentApi';

export const Comments = () => {

  const blog = useGetBlogQuery();
  console.log(blog);

  return (
    <Grid>
      {comments &&
        comments.map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
