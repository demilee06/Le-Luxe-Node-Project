<template>
    <footer>
        <div class="us">
            <div class="contact-us">
                <h2>Contact Us</h2>
                <h4>012 345 6789</h4>
                <h4>leLuxe@gmail.com</h4>
                <h4>314 Imam Haron Road <br>
                Lansdown 7764 <br>
                Cape Town</h4>
            </div>
            <div class="follow-us">
                <h2>Follow Us</h2>
                <div class="social-links">
                    <div class="insta">
                        <div class="insta-image">
                            <img :src="insta-sec" alt="CK" class="insta-sec"/>
                        </div>
                        <div class="insta-text">le_Luxe</div>
                    </div>
                    <div class="facebook">
                        <div class="facebook-image">
                            <img :src="facebook-sec" alt="CK" class="facebook-sec"/>
                        </div>
                        <div class="facebook-text">Le Luxe Offical</div>
                    </div>
                    <div class="twitter">
                        <div class="twitter-image">
                            <img :src="twitter-sec" alt="CK" class="twitter-sec"/>
                        </div>
                        <div class="twitter-text">le_luxeSA</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-text">
            <h4>Copyright @ Le Luxe {{ new Date().getFullYear() }} | All Right Reserved</h4>
        </div>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            instaSec: '',
            facebookSec: '',
            twitterSec: ''
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
        color: black;
    }
    .contact-us{
        padding: 3rem;
        text-align: left;
        margin-left: 10rem;
        color: white;
    }
    .follow-us{
        padding: 3rem;
        text-align: left;
        margin-left: 10rem;
        color: white;
        background-color: #FFC79B;
    }
    
</style>