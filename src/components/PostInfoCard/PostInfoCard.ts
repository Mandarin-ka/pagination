export const PostInfoCard = (title: string, body: string): HTMLDivElement => {
  const postInfoWrapper = document.createElement('div');
  postInfoWrapper.classList.add('post-info-wrapper');

  const postTitle = document.createElement('h3');
  postTitle.textContent = title;
  postTitle.classList.add('post-title');

  const postSubtitle = document.createElement('p');
  postSubtitle.textContent = body;
  postSubtitle.classList.add('post-subtitle');
  postInfoWrapper.append(postTitle, postSubtitle);

  return postInfoWrapper;
};

export default PostInfoCard;
