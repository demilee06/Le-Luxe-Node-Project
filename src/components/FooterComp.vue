<template>
  <footer>
      <div class="us">
          <div class="contact-us">
            <a href="/contact" class="contact-h2"><h2 class="contact-text">Contact Us</h2></a>
            <div class="contact-us-details">
              <h4 class="detail-text1">012 345 6789</h4>
              <h4 class="detail-text2">leLuxe@gmail.com</h4>
              <h4 class="detail-text3">314 Imam Haron Road <br>
              Lansdown 7764 <br>
              Cape Town</h4>
            </div>
          </div>
          <div class="follow-us">
              <h2 class="follow-us-h2">Follow Us</h2>
              <div class="social-links">
                <div class="social-images">
                    <div class="insta-image"><img :src="instaSec" alt="CK" class="insta-sec"/></div>
                    <div class="facebook-image"> <img :src="facebookSec" alt="CK" class="facebook-sec"/></div>
                    <div class="twitter-image"><img :src="twitterSec" alt="CK" class="twitter-sec"/></div>
                </div>
                <div class="social-text">
                    <div class="insta-text">le_Luxe</div>
                    <div class="facebook-text">Le Luxe Offical</div>
                    <div class="twitter-text">le_luxeSA</div>
                </div>
              </div>
            <div class="copyright-text">
                <h4>Copyright @ Le Luxe {{ new Date().getFullYear() }} | All Right Reserved</h4>
            </div>
          </div>
      </div>
  </footer>
</template>
<script>
export default {
  data(){
      return{
          instaSec: 'https://github.com/demilee06/Node-Images/blob/main/instagram%20(2).png?raw=true',
          facebookSec: 'https://github.com/demilee06/Node-Images/blob/main/facebook.png?raw=true',
          twitterSec: 'https://github.com/demilee06/Node-Images/blob/main/twitter.png?raw=true'
      }
  }
}
</script>
<style scoped>
  footer{
      background-color: #F5B583;
      height: 100%;
  }
  .us{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  h4{
    padding: 1rem;
    color: white;
  }
  .contact-us{
      padding: 3rem;
      text-align: start;
  }
  .contact-h2{
    color: white;
    text-decoration: none;
    text-align: start;
  }
  .contact-text{
    margin-left: 8rem;
    padding: 1rem;
  }
  .contact-us-details{
    text-align: start;
    margin-left: 9rem;
    padding: 1.2rem;
  }
  .detail-text1, .detail-text2{
    font-size: 1.1rem;
    padding: 0.4rem;
  }
  .detail-text3{
    font-size: 1.1rem;
    padding: 0.4rem;
  }
  .follow-us{
    padding: 3rem;
    text-align: center;
    background-color: #FFC79B;
  }
  .follow-us-h2{
    color: white;
    padding: 1rem;
  }
  .insta-text, .facebook-text, .twitter-text{
    color: white;
    padding: 1.4rem;
  }
  .insta-image, .facebook-image, .twitter-image{
    padding: 1rem;
  }
  .insta-sec, .twitter-sec{
      width: 2rem;
  }
  .facebook-sec{
      width: 3rem;
  }
  .copyright-text{
    margin-top: 2rem;
  }
  .copyright-text h4{
    color: black;
    font-size: 1rem;
  }
  .social-links{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }
  .social-images{
    text-align: end;
    margin-right: 2rem;
  }
  .social-text{
    text-align: start;
  }
  @media only screen and (max-width: 300px){
    .us{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    .contact-us{
        padding: 0rem;
        width: 100%;
    }
    .contact-h2{
      text-align: start;
      padding: 0rem;
      margin-top: 0.8rem;

    }
    .contact-text{
        margin-left: 0.8rem;
        padding: 0rem;
    }
    .contact-us-details{
        margin-left: 0rem;
        padding: 1rem;
    }
    .copyright-text h4{
        font-size: 1rem;
    }
    .follow-us{
      padding: 0rem;
    }
    .detail-text1, .detail-text2, .detail-text3{
    text-align: start;
  }
  .follow-us{
    padding: 0rem;
    text-align: start;
    background-color: #FFC79B;
    width: auto;
  }
  .follow-us-h2{
    color: white;
    padding: 1rem;
  }
  .insta-text, .facebook-text, .twitter-text{
    color: white;
    padding: 1.4rem;
    width: 100%;
  }
  .insta-image, .facebook-image, .twitter-image{
    padding: 1rem;
  }
  .insta-sec, .twitter-sec{
      width: 2rem;
  }
  .facebook-sec{
      width: 3rem;
  }
  .copyright-text{
    margin-top: 2rem;
    text-align: center;
  }
  .social-links{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0.5rem;
  }
  .social-images{
    text-align: end;
  }
  .social-text{
    margin-right: 3.9rem;
  }
  }
</style>