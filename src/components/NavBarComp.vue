<template>
  <div class="fixed-top">
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" id="offcanvasNavbar">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <router-link to="/" class="nav-link"><img :src="logo" alt="CK" class="logo"/></router-link>
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="navbar-nav">
              <div class="f-nav">
                  <router-link to="/" class="nav-link" @click="closeNavbar">Home</router-link>
                  <router-link to="/product" class="nav-link" @click="closeNavbar">Our Products</router-link>
              </div>
              <div class="s-nav">
                  <router-link to="/" class="nav-link" @click="closeNavbar"><img :src="logo" alt="CK" class="logo"/></router-link>
              </div>
              <div class="t-nav">              
                <router-link to="/about" class="nav-link" @click="closeNavbar">About Us</router-link>
                <router-link to="/contact" class="nav-link" @click="closeNavbar">Contact Us</router-link>
                <router-link to="/admin" class="nav-link" @click="closeNavbar">Admin</router-link></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBarComp',
  data() {
    return {
      logo:'https://github.com/demilee06/Node-Images/blob/main/logo%20(1).png?raw=true'
    }
  },
  methods: {
    closeNavbar() {
      document.getElementById('offcanvasNavbar').classList.remove('show');
    }
  }
}
</script>

<style>
.offcanvas-body {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 20px;
  background-color: #CB997E;
}

.offcanvas-body a {
  font-weight: bold;
  font-size: 18px;
  color: black;
  text-decoration: none;
  padding: 10px;
}

.offcanvas-body a.router-link-exact-active {
  color: #ffc400;
  transition-duration: 2sec;
}
.navbar{
  background-color: #CB997E;
  width: 100%;
}
.navbar-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}
.navbar-expand-sm .navbar-nav .nav-link {
  padding-right: 20px;
  padding-left: 20px;
}
.logo{
  width: 1rem;
}
.f-nav{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.t-nav{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.navbar-nav .nav-link {
  padding-right: 1rem;
  padding-left: 1rem;
}

nav a {
  font-weight: bold;
  font-size: 20px;
  color: black;
  text-decoration: none;
  padding: 1.3rem;
}
/* .offcanvas-body .f-nav a, .offcanvas-body .s-nav a, .offcanvas-body .t-nav a {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
} */
/* 
.offcanvas-body .f-nav, .offcanvas-body .s-nav, .offcanvas-body .t-nav {
  display: block;
  grid-template-columns: none;
} */
/* .offcanvas-body .s-nav {
  display: none;
} */
@media screen and (max-width: 300px) {
  .offcanvas-body a {
  font-size: 14px;
  padding: 0rem;
}
  .navbar-nav {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  /* width: 100%; */
  height: auto;
  }
  .s-nav{
    display: none;
  }
  .f-nav{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
.t-nav{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
nav a {
  font-weight: bold;
  font-size: 20px;
  color: black;
  text-decoration: none;
  padding: 1rem;
}
.offcanvas-header{
  background-color: #8d6149;
}
  /* .offcanvas-body .f-nav a, .offcanvas-body .s-nav a, .offcanvas-body .t-nav a {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
} */
}
</style>