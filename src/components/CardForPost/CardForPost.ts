import PostInfoCard from '../PostInfoCard/PostInfoCard.js';
import UserPartCard from '../UserPartCard/UserPartCard.js';
import { Card } from '../../types/Card.js';

const CardForPost = (cardObj: Card): HTMLDivElement => {
  const { id, title, body, name, phone, email } = cardObj;

  const cardWrapper = document.createElement('div');

  cardWrapper.classList.add('card-wrapper');
  cardWrapper.setAttribute('id', id);

  const userWrapper = UserPartCard(name, phone, email);
  const postWrapper = PostInfoCard(title, body);
  cardWrapper.append(userWrapper, postWrapper);

  return cardWrapper;
};

export default CardForPost;
