<template>
  <div>
    <h1>Detail Product</h1>
    <div id="page-wrap" v-if="product">
      <div id="img-wrap">
        <img :src="`http://localhost:8000${product.imageUrl}`" alt="" />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp. {{ product.price }}</h3>
        <p>Average rating: {{ product.averageRating }}</p>
        <button id="add-to-cart">Add to Cart</button>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <NotFound v-else />
  </div>
</template>

<script>
// import { products } from "../../data-seed";
import axios from "axios";
import NotFound from "../errors/NotFound";
export default {
  components: {
    NotFound,
  },
  data() {
    return {
      product: {},
    };
  },
  // computed: {
  //   product() {
  //     return this.products.find((p) => {
  //       return p.id === this.$route.params.id; //cari 1 data berdasarkan parameter id yg didapat dari url
  //     });
  //   },
  // },
  async created() {
    const code = this.$route.params.id; //id from components productitem params: { id: product.code }
    const result = await axios.get(
      `http://localhost:8000/api/products/${code}`
    );
    this.product = result.data; //product dari data() {}
    // console.log(this.product);
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
</style>
