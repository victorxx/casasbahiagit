const ads = {
  top: document.querySelector('.ads-top'),
  left: document.querySelector('.ads-left'),
  bottom: document.querySelector('.ads-bottom'),
  right: document.querySelector('.ads-right')
};

function rotateAds() {
  // Salva as classes atuais
  const top = ads.top;
  const left = ads.left;
  const bottom = ads.bottom;
  const right = ads.right;

  // Troca as classes entre os elementos
  top.classList.replace('ads-top', 'ads-left');
  left.classList.replace('ads-left', 'ads-bottom');
  bottom.classList.replace('ads-bottom', 'ads-right');
  right.classList.replace('ads-right', 'ads-top');

  // Atualiza o objeto para refletir as novas posições
  ads.top = right;
  ads.left = top;
  ads.bottom = left;
  ads.right = bottom;
}

// Chama a função a cada 5 segundos (5000ms)
setInterval(rotateAds, 5000);
