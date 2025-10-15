const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75
});

typewriter
  .typeString('¡Go Johnny, Go!')
  .pauseFor(1500)
  .deleteAll()
  .start();
