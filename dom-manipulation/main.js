class DOMParserWrapper {
  constructor() {
    this.parser = new DOMParser()
  }

  parseFromString(htmlString) {
    const doc = this.parser.parseFromString(htmlString, 'text/html');
    return doc.body.firstChild;
  }
}


function createDOMObject(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body.firstChild;
}


const main = async () => {
  const container = document.querySelector('.container')
  const htmlText1 = '<p>But if it\'s raining in Manila, hindi kita maririnig</p>'
  const htmlText2 = '<p>(Nakahiga, mag-isang nanginginig)</p>'
  const domParser = new DOMParserWrapper()

  const domObject1 = domParser.parseFromString(htmlText1)
  const domObject2 = domParser.parseFromString(htmlText2)

  domObject1.classList.add('mb-0')
  domObject2.classList.add('mb-0')

  container.appendChild(domObject1)
  container.appendChild(domObject2)
}

main()
