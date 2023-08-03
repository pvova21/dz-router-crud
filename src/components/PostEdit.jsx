import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

function PostEdit() {
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:7070/posts/${id}`);
      setContent(response.data.post.content);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const handleSavePost = async () => {
    try {
      await axios.put(`http://localhost:7070/posts/${id}`, { content });
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  return (
    <div>
      <h1>Редактирование поста {id}</h1>
      <textarea
        rows="4"
        cols="50"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Текст поста"
      ></textarea>
      <button onClick={handleSavePost}>Сохранить</button>
      <Link to={`/posts/${id}`}>Отменить</Link>
    </div>
  );
}

export default PostEdit;