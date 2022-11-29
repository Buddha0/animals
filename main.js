
let dogButton  =  document.querySelector('.button-one');
let catButton  =  document.querySelector('.button-two');
let birdButton  =  document.querySelector('.button-three');




async function dog(){
  const data = await fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false")
  const response = await data.json();
document.getElementById('img-1').src = response
   
}

async function cats(){
    const data = await fetch("https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true")
    const response = await data.json();
  document.getElementById('img-2').src = response
     
  }

  async function birds(){
    const data = await fetch("https://shibe.online/api/birds?count=1&urls=true&httpsUrls=true")
    const response = await data.json();
  document.getElementById('img-3').src = response
     
  }

  dog()
  cats()
  birds()

dogButton.addEventListener('click', function(){
    dog()
})

catButton.addEventListener('click', function(){
    cats()
})

birdButton.addEventListener('click', function(){
    birds()
})
