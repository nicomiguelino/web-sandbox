const main = () => {
  const countryCodes = ['US', 'CA', 'MX', 'DE', 'FR', 'AU'];
  const container = document.querySelector('.container');

  countryCodes.forEach(countryCode => {
    const locale = clm.getLocaleByAlpha2(countryCode);
    const h4 = document.createElement('h4');
    h4.classList.add('text-white');
    h4.innerHTML = `The locale for ${countryCode} is ${locale}.`;
    container.appendChild(h4);
  });
};

main();

