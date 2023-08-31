export function drawCircle() {
  const container = document.querySelector('.container');
  const h3 = document.createElement('h3');

  h3.textContent = "A circle is drawn.";
  container.appendChild(h3);

  console.log("A circle is drawn.");
}

