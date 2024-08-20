<template>
<section class="inner-product-sec">
    <div class="for-her-sec">
        <div class="upper-card">
            <div class="upper-text">
                <div class="text-h2">
                    <h2>Embrace the <br>Art of <br>Seduction</h2>
                </div>
                <div class="text-h5">
                    <h5>shop for Women</h5>
                </div>
            </div>
            <div class="upper-image">
                <img :src="forHerPicture" alt="CK" class="for-her-picture"/>
            </div>
        </div>
        <div class="search-sort">
            <div class="search-bar">
                <div id="search-div">
                    <input type="text" id="searchInput" placeholder="Search...">
                    <button id="searchButton">Search</button>
                </div>
            </div>
            <div class="sort-by-bar">
                <label for="Sort-by">Sort By: </label>
                <select id="categoryFilter">
                    <option value="">All Categories</option>
                    <option value="Price">Price: Min-Max</option>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                </select>
            </div>
        </div>
        <div class="her-products">

        </div>
    </div>
    <div class="for-him-sec">
        <div class="lower-card">
            <div class="lower-text">
                <div class="text-h2">
                    <h2>Where <br> Passion <br>Meets <br>Perfection</h2>
                </div>
                <div class="text-h5">
                    <h5>shop for Men</h5>
                </div>
            </div>
            <div class="lower-image"></div>
        </div>
        <div class="him-products"></div>
    </div>
</section>
</template>
<script>
export default {
    
}
</script>
<style>
    .inner-product-sec{
        background-color: #FFBF69;
        height: 100%;
    }
    .for-her-sec, .for-him-sec{
        padding: 4rem;
    }
   .upper-card, .lower-card{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #F5B583;
    height: 20rem;
    padding: 2rem;
   } 
   .text-h2{
    color: black;
    text-align: left;
    font-size: 2rem;
    padding: 1rem;
   }
   .text-h5{
    color: black;
    text-align: left;
    padding: 1rem;
   }
   .search-sort{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2.2rem;
   }
</style>