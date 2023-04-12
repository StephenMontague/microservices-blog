import { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
	const [content, setContent] = useState('');

	const onSubmit = async e => {
		e.preventDefault();

		await axios.post(`http://comments-srv:4001/posts/${postId}/comments`, {
			content,
		});

		setContent('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>New Comment</label>
					<input
						value={content}
						onChange={e => setContent(e.target.value)}
						type='text'
						className='form-control'
					/>
				</div>
			</form>
			<button className='btn btn-primary'>Submit</button>
		</div>
	);
};
export default CommentCreate;
