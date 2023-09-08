const createLoadingCard = () => {
  const loadingCard = document.createElement('div');
  loadingCard.className = 'loader';

  document.body.append(loadingCard);

  return loadingCard;
};

export default createLoadingCard;
