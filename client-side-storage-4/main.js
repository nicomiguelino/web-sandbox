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
    const objectStore = this.db
      .transaction(this.storeName)
      .objectStore(this.storeName)
    objectStore.openCursor().addEventListener('success', (e) => {
      console.log('Called `openCursor()`')
      const cursor = e.target.result
      if (cursor) {
        cursor.continue()
      } else {
        console.log('No more entries')
      }
    })
  }

  clearData() {
    const objectStore = this.db
      .transaction(this.storeName, 'readwrite')
      .objectStore(this.storeName)
    objectStore.clear()
  }
}

const main = () => {
  const appCache = new AppCache({
    dbName: 'rssCache',
    storeName: 'rssStore'
  })

  appCache.openRequest.addEventListener('success', () => {
    appCache.clearData()

    appCache.addData({
      title: 'Test title',
      pubDate: 'Test pubDate',
      content: 'Test content',
      contentSnippet: 'Test contentSnippet'
    })

    appCache.addData({
      title: 'Test title 2',
      pubDate: 'Test pubDate 2',
      content: 'Test content 2',
      contentSnippet: 'Test contentSnippet 2'
    })

    appCache.displayData()
  })
}

main()
