<template>
    <section class="inner-item-sec">
        <div v-for="product in products" :key="product.prodID">
            {{ product.prodName }}
        </div>
    </section>
</template>

<script>

export default {
    methods : {
      getProduct() {
          this.$store.dispatch('getProduct')
        },
    },
    mounted() {
            this.getProduct()
        }
}

</script>
<style scoped>
.inner-item-sec{
    margin-top: 4rem;
}
    .card{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
</style>