import { Card } from '../../types/Card.js';
import CardForPost from '../CardForPost/CardForPost.js';

const Posts = (cards: Card[], page: number): void => {
  const cardsWrapper = document.querySelector('.cards-wrapper');
  const pageNumber = document.querySelector('.header-page-number');

  pageNumber.textContent = `page ${page}`;

  const cardElements = cards.map((card: Card) => CardForPost(card));

  if (cards.length > 0) {
    cardsWrapper.append(...cardElements);
  } else {
    const nothingFoundMessage = document.createElement('h2');
    nothingFoundMessage.textContent = 'Nothing found';
    nothingFoundMessage.classList.add('message');

    cardsWrapper.append(nothingFoundMessage);
  }
};

export default Posts;
