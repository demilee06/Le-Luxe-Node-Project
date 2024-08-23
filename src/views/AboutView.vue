<template>
  <section class="about-sec">
      <div class="inner-sec">
        <h1 class="welcome">Welcome to Le Luxe</h1>
        <div class="WWD">
           <div class="WWD-left">
             <h3 class="h3-text">Le Luxe: The Epitome of Refined Elegance</h3>
             <p class="p-text1">Le Luxe is a luxury lifestyle brand that embodies the essence
               of refined elegance and sophistication. Our mission is to provide our
               discerning clients with unparalleled service, exceptional quality, and
               unparalleled style. If high-end frangrances is what you're looking for, Le Luxe has got you covered.
               </p>
           </div>
           <div class="WWD-right"></div>
         </div>
        <div class="SOO">
         <div class="SOO-left"></div>
         <div class="SOO-right">
           <h3 class="h3-text">Our Story</h3>
           <p class="p-text2">Our story began with a passion for creating unique and
             exclusive fragrances that evoke the essence of luxury and sophistication.
             With a keen eye for detail and a commitment to excellence, we have
             established ourselves as a leading luxury lifestyle brand. Our fragrances
             are crafted with the finest ingredients and are designed to evoke the
             senses and transport you to a world of refinement and elegance.</p>
         </div>
        </div>
        <div class="feedback">
         <div class="inner-feedback">
         <h3 class="FB-h3-text">What Our Clients Say</h3>
         <div class="feedback-content">
             <div class="feedback-card">
                 <img :src="card" alt="User" class="card"/>
                 <h4 class="content-h4">Sophia M.</h4>
                 <p class="content-p">"Le Luxe is my go-to destination for 
                  all things fragrance! The packaging is also stunning, 
                  making every purchase feel like a special treat!"
                 </p>
             </div>
             <div class="feedback-card">
                 <img :src="card" alt="User" class="card"/>
                 <h4 class="content-h4">James R.</h4>
                 <p class="content-p">"I’ve been shopping at Le Luxe for years,
                   and it never disappoints."</p>
             </div>
             <div class="feedback-card">
                 <img :src="card" alt="User" class="card"/>
                 <h4 class="content-h4">Emily T.</h4>
                 <p class="content-p">"Le Luxe is a hidden gem for perfume lovers! 
                  The boutique is beautifully designed, and the atmosphere is so inviting." </p>
             </div>
             <div class="feedback-card">
                 <img :src="card" alt="User" class="card"/>
                 <h4 class="content-h4">David L.</h4>
                 <p class="content-p">"Every visit is a delight, 
                  from the elegant décor to the delightful scents that greet you as
                   soon as you walk in."</p>
             </div>
         </div>
         </div>
        </div>
        <div class="team">
          <h1>Meet the team</h1>
          <div class="team-inner">
          <div class="team-left">
            <div class="feedback-card">
                 <img :src="card" alt="User" class="card-team"/>
                 <h4 class="team-h4">Candice Keet</h4>
             </div>
          </div>
          <div class="team-right">
            <div class="feedback-card">
                 <img :src="card" alt="User" class="card-team"/>
                 <h4 class="team-h4">Chloe Almazien</h4>
             </div>
          </div>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
export default {
  name: 'AboutView',
  data(){
   return{
     card: 'https://github.com/demilee06/Node-Images/blob/main/user.png?raw=true'
   }
  }
}
</script>
<style scoped>
  .about-sec{
    background-image:  url(https://github.com/demilee06/Node-Images/blob/main/about%20gif.gif?raw=true);
    background-size: 100% 100%;
    background-repeat: repeat-x, repeat-y;
    background-size: cover;
    height: 100%;
    width: 100%;
    margin-top: 3.9rem;
    
  }
  .inner-sec{
    color: black;
  }
  .welcome{
   padding: 2rem;
   font-size: 2.5rem;
   font-size: 2.5rem;
  }
  .h3-text{
   padding: 0rem;
   text-align: center;
   margin-right: 4rem;
   font-weight: 600;
   font-size: 2rem;
   width: 100%;
  }
  .p-text1{
   padding: 1rem;
   text-align: start;
   margin-left: 8rem;
   font-size: 1.4rem;
   font-weight: 500;
  }
  .p-text2{
   padding: 1rem;
   text-align: start;
   font-size: 1.4rem;
   font-weight: 500;
  }
  .WWD, .SOO{
   display:grid;
   grid-template-columns: repeat(2, 1fr);
   padding: 1rem;
  }
  .feedback-content{
   display:grid;
   grid-template-columns: repeat(4, 1fr);
   padding: 2rem;
   margin-left: 8rem;
   }
   .feedback-card{
    text-align: center;
   }
  .card{
   border-radius: 20rem;
   width: 10rem;
   height: 10rem;
   text-align: center;
   background-color: transparent;
  }
  .content-h4{
    padding: 0.4rem;
    font-size: 1rem;
    margin-right: 12rem;
  }
  .content-p{
    font-size: 1rem;
    margin-right: 12rem;
    font-weight: 600;
  }
  .FB-h3-text{
    padding: 2rem;
    text-align: center;
    font-size: 2.5rem;
  }
  .team-inner{
    display: grid;
    grid-template-columns: repeat(2, 1fr)
  }
  .team-left{
    text-align: end;
    padding: 2rem;
  }
  .team-right{
    text-align: start;
    padding: 2rem;
  }
  .card-team{
    border-radius: 20rem;
   width: 10rem;
   height: 10rem;
   text-align: center;
   background-color: transparent;
  }
  .team-h4{
    padding: 1rem;
    font-size: 1.2rem;
  }
  
@media only screen and (max-width: 300px){
  .about-sec{
    background-size: cover;
    height: 100%;
    width: 100%;
  }
  .team-inner{
    grid-template-columns: repeat(1, 1fr)
  }
  .feedback-content{
   display:grid;
   grid-template-columns: repeat(1, 1fr);
   padding: 3rem;
   margin-left: 0.1rem;
   }
   .welcome{
   padding: 2rem;
   font-size: 1.5rem;
  }
  .WWD, .SOO{
   grid-template-columns: repeat(1, 1fr);
   padding: 0.2rem;
  }
  .h3-text{
   padding: 0rem;
   text-align: start;
   padding: 0.5rem;
   font-weight: 600;
   font-size: 1.4rem;
   width: 100%;
  }
  .p-text1{
   padding: 1rem;
   text-align: start;
   margin-left: 0.4rem;
   font-size: 1.4rem;
   font-weight: 500;
  }
  .content-h4{
    padding: 0.4rem;
    font-size: 1rem;
    margin-right: 2rem;
  }
  .content-p{
    font-size: 1rem;
    margin-right: 1rem;
    font-weight: 600;
    padding: 0.4rem;
  }
  .FB-h3-text{
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
  }
  .team-left{
    text-align: end;
    padding: 1rem;
  }
  .team-right{
    padding: 1rem;
  }
  }
</style>