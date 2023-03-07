import React from 'react';
import SocialIcons from '../components/socialIcons';
import './posts.css';
 
  
export default async function page() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shakirck'
  );
  const data = await res.json();
  const posts = data.items;
 

  const getFirst250Words = (text: string) => {
    const words = text.split(' ');
    if (words.length > 50) {
      return words.slice(0, 50).join(' ') + '...';
    } else {
      return text;
    }
  };

  return (
    <div className='blog-container animate' >
      {posts.map((post: any) => (
        <div className='blog-post' key={post.guid}>
          <p>{new Date(post.pubDate).toLocaleDateString()}</p>
          <h1>{post.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: getFirst250Words(post.description) }}
          />
          <a href={post.link}>Read More</a>
        </div>
      ))}
    </div>
  );
}
