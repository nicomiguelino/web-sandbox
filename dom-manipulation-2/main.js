// Function to create a DOM object from an HTML string
function createDOMObjectFromHTML(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const body = doc.body;

  // Handle cases where the HTML string contains only an <img> tag
  if (body.children.length === 1 && body.firstElementChild.tagName.toLowerCase() === 'img') {
    return body.firstElementChild;
  }

  // Handle cases where the HTML string contains only plain text
  if (body.children.length === 0 && body.textContent.trim().length > 0) {
    const textNode = document.createTextNode(body.textContent.trim());
    const divElement = document.createElement('div');
    divElement.appendChild(textNode);
    return divElement;
  }

  // Otherwise, return the parsed HTML content
  return body;
}

const main = async () => {
  const container = document.querySelector('.container')
  const htmlText = "<img class=\"type:primaryImage\" src=\"https://i.kinja-img.com/gawker-media/image/upload/s--QxFgX_r3--/c_fit,fl_progressive,q_80,w_636/624909953f47ecb8e3abf47a43514eba.jpg\" /><p>There comes a time when the long-suffering parent just <em>can’t</em> read <a href=\"https://zdcs.link/EvKvP\" target=\"_blank\" rel=\"noopener noreferrer\"><em>The Little Blue Truck</em></a><em> </em>one more time. Or <a href=\"https://zdcs.link/JY7YD\" target=\"_blank\" rel=\"noopener noreferrer\"><em>My First Farm Book</em></a>, with its disturbing implication that there will be more farm books to come. Or even <a href=\"https://zdcs.link/1qMqR\" target=\"_blank\" rel=\"noopener noreferrer\"><em>Blueberries for Sal</em></a>, my favorite for the preschool crowd, but one I’ve now read so many times I want to rip…</p><p><a href=\"https://lifehacker.com/14-really-good-chapter-books-for-preschoolers-that-libr-1819312259\">Read more...</a></p>"

  // const htmlText = "<img src=''>Weewoo<p>About me</p>"

  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlText, 'text/html')
  // write an if statement to check if the doc contains an image
  // if not, just get the text, whether it's in a p-tag or not
  const image = doc.querySelector('img')
  // const text = doc.querySelector('p')
  // do a more robust check for text
  const text = doc.body.textContent


  console.log('nico debug start')
  console.log(text)
  console.log('nico debug end')

  if (image) {
    container.appendChild(image)
  }

  if (text) {
    container.appendChild(text)
  } else {
    container.appendChild(doc.body.firstChild)
  }
}

main()
