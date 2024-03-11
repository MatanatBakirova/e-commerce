// {/* */}
        const productSection =document.querySelector('.product-section')
        window.addEventListener('load', getMelumatlariGetir)
        async function getMelumatlariGetir(){
          const unvan ='https://fakestoreapi.com/products'
            const cavab= await fetch(unvan)
            const frontEndeGeleceMelumatlar = await cavab.json()
            try{
            for(let i=0; i<20; i++){
           productSection.innerHTML+=`<div class="col-12 col-md-6 col-lg-3">
          <div class="card border-1 m-2">
          <i class="fa-regular fa-heart" onclick="addFavouriteList(this)"></i>
          <img
        src=${frontEndeGeleceMelumatlar[i].image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">${frontEndeGeleceMelumatlar[i].title}</h5>
        <span class="badge bg-warning">${frontEndeGeleceMelumatlar[i].category}</span>
        <p>${frontEndeGeleceMelumatlar[i].price} &#8380;</p> 
      </div>
  </div>
</div>`
console.log(frontEndeGeleceMelumatlar);}
          }
          catch(xeta){
            console.log(`Serverde Xeta Var ${xeta}`)
          }}
function addFavouriteList(element){
  element.classList.toggle('fa-regular')
  element.classList.toggle( 'fa-solid')

}