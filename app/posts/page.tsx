import styles from './posts.module.css';
import PocketBase from 'pocketbase';
import Image from 'next/image';

const pb = new PocketBase('http://127.0.0.1:8090');

async function getPosts() {
  const records = await pb.collection('posts').getFullList({
    sort: '-created',
});
  return records;
}


const PostsPage = async () => {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <div>
        <h1>Posts</h1>
        <div>
          {posts.map((post) => {
            console.log(post);
            const url = pb.getFileUrl(post,post.image);
            return (
              <div key={post.id}>
                <Image src={url} width={300} height={200} alt={post.content} />
                <p>{post.content}</p>

              </div>
            
            );
          })}
        </div>
          
      </div>
    </main>
  );
};

export default PostsPage;
