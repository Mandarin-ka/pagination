import { FetchingArgs } from '../types/FetchingArgs';
import { Post } from '../types/Post';
import { User } from '../types/User';

enum URLS {
  URL_POSTS = 'https://jsonplaceholder.typicode.com/posts',
  URL_USERS = 'https://jsonplaceholder.typicode.com/users/',
}

export async function fetchPosts({
  query,
  page,
}: FetchingArgs): Promise<User[]> {
  const paramsString = `title_like=${query}&_page=${page}&_limit=${10}`;

  try {
    const url = `${URLS.URL_POSTS}?${paramsString}`;
    const response = await fetch(url);
    const posts: Post[] = await response.json();

    const postUserPromises = posts.map(async (post) => {
      const userResponse = await fetch(`${URLS.URL_USERS}${post.userId}`);
      const userData: User = await userResponse.json();
      return {
        ...post,
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
      };
    });

    const postUserArray = await Promise.all(postUserPromises);

    return postUserArray;
  } catch (error) {
    throw new Error('Something went wrong!!!');
  }
}
