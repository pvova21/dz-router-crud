import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function PostView() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:7070/posts/${id}`);
      setPost(response.data.post);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const handleDeletePost = async () => {
    try {
      await axios.delete(`http://localhost:7070/posts/${id}`);
      // Redirect to the main page after deleting the post
      window.location.href = '/';
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      {post ? (
        <div>
          <h1>Пост {post.id}</h1>
          <p>{post.content}</p>
          <button onClick={handleDeletePost}>Удалить</button>
          <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PostView;