import './posts.css';

export default async function page() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shakirck'
    , {
      next: {
        revalidate: 120
      }
    }
  );
  const data = await res.json();
  const posts = data.items;
  let image = "";
  const getFirst250Words = (text: string) => {
    const words = text.split(' ');
    if (words.length > 50) {
      return words.slice(0, 50).join(' ') + '...';
    } else {
      return text;
    }
  };
  const strippedHTML = (post: string) => {

    const text = getFirst250Words(post);

    const strippedHTML = text.replace(/<figure>.*<\/figure>/g, '');
    // get the image from the figure tag
    const image = post.match(/<figure>.*<\/figure>/g);
    return strippedHTML || text;

  }
  return (
    <div className='blog-container ' >
      {posts.map((post: any) => (
        <div className='blog-post' key={post.guid}>
          <p>{new Date(post.pubDate).toLocaleDateString()}</p>
          <h1>{post.title}</h1>
          <div className='header-image'
          >
            <img src={post.thumbnail} width="400px" alt="thumb" />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: strippedHTML(post.description) }}
          />
          <a href={post.link}>Read More</a>
        </div>
      ))}
      <div className='margin'>

      </div>
    </div>
  );
}
