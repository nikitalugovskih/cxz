// const button = document.querySelector('div');
// const input = document.querySelector('#inputfield');

// button.addEventListener('click', () => {
//     input.classList.add('open')
// });


const button = document.getElementById('right');
const eventButton = document.getElementById('left');
const cont = document.getElementById('first_note-img');
const news = document.getElementById('news');
const news2 = document.getElementById('news2')

right.addEventListener('click', (event) => {
    news2.style.display = 'flex'
    news2.style.animation = 'fade 0.5s ease-in-out'
    news.style.display = 'none'
})

left.addEventListener('click', (event) => {
    news.style.display = 'flex'
    news.style.animation = 'fade 0.5s ease-in-out'
    news2.style.display = 'none'
})


function myFunction(x) {
    if (x.matches) { 
      news.style.display = "flex";
      news.style.animation = 'fade 0.5s ease-in-out';
      news.style.flexDirection = 'row';
      news.style.flexWrap = 'wrap';
      news.style.justifyContent = 'center';
      news2.style.display = 'none';

      news2.style.display = "flex";
      news2.style.animation = 'fade 0.5s ease-in-out';
      news2.style.flexDirection = 'row';
      news2.style.flexWrap = 'wrap';
      news2.style.justifyContent = 'center';
      news.style.display = 'none';
    } else {
        
    }
  }

  function phoneFunc(c) {
    if (c.matches) {
        news.style.display = "flex";
        news.style.animation = 'fade 0.5s ease-in-out';
        news.style.flexFlow = 'no wrap';
        news2.style.display = 'none';
  
        news2.style.display = "flex";
        news2.style.animation = 'fade 0.5s ease-in-out';
        news2.style.flexFlow = 'no wrap';
        news.style.display = 'none';

    }
  }
  
  let x = window.matchMedia("(max-width: 700px)")
  myFunction(x)
  x.addListener(myFunction)

  let c = window.matchMedia('(max-width: 1024px)')
  phoneFunc(c)
  c.addListener(phoneFunc)