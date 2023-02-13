const api = process.env.STRAPI_API;

interface Attributes {
  title: string;
  img: { data: { attributes: { url: string } } };
}

interface Post {
  id: number;
  attributes: Attributes;
}

export const getPosts = async () => {
  const postsRes = await fetch(`${api}/posts?populate[0]=img`);
  const posts = await postsRes.json();
  console.log(posts);

  const postsArr = posts?.data.map((post: Post) => ({
    id: post.id,
    title: post.attributes.title,
    imgUrl: post.attributes.img.data.attributes.url,
  }));

  return postsArr;
};
