export const StaticContent = (): [HTMLInputElement, HTMLElement] => {
  const headerWrapper = document.createElement('header');
  headerWrapper.classList.add('header');
  const headerTitle = document.createElement('h1');

  headerTitle.classList.add('header-title');
  headerTitle.textContent = 'Posts';

  const input = document.createElement('input');
  input.placeholder = 'Search for...';
  input.classList.add('header-input');

  const pageNumber = document.createElement('p');
  pageNumber.textContent = 'page 1';
  pageNumber.classList.add('header-page-number');
  headerWrapper.append(headerTitle, pageNumber, input);

  const cardsWrapper = document.createElement('main');
  cardsWrapper.classList.add('cards-wrapper');

  document.body.append(headerWrapper, cardsWrapper);

  return [input, cardsWrapper];
};
