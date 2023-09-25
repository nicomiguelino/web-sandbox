document.addEventListener("alpine:init", () => {
  Alpine.data("getMessage", () => {
    return {
      message: "It works!",
      bgClass: {
        'bg': true,
        'bg-1': true,
        'bg-2': false,
      },
      init() {
        setInterval(() => {
          ['bg-1', 'bg-2'].forEach((bgClass) => {
            this.bgClass[bgClass] = !this.bgClass[bgClass];
          });
        }, 1000);
      },
    };
  });
});
