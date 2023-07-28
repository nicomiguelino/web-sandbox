class AppCache {
  constructor({ dbName, storeName }) {
    this.db = null
    this.dbName = dbName
    this.storeName = storeName

    this.openRequest = window.indexedDB.open(this.dbName, 1)

    this.openRequest.addEventListener('error', () => {
      console.log('Database failed to open')
    })

    this.openRequest.addEventListener('success', () => {
      console.log('Database opened successfully')

      this.db = this.openRequest.result

      // TODO: Uncomment the line below when ready.
      // this.displayData()
    });

    this.openRequest.addEventListener('upgradeneeded', (e) => {
      this.db = e.target.result

      const objectStore = this.db.createObjectStore(this.storeName, {
        keyPath: 'id',
        autoIncrement: true,
      });

      const fieldNames = ['title', 'pubDate', 'content', 'contentSnippet']

      fieldNames.forEach(fieldName => {
        objectStore.createIndex(fieldName, fieldName, { unique: false })
      })

      console.log('Database setup complete')
    });
  }

  // TODO: You might want to add an argument for the callback function.
  addData({ title, pubDate, content, contentSnippet }) {
    const transaction = this.db.transaction([this.storeName], 'readwrite')
    const objectStore = transaction.objectStore(this.storeName)
    const addRequest = objectStore.add({
      title,
      pubDate,
      content,
      contentSnippet
    })

    addRequest.addEventListener('success', () => {
      console.log('Data added successfully')
    })

    transaction.addEventListener('complete', () => {
      console.log('Transaction completed: database modification finished.')
      // TODO: Uncomment the line below when ready.
      // this.displayData()
    })

    transaction.addEventListener('error', () => {
      console.log('Transaction not opened due to error')
    })
  }

  displayData() {
    console.log('Called displayData()...')
    const objectStore = this.db
      .transaction(this.storeName)
      .objectStore(this.storeName)
    const request = objectStore.getAll()

    request.addEventListener('success', () => {
      console.log(typeof request.result)
      console.log(request.result)
    })

    // NOTE: Alternative implementation using a cursor.
    // objectStore.openCursor().addEventListener('success', (e) => {
    //   const cursor = e.target.result
    //   const encoded = JSON.stringify(cursor.value, null, 2)
    //   console.log(encoded)
    //   if (cursor) {
    //     cursor.continue()
    //   } else {
    //     console.log('No more entries')
    //   }
    // })
  }

  clearData() {
    const objectStore = this.db
      .transaction(this.storeName, 'readwrite')
      .objectStore(this.storeName)
    objectStore.clear()
  }
}

const seedData = [
  {
    title: "Last year's heatwave to be regarded as 'cool' by end of century",
    pubDate: "July 26, 2023, 4:05 PM",
    content: "Lorem ipsum dolor sit amet.",
    contentSnippet: "Lorem ipsum dolor sit amet."
  },
  {
    title: "Sinead O'Connor: Tributes flow for Irish singer dead at 56",
    pubDate: "July 26, 2023, 10:53 PM",
    content: "Lorem ipsum dolor sit amet.",
    contentSnippet: "Lorem ipsum dolor sit amet."
  },
  {
    title: "Record British Gas profit after energy bill change",
    pubDate: "July 26, 2023, 11:55 PM",
    content: "Lorem ipsum dolor sit amet.",
    contentSnippet: "Lorem ipsum dolor sit amet."
  }
]

const main = () => {
  const appCache = new AppCache({
    dbName: 'rssCache',
    storeName: 'rssStore'
  })

  appCache.openRequest.addEventListener('success', () => {
    appCache.clearData()

    seedData.forEach(data => {
      appCache.addData(data)
    })

    appCache.displayData()
  })
}

main()
