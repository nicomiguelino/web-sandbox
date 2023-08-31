export function drawSquare() {
  const container = document.querySelector('.container');
  const h3 = document.createElement('h3');

  h3.textContent = "A square is drawn.";
  container.appendChild(h3);

  console.log("A square is drawn.");
}
