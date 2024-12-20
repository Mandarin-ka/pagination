const UserPartCard = (
  name: string,
  phone: string,
  email: string
): HTMLDivElement => {
  const userWrapper = document.createElement('div');
  userWrapper.classList.add('user-wrapper');

  const userIcon = document.createElement('img');
  userIcon.classList.add('user-icon');
  userIcon.alt = 'user icon';
  userIcon.src = './assets/iconUser.png';

  const userInfoWrapper = document.createElement('div');
  userInfoWrapper.classList.add('user-info');

  const userName = document.createElement('h3');
  userName.classList.add('user-title');
  userName.textContent = name;

  const userPhone = document.createElement('p');
  const userEmail = document.createElement('p');
  const divider = document.createElement('span');
  divider.textContent = ' / ';
  userPhone.classList.add('user-subtitle');
  userEmail.classList.add('user-subtitle');
  userPhone.textContent = phone;
  userEmail.textContent = email;

  const userSubInfoWrapper = document.createElement('div');
  userSubInfoWrapper.classList.add('user-subtitle-info');
  userEmail.append(divider);
  userSubInfoWrapper.append(userEmail, userPhone);
  userInfoWrapper.append(userName, userSubInfoWrapper);
  userWrapper.append(userIcon, userInfoWrapper);

  return userWrapper;
};

export default UserPartCard;
