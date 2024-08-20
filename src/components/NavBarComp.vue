<template>
    <div class="fixed-top">
        <nav class="navbar">
            <div class="f-nav">
                <router-link to="/">Home</router-link> 
                <router-link to="/product">Our Products</router-link>
            </div>
            <div class="s-nav">
                <router-link to="/">Home Logo</router-link>
            </div>
            <div class="t-nav">
                <router-link to="/about">About Us</router-link>
                <router-link to="/contact">Contact Us</router-link>
                <router-link to="/admin">Admin</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:'NavbarComp'
}
</script>

<style>
.navbar{
    background-color: #CB997E;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    /* z-index: 1; */
}
.f-nav{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.t-nav{
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    text-align: left;
}
nav {
    height: 5rem;
}

nav a {
    font-weight: bold;
    font-size: 20px;
    color: black;
    text-decoration: none;
    padding: 1.3rem;
}

nav a.router-link-exact-active {
    color: #ffc400;
    /* text-decoration: underline; */
}

</style>