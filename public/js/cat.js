//   function playCatSound() {
//     const catSound = document.getElementById('catSound');
//     catSound.play();
//   }
//   const catImg = document.getElementById('catImg');
//   catImg.addEventListener('click', playCatSound);

const style = document.createElement('style');
style.innerHTML = `
    .zoom-effect {
        animation: zoom 0.5s ease-in-out;
    }  
    @keyframes zoom {
        0% {
        transform: scale(1);
        }
        50% {
          transform: scale(1.03);
        }
        100% {
          transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

    // Function to play the sound and apply zoom effect
function playCatSound() {
    const catSound = document.getElementById('catSound');
    catSound.play();  // Play the sound effect

      // Add zoom effect class
    const catImg = document.getElementById('catImg');
    catImg.classList.add('zoom-effect');

      // Remove the zoom effect after animation ends to reset it
    catImg.addEventListener('animationend', function() {
    catImg.classList.remove('zoom-effect');
    });
}

    // Get the cat image element and add event listener to it
const catImg = document.getElementById('catImg');
catImg.addEventListener('click', playCatSound);