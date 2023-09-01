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

window.onload = function() {
};
