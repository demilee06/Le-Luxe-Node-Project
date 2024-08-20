<template>
  <section class="inner-contact-sec">
    <div class="contact-h2-sec">
        <h2 class="contact-h2">Let's get in contact</h2>
    </div>
        <div class="contact-sec">
            <div class="form-sec">
                <form action="https://formspree.io/f/xzbnybjb" method="POST" target="blank">
                <br><br>
                <label class="name">Your Name: <br><input type="email" name="email"></label>
                <br>
                <label class="name">Your Number: <br><input type="number" name="number"></label>
                <br>
                <label class="name">Your email: <br><input type="email" name="email"></label>
                <br>
                <label class="name">Your message: <br><textarea name="message"></textarea></label>
                <br><br>
                <div class="buttons">
                    <button type="reset" class="clear-btn">Clear</button>
                    <button type="submit" class="send-btn">Send</button>
                </div>
                </form>
            </div>
            <div class="contact-us-sec">
                <h3>Find us on</h3>
            </div>
        </div>
  </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .inner-contact-sec{
        background-color: #cb997ec2;
        height: 100%;
    }
    .contact-sec{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /* padding: 4rem; */
        /* margin-top: 1rem; */
    }
    .contact-h2-sec{
        padding: 3rem;
    }
    .contact-h2{
        color: white;
        text-align: left;
        margin-left: 6vw;
        font-size: 2rem;
    }
    /* .form-sec{
        background-color: #f7f7f7;
        height: 22rem;
        width: 30rem;
    } */
    .form-sec{
        background-color: #F5B583;
        width: 30rem;
        height: 24rem;
        padding: 1.2rem;
        margin-left: 6vw;
        margin-bottom: 4rem;
    }
    .buttons{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .clear-btn, .send-btn{
        background-color: transparent;
        box-shadow: none;
        color: white;
        width: 6rem;
    }
    .name{
        color: white;
    }
    input{
        box-shadow: none;
    }
</style>