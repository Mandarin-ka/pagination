import { StaticContent } from './src/components/StaticContent/StaticContent.js';

import {
  AMOUNT_OF_POSTS,
  SCROLL_PAGINATION_OFFSET,
  DELAY_MS,
} from './src/constants.js';
import { fetchPosts } from './src/API/getPosts.js';
import Posts from './src/components/Posts/Posts.js';
import { Card } from './src/types/Card.js';
import { User } from './src/types/User.js';
import { FetchingArgs } from './src/types/FetchingArgs.js';

let page = 1;
let query = '';
let isLoading = false;

const [inputElement, cardsWrapper] = StaticContent();

const debounce = (
  callback: (args: FetchingArgs) => Promise<User[]>,
  delay?: number
): ((args: FetchingArgs) => Promise<User[] | Card[]>) => {
  let timerId: number;

  return (args: FetchingArgs) => {
    clearTimeout(timerId);

    return new Promise((resolve, reject) => {
      timerId = window.setTimeout(() => {
        callback(args)
          .then((result: User[]) => resolve(result))
          .catch((error: unknown) => reject(error));
      }, delay);
    });
  };
};

const debouncedFunction = debounce(fetchPosts, DELAY_MS);

inputElement.addEventListener('input', (e: Event) => {
  query = (e.target as HTMLInputElement).value;
  page = 1;
  debouncedFunction({ query, page })
    .then((posts: Card[]) => Posts(posts || [], page))
    .catch((error: unknown) => console.error((error as Error).message));
});

const scrollEventListener = (): void => {
  const element = cardsWrapper;
  if (
    element.scrollTop >=
      element.scrollHeight - element.offsetHeight - SCROLL_PAGINATION_OFFSET &&
    !isLoading
  ) {
    if ((page + 1) * 10 <= AMOUNT_OF_POSTS) {
      isLoading = true;
      page += 1;
      debouncedFunction({ query, page })
        .then((posts: Card[]) => {
          Posts(posts, page);
          cardsWrapper.addEventListener('scroll', scrollEventListener);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          isLoading = false;
        });
      cardsWrapper.removeEventListener('scroll', scrollEventListener);
    }
  }
};
cardsWrapper.addEventListener('scroll', scrollEventListener);

debouncedFunction({ query, page })
  .then((posts: Card[]) => Posts(posts || [], page))
  .catch((error) => console.error(error));
