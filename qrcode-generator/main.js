const main = () => {
  const options = {
    type: 'image/svg',
    color: {
      light: '#ffffff',
    },
    margin: 2,
  };

  QRCode.toString('https://react.gg/', options, (err, url) => {
    if (err) throw err;

    const parser = new DOMParser();
    const svg = parser.parseFromString(url, 'image/svg+xml');
    svg.documentElement.classList.add('qr-code');

    const container = document.querySelector('.container');
    container.appendChild(svg.documentElement);
  });
};

main();

