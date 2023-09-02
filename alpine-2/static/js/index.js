const getMessage = () => {
  return {
    message: "I love Alpine!"
  };
};

const getCount = (n = 1) => {
  return {
    count: 0,
    increment() {
      this.count += n;
    }
  };
};

const getSearchData = () => {
  return {
    search: "",
    items: [
      "Turtwig",
      "Grotle",
      "Torterra",
      "Chimchar",
      "Monferno",
      "Infernape",
      "Piplup",
      "Prinplup",
      "Empoleon",
      "Starly",
      "Staravia",
      "Staraptor",
    ],
    get filteredItems() {
      const fuse = new Fuse(this.items);
      return fuse.search(this.search).map(({ item }) => item);
    }
  };
};

window.onload = () => {
  const store = {
    _count: 0,
    get count() {
      return this._count;
    },
    set count(x) {
      this._count = x;
    },
  };

  console.log(store.count);

  store.count = 12;
  console.log(store.count);
};
