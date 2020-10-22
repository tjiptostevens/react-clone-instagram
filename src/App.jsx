import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username:"TjiptoSteven",
      caption:"Wow it's a big day",
      imageUrl:"https://images.pexels.com/photos/5505344/pexels-photo-5505344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      username:"JendroWaskita",
      caption:"coba2",
      imageUrl:"https://images.pexels.com/photos/5505344/pexels-photo-5505344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      username:"Afroji",
      caption:"njajal",
      imageUrl:"https://images.pexels.com/photos/5505344/pexels-photo-5505344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ]);

  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram logo"
          className="app__headerImage" />
      </div>

      {/* Posts */}

      {
        posts.map(post => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl} />        
        ))
      }

    </div>
  );
}

export default App;
