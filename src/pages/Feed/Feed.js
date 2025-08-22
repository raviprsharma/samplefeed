import React, {useState} from 'react';
import './Feed.css';
import FeedList from '../../components/FeedList/FeedList';
import PostForm from '../../components/PostForm/PostForm';
function Feed() {
   const [posts, setPosts] = useState([]);
   const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
    };

    const handleDislike = (id) => {
      setPosts(posts.map(post => post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post));
    };

    const toggleComments = (id) => {
      setPosts(posts.map(post => post.id === id ? { ...post, showComments: !post.showComments } : post));
    };

    const addComment = (id, commentText) => {
        if (commentText.trim() === '') return;

        setPosts(posts.map(post =>
          post.id === id
            ? { ...post, comments: [...post.comments, commentText] }
            : post
        ));
    };

    const handleAddPost = (post) => {
        if(post){
          setPosts([post, ...posts]); // Add to top (most recent first)
        }
    }

   return (<>
             <h1>Simple Feed</h1>
             <PostForm handleAddPost={handleAddPost}/>
             <FeedList posts={posts} handleLike={handleLike} handleDislike={handleDislike} toggleComments={toggleComments} addComment={addComment}/>
    </>)
}

export default Feed;