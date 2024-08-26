<template>
  <section class="inner-product-sec">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="for-her-sec">
          <div class="upper-card">
            <div class="upper-text">
              <div class="text-h2">
                <h2 class="upper-card-text">
                  Embrace <br />
                  the Art of <br />
                  Seduction
                </h2>
              </div>
              <div class="text">
                <h5 class="text-h5">shop for Women</h5>
              </div>
            </div>
            <div class="upper-image">
              <img :src="forHerPicture" alt="CK" class="for-her-picture" />
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="for-him-sec">
          <div class="lower-card">
            <div class="lower-text">
              <div class="text-h2">
                <h2 class="lower-card-text">
                  Where <br />
                  Passion <br />
                  Meets <br />
                  Perfection
                </h2>
              </div>
              <div class="text">
                <h5 class="text-h5">shop for Men</h5>
              </div>
            </div>
            <div class="lower-image">
              <img :src="forHimPicture" alt="CK" class="for-him-picture" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="search-sort">
          <div class="sort-by-bar">
              <label for="Sort-by" class="sort">Sort By:</label>
              <select id="categoryFilter" v-model="selectedCategory">
                  <option value="">All Categories</option>
                  <option value="female perfume">Women</option>
                  <option value="male cologne">Men</option>
              </select>
          </div>
          <div class="search-bar">
              <div id="search-div">
                  <input type="text" id="searchInput" v-model="searchQuery" placeholder="Search...">
              </div>
          </div>
      </div>
      <div class="products" v-if="filteredProducts">
          <CardComp v-for="product in filteredProducts" :key="product.prodID" class="product-card">
                  <template #cardHeader>
                      <img :src="product.prodUrl" :alt="product.prodName" width="180rem" height="auto">
                  </template>
                  <template #cardBody>
                      <h4 class="product-name">{{ product.prodName }}</h4>
                      <p>Amount: {{ product.amount }}</p>
                      <button @click="addToCart()" >Purchase</button>
                      <button @click="$router.push(`/product/${product.prodID}`)">View More</button>
                  </template>
              </CardComp>
      </div>
      <div v-else>
          <SpinnerComp/>
      </div>
  </section>
</template>
<script>
import CardComp from '../components/CardComp.vue'
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
components: {
  CardComp,
  SpinnerComp
},
data() {
  return {
    forHerPicture: 'https://raw.githubusercontent.com/demilee06/Node-Images/main/upper-picture.webp',
    forHimPicture: 'https://github.com/demilee06/Node-Images/blob/main/lower-card.jpg?raw=true',
    searchQuery: '',
    selectedCategory: ''
  }
},
computed: {
      filteredProducts() {
          return this.$store.state.products.filter(product => {
          return product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
              (this.selectedCategory === '' || product.Catergory === this.selectedCategory)
          })
      }
  },
methods : {
    getProducts() {
        this.$store.dispatch('getProducts')
      },
      addToCart(){
          this.$store.dispatch('addToCart')
      },
      // purchaseAlert(prodName) {
      //     alert(`You have purchased ${prodName}`);
      // },
  },
  mounted() {
          this.getProducts()
  }
}

</script>

<style scoped>
.inner-product-sec {
background-color: #ffbf69;
margin-top: 3.9rem;
}
.for-her-sec,
.for-him-sec {
padding: 4rem;
}
.upper-card,
.lower-card {
display: grid;
grid-template-columns: repeat(2, 1fr);
background-color: #f5b583;
padding: 2rem;
align-items: center;
justify-content: center;
}

.upper-text,
.lower-text {
flex: 1 1 50%;
padding: 1rem;
}

.upper-card-text,
.lower-card-text {
color: black;
text-align: left;
font-weight: 800;
font-size: 3rem;
line-height: 3rem;
}

.text-h5 {
color: black;
text-align: left;
font-weight: 700;
padding: 1rem;
}

.for-her-picture,
.for-him-picture {
max-width: 100%;
height: auto;
flex: 1 1 50%;
}

.search-sort {
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 2rem;
}

#searchInput {
border: none;
background-color: #f7f6f5;
padding: 0.5rem;
}

#categoryFilter {
background-color: transparent;
border: none;
padding: 0.5rem;
}

.sort {
color: black;
font-weight: 800;
font-size: 1.3rem;
margin-right: 1rem;
}

.products {
display: flex;
flex-wrap: wrap;
gap: 3rem;
padding: 4rem;
justify-content: center;
}

.product-card {
flex: 1 1 300px;
max-width: 300px;
height: auto;
text-align: center;
padding: 1rem;
background-color: #dba073;
}

.product-image {
max-width: 100%;
height: auto;
}

button {
border: none;
padding: 0.5rem 1rem;
margin-top: 0.5rem;
background-color: #ffbf69;
color: white;
font-weight: bold;
cursor: pointer;
margin-left: 0.2rem;
}

button:hover {
background-color: #f5b583;
}
.carousel-control-prev, .carousel-control-next{
  background-color: transparent;
}
button[data-v-5ebb49ea]:hover {
  background-color: transparent;
}

@media (max-width: 768px) {
.upper-card-text,
.lower-card-text {
  font-size: 2rem;
  line-height: 2.5rem;
}

.search-sort {
  flex-direction: column;
  align-items: flex-start;
}

.products {
  padding: 2rem;
}

.for-her-sec,
.for-him-sec {
  padding: 2rem;
}
}

@media screen and (max-width: 300px) {
  .inner-product-sec {
    margin-top: 3.5rem;
}
  .upper-card, .lower-card {
  grid-template-columns: repeat(1, 1fr);
  }
.upper-card-text,
.lower-card-text {
  font-size: 1.5rem;
  line-height: 2rem;
}

.products {
  padding: 1rem;
}

.for-her-sec,
.for-him-sec {
  padding: 1rem;
}

.search-sort {
  padding: 1rem;
}
}
</style>