import styles from "./posts.module.css";
import PocketBase from "pocketbase";
import Image from "next/image";
import moment from "moment";
import { log } from "console";

const pb = new PocketBase("http://127.0.0.1:8090");

async function getPosts() {
  const records = await pb
    .collection("posts")
    .getFullList({
      sort: "-created",
    })
    .then(async (res) => {
      for (const record in res) {
        res[record].created = moment(res[record].created).format(
          "MMMM Do YYYY"
        );
        console.log("record uploader Id: ", res[record].uploader);

        await pb
          .collection("users")
          .getOne(res[record].uploader)
          .then((user) => {
            console.log("user: ", user);
            
            if (user) {
              res[record].uploader = user;
            }
            console.log("res: ", res);
            
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return res;
    });

  return records;
}

const PostsPage = async () => {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <div>
        <div className="bg-white py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hidden Forest Gallery
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
        <div>
          {posts.map((post) => {
            const url = pb.getFileUrl(post, post.image);
            const avatar = pb.getFileUrl(post.uploader, post.uploader.avatar);
            return (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden my-6 mx-auto w-full max-w-md"
              >
                <div className="flex items-center p-3">
                  <Image
                    className="h-10 w-10 rounded-full object-cover"
                    src={avatar}
                    alt={post.uploader.name}
                    width={40}
                    height={40}
                  />
                  <span className="ml-3 font-medium text-base">
                    {post.uploader.name}
                  </span>
                  <span className="ml-3 font-medium text-base">
                    {post.created}
                  </span>
                </div>

                <Image
                  className="w-full h-auto object-cover"
                  src={url}
                  alt={post.content}
                  width={400}
                  height={600}
                />
                <div className="p-3">
                  <p className="text-sm mb-2">{post.content}</p>
                </div>
              </div>
              // <div
              //   key={post.id}
              //   className="mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8 "
              // >
              //   <div className="mx-auto max-w-xl py-8 border rounded border-stone-300 border-spacing-2">
              //     <Image
              //       className="mx-auto"
              //       src={url}
              //       width={500}
              //       height={300}
              //       alt={post.content}
              //     />
              //     <p className="mx-auto pr-2 pt-4 w-1/2">{post.content}</p>
              //     <p className="mx-auto pr-2 pt-4 w-1/2">{post.created}</p>
              //     <p className="mx-auto pr-2 pt-4 w-1/2">{post.uploader}</p>
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default PostsPage;
