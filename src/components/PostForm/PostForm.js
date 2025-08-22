
import React, { useState } from 'react';
import './PostForm.css';
function PostForm({handleAddPost}) {
   const [newPostText, setNewPostText] = useState('');

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (newPostText.trim() === '') return;

    const newPost = {
      id: Date.now(),
      text: newPostText,
      likes: 0,
      dislikes: 0,
      comments: [],
      showComments: false,
    };
    handleAddPost(newPost);
    setNewPostText('');
  };

  return (<div>
      <form onSubmit={handleCreatePost}>
        <input
          type="text"
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostForm;