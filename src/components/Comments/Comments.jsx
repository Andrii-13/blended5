import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
import { useGetBlogQuery } from '../../redux/commentApi';


export const Comments = () => {
	const { data } = useGetBlogQuery();

	return (
		<Grid>
			{data && data.map((comment) => <Comment key={comment.id} {...comment} />)}
		</Grid>
	);
};

Comments.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
