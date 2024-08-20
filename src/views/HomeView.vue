<template>
  <section class="inner-home-sect">
     <div class="carousel">
         <div class="text">
           <h1 class="text-h1">
             Indulge in <br>a world filled <br> with scents
           </h1>
           <h4 class="text-h4">with us, at Le Luxe</h4>
         </div>
         <div class="img">
           <!-- <img :src="picture" alt="CK" class="picture"/> -->
         </div>
     </div>

     <div class="h2-text">
       <h2>SHOP FOR HER OR HIM</h2>
     </div>
     
     <div class="him-her">
       <div class="her">
         <div class="them">
           <img :src="womenSec" alt="CK" class="women-sec"/>
         </div>
         <div class="them-text">
          <a href="/product">
            <h4>FOR HER</h4>
          </a>
         </div>
       </div>
       <div class="him">
         <div class="them">
           <img :src="menSec" alt="CK" class="men-sec"/>
         </div>
         <div class="them-text">
          <a href="/product" >
            <h4>FOR HIM</h4>
          </a>
         </div>
       </div>
     </div>

     <div class="h2">
       <h2>Some of our best selling items</h2>
     </div>

     <div class="products">
       <div class="product">
         <div class="product-img">
         <img :src="product1" alt="CK" class="product"/>
         </div>
         <div class="product-text">
          <a href="/product"><h4>VIEW MORE</h4></a>
         </div>
       </div>
       <div class="product">
         <div class="product-img">
         <img :src="product2" alt="CK" class="product"/>
         </div>
         <div class="product-text">
          <a href="/product"><h4>VIEW MORE</h4></a>
         </div>
       </div>
       <div class="product">
         <div class="product-img">
         <img :src="product3" alt="CK" class="product"/>
         </div>
         <div class="product-text">
          <a href="/product"><h4>VIEW MORE</h4></a>
         </div>
       </div>
     </div>
 </section>
</template>

<script>

export default {
 data() {
     return {
      //picture: 'https://demilee06.github.io/Node-Images/CocoChanel.jpg',
      womenSec: 'https://raw.githubusercontent.com/demilee06/Node-Images/main/women-sect.webp',
      menSec: 'https://raw.githubusercontent.com/demilee06/Node-Images/main/men-sec.webp',
      product1:'https://github.com/demilee06/Node-Images/blob/main/CocoChanel.jpg?raw=true',
      product2: 'https://github.com/demilee06/Node-Images/blob/main/Jean-Paul-Gaultier.jpg?raw=true',
      product3: 'https://github.com/demilee06/Node-Images/blob/main/Red%20Door.jpg?raw=true'
     }
   }
}
</script>

<style scoped>
 *{
   margin: 0;
 }
 .inner-home-sect{
   height: 100%;
   background-color: #FFBF69;
 }
 .carousel{
   display: grid;
   grid-template-columns: repeat(2, 1fr);
 }
 .picture{
   width: 30vw;
 }
 .text{
   background-color: #FFE8D6;
 }
 .text-h1{
   font-family: "Noto Serif", serif;
   font-weight: 590;
   font-size: 4rem;
   color: black;
   text-align: left;
   padding: 4rem;
 }
 .text-h4{
   font-family: "Noto Serif", serif;
   color: black;
   text-align: left;
   margin-left: 4rem;
 }
 .img{
   background-color: #F5B583;
 }
 .him-her{
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   filter: grayscale(50%);  
   transition: filter 0.4s;
 }
 .him-her:hover{
   filter: none;
 }
 .h2-text{
   font-family: "Noto Serif", serif;
   font-size: 2rem;
   color: black; 
   text-align: center;
   padding: 4rem;
 }
 .them-text{
   font-family: "Noto Serif", serif;
   font-weight: 400;
   font-size: 1rem;
   color: black;
   padding: 1rem;
 }
 .h2{
   font-family: "Noto Serif", serif;
   font-size: 2rem;
   color: black;
   text-align: center;
   padding: 4rem;
 }
 .products{
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   padding: 4rem;
 }
 .product{
  height: 20rem;
  border-radius: 4rem;
 }
 .product-text a{
  text-decoration: none;
 }
 .men-sec, .women-sec{
  border-radius: 40rem;
  width: 22rem;
  height: 20rem;
  /* margin-right: 15rem; */
 }

 @media screen and (max-width: 300px){
   .text-h1{
     font-size: 1rem;
     padding: 1rem;
   }
   .text-h4{
     font-size: 0.6rem;
     padding: 0rem;
     margin-left: 1.1rem;
     margin-bottom: 1rem;
   }
   .picture{
     width: 30vw;
   }
   .h2-text{
     font-size: 1rem;
     padding: 0.9rem;
   }
   .h2{
     font-size: 1rem;
     padding: 0.8rem;
   }
   .them-text{
     font-size: 0.6rem;
     padding: 0.3rem;
   }
 }
</style>
