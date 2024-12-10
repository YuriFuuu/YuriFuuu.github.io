// const style = document.createElement('style');
// style.innerHTML = `
//     .zoom-effect {
//         animation: zoom 0.5s ease-in-out;
//     }  
//     @keyframes zoom {
//         0% {
//         transform: scale(1);
//         }
//         50% {
//           transform: scale(1.03);
//         }
//         100% {
//           transform: scale(1);
//         }
//     }
// `;
// document.head.appendChild(style);

// function playCatSound() {
//     const catSound = document.getElementById('catSound');
//     catSound.play();

//     const catImg = document.getElementById('catImg');
//     catImg.classList.add('zoom-effect');

//     catImg.addEventListener('animationend', function() {
//     catImg.classList.remove('zoom-effect');
//     });
// }

// const catImg = document.getElementById('catImg');
// catImg.addEventListener('click', playCatSound);

// Existing style for zoom effect
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

function playCatSound() {
    const catSound = document.getElementById('catSound');
    catSound.play();

    const catImg = document.getElementById('catImg');
    catImg.classList.add('zoom-effect');

    catImg.addEventListener('animationend', function() {
        catImg.classList.remove('zoom-effect');
    });
}

const catImg = document.getElementById('catImg');
catImg.addEventListener('click', playCatSound);

catImg.addEventListener('mouseenter', () => {
    catImg.src = 'images/cat_hover.gif';
});

catImg.addEventListener('mouseleave', () => {
    catImg.src = 'images/cat_hover_reverse.gif';

    const reverseGifDuration = 1000;
    setTimeout(() => {
        catImg.src = 'images/cat.gif';
    }, reverseGifDuration);
});

