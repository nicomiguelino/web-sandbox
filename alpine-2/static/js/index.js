document.addEventListener("alpine:init", () => {
  Alpine.data("getMessage", () => {
    return {
      message: "I love Alpine more than ever!"
    };
  });

  Alpine.data("getSearchData", () => {
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
  });

  Alpine.data("getCount", (n = 1) => {
    return {
      count: 0,
      increment() {
        this.count += n;
      }
    };
  });
});
