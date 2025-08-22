
import React from 'react';
import './FeedList.css';
import CommentsForm from '../CommentsForm/CommentsForm'
function FeedList({posts, handleLike, handleDislike, toggleComments,addComment}) {
   return (<>
            <div>
                  <div className="feed">
                      {posts.map(post => (
                        <div key={post.id} className="post">
                          <p>{post.text}</p>
                          <div className="buttons">
                            <button onClick={() => handleLike(post.id)}>👍 {post.likes}</button>
                            <button onClick={() => handleDislike(post.id)}>👎 {post.dislikes}</button>
                            <button onClick={() => toggleComments(post.id)}>
                              {post.showComments ? 'Hide Comments' : 'Show Comments'}
                            </button>
                          </div>

                          {post.showComments && (
                            <div className="comments-section">
                              <ul>
                                {post.comments.map((comment, index) => (
                                  <li key={index}>{comment}</li>
                                ))}
                              </ul>
                              <CommentsForm postId={post.id} onAddComment={addComment} />
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
           </div>
   	</>)
}

export default FeedList;