
  // function generateParticles(n) {
  //   let value = `${getRandom(2560)}px ${getRandom(2560)}px #000`;
  //   for (let i = 2; i <= n; i++) {
  //     value += `, ${getRandom(2560)}px ${getRandom(2560)}px #000`;
  //   }
  //   return value;
  // }

  // function generateStars(n) {
  //   let value = `${getRandom(2560)}px ${getRandom(2560)}px #fff`;
  //   for (let i = 2; i <= n; i++) {
  //     value += `, ${getRandom(2560)}px ${getRandom(2560)}px #fff`;
  //   }
  //   return value;
  // }

  function generateParticles(n) {
    let value = `${getRandom(2560)}px ${getRandom(2560)}px ${getRandomColor1()}`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2560)}px ${getRandom(2560)}px ${getRandomColor1()}`;
    }
    return value;
  }
  
  function generateStars(n) {
    let value = `${getRandom(2560)}px ${getRandom(2560)}px ${getRandomColor2()}`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2560)}px ${getRandom(2560)}px ${getRandomColor2()}`;
    }
    return value;
  }

  function getRandomColor1() {
    // Randomly pick a color: 80% chance for #000, 20% chance for rgb(0, 229, 207)
    return Math.random() < 0.6 ? '#000' : 'rgb(0, 150, 150)';
  }

  function getRandomColor2() {
    // Randomly pick a color: 80% chance for #000, 20% chance for rgb(0, 229, 207)
    return Math.random() < 0.6 ? '#fff' : 'rgb(0, 200, 200)';
  }

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  function initBG() {
    const particlesSmall = generateParticles(1000);
    const particlesMedium = generateParticles(500);
    const particlesLarge = generateParticles(250);
    const particles1 = document.getElementById('particles1');
    const particles2 = document.getElementById('particles2');
    const particles3 = document.getElementById('particles3');

    if (particles1) {
      particles1.style.cssText = `
      width: 1.5px;
      height: 1.5px;
      border-radius: 50%;
      box-shadow: ${particlesSmall};
      animation: animStar 50s linear infinite;
      `;
    }

    if (particles2) {
      particles2.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${particlesMedium};
      animation: animateParticle 100s linear infinite;
      `;
    }

    if (particles3) {
      particles3.style.cssText = `
      width: 3px;
      height: 3px;
      border-radius: 50%;
      box-shadow: ${particlesLarge};
      animation: animateParticle 150s linear infinite;
      `;
    }

    const starsSmall = generateStars(1000);
    const starsMedium = generateStars(500);
    const starsLarge = generateStars(250);
    const stars1 = document.getElementById('stars1');
    const stars2 = document.getElementById('stars2');
    const stars3 = document.getElementById('stars3');

    if (stars1) {
      stars1.style.cssText = `
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: ${starsSmall};
      animation: animStar 50s linear infinite;
      `;
    }

    if (stars2) {
      stars2.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${starsMedium};
      animation: animateParticle 100s linear infinite;
      `;
    }

    if (stars3) {
      stars3.style.cssText = `
      width: 3px;
      height: 3px;
      border-radius: 50%;
      box-shadow: ${starsLarge};
      animation: animateParticle 150s linear infinite;
      `;
    }
  }

  document.addEventListener('astro:after-swap', initBG);
  initBG();