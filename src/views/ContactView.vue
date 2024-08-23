<template>
    <section class="inner-contact-sec">
      <div class="contact-h2-sec">
          <h2 class="contact-h2">Let's get in contact</h2>
      </div>
          <div class="contact-sec">
              <div class="form-sec">
                  <form action="https://formspree.io/f/mnnabbvv" method="POST" target="blank">
                  <label class="name">Your Name: <br><input type="name" name="name"></label>
                  <label class="name">Your Number: <br><input type="phone-number" name="phone-number"></label>
                  <label class="name">Your email: <br><input type="email" name="email"></label>
                  <label class="name">Your message: <br><textarea name="message"></textarea></label>
                  <div class="buttons">
                    <div class="reset">
                    <div class="reset">
                      <button type="reset" class="clear-btn">Clear</button>
                    </div>
                    <div class="submit">
                    </div>
                    <div class="submit">
                      <button type="submit" class="send-btn">Send</button>
                    </div>
                    </div>
                  </div>
                  </form>
              </div>
              <div class="contact-us-sec">
                  <h3 class="find-h3">Find us on</h3>
                  <div class="contact-us-inner-sec">
                         <div class="social-links">
                            <div class="social-images">
                                <div class="email-image"><img :src="emailSec" alt="CK" class="email-sec"/></div>
                                <div class="insta-image"><img :src="instaSec" alt="CK" class="insta-sec"/></div>
                                <div class="facebook-image"> <img :src="facebookSec" alt="CK" class="facebook-sec"/></div>
                                <div class="twitter-image"><img :src="twitterSec" alt="CK" class="twitter-sec"/></div>
                            </div>
                        <div class="social-text">
                            <div class="email-text">leLuxe@gmail.com</div>
                            <div class="insta-text">le_Luxe</div>
                            <div class="facebook-text">Le Luxe Offical</div>
                            <div class="twitter-text">le_luxeSA</div>
                        </div>
                    </div>
                    </div>
                  </div>
              </div>
    </section>
  </template>
  <script>
  export default {
      data(){
        return{
            emailSec: 'https://github.com/demilee06/Node-Images/blob/main/pixelcut-export.png?raw=true',
            instaSec: 'https://github.com/demilee06/Node-Images/blob/main/instagram%20(2).png?raw=true',
            facebookSec: 'https://github.com/demilee06/Node-Images/blob/main/facebook.png?raw=true',
            twitterSec: 'https://github.com/demilee06/Node-Images/blob/main/twitter.png?raw=true'
        }
      }
  }
  </script>
  <style scoped>
      .inner-contact-sec{
        background-image:  url(https://github.com/demilee06/Node-Images/blob/main/9153882-hd_2048_1080_30fps-ezgif.com-optimize.gif?raw=true);
        background-size: 100% 100%;
        background-repeat: repeat-x, repeat-y;
        height: 100%;
        margin-top: 3.9rem;
     }
      .contact-sec{
         display: grid;
         grid-template-columns: repeat(2, 1fr);
      }
      .contact-h2-sec{
         padding: 3rem;
      }
     .contact-h2{
         color: black;
         text-align: left;
         margin-left: 6vw;
         font-size: 2.4rem;
         font-weight: 700;
     }
     .form-sec{
         background-color: transparent;
         width: 30rem;
         height: auto;
         margin-left: 14vw;
         margin-bottom: 4rem;
      }
     .buttons{
         display: grid;
         grid-template-columns: repeat(2, 1fr);
      }
     .clear-btn, .send-btn{
         background-color: transparent;
         color: white;
         width: 6rem;
      }
      .name{
         color: black;
         font-weight: 700;
         margin-left: 0px;
         margin-bottom: 1rem;
      }
      
      
     textarea{
         width: 24rem;
         height: 200px;
         background-color: #ffffff;
         border: none;
     }
     form {
         padding: 1.3rem;
     }
 
     label {
         display: block;
         margin-bottom: 2rem;
         font-weight: bold;
     }
     input{
         background-color: #ffffff;
         height: 2rem;
         width: 24rem;
         border: none;
     }
     button {
         font-weight: 700;
         border: none;
         cursor: pointer;
     }
     button:hover {
         background-color: #d69868;
     }
     .name{
         width: 250px;
         margin-left: 25px;
         text-align: start;
     }
     .message{
         height: 200px;
         margin-bottom: 20px
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
     .email-text, .insta-text, .facebook-text, .twitter-text{
         color: white;
         padding: 1.6rem;
         margin-right: 1rem;
     }
     .email-image, .insta-image, .facebook-image, .twitter-image{
         padding: 1rem;
         margin-left: 2rem;
     }
     .insta-sec, .twitter-sec{
        width: 2rem;
    }
    .facebook-sec, .email-sec{
        width: 3rem;
    }
    form{
     padding: 0rem;
 }
     @media only screen and (max-width: 300px){
         .inner-contact-sec{
         background-size: 150% 100%;
         height: 100%;
         }
         .contact-sec{
         grid-template-columns: repeat(1, 1fr);
         }
         .contact-h2-sec{
         padding: 1rem;
         margin-bottom: 2rem;
         }
         .contact-h2 {
        text-align: left;
        font-size: 1.5rem;
        width: 300px;
        }
         .form-sec{
         width: 16rem;
         }
         input{
             width: 13rem;
         }
         textarea{
         width: 13rem;
         }
         .name{
         margin-left: 5px;
         }
         form{
         padding: 0rem;
         }
     }
  </style>