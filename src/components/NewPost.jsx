import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function NewPost() {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSavePost = async () => {
    try {
      await axios.post('http://localhost:7070/posts', { content });
      navigate('/');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  return (
    <div>
      <h1>Создание нового поста</h1>
      <textarea
        rows="4"
        cols="50"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Текст поста"
      ></textarea>
      <button className="button new-post-submit" onClick={handleSavePost}>
        Опубликовать
        </button>
        <Link className="square" to="/">X</Link>
    </div>
  );
}

export default NewPost;