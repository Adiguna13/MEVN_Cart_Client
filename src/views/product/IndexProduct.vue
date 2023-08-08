<template>
  <div>
    <h1>Product Page</h1>
    <div id="page-wrap">
      <div class="grid-wrap">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
        <!-- (1):product=(2)"product" -->
        <!-- (1) untuk di Product Item -->
        <!-- (2) product dari hasil perulangan v-for -->
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../../data-seed";
import ProductItem from "../../components/ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>
/*style ini hanya bisa digunakan dalam IndexProduct*/
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
