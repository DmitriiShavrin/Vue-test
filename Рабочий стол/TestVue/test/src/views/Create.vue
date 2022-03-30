<template>
  <div class="list">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12 pt-5 ps-5">
          <form @submit.prevent="$store.dispatch('add')">
            <h1 for="exampleFormControlInput1" class="form-label tc fs-3 mb-3">
              TEXT TEMPERATURE
            </h1>
            <div class="d-flex">
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="text temperature"
                required
                v-model="$store.state.temperature"
              />
              <button type="" class="btn btn-success ms-2 w">Create</button>
            </div>
          </form>
          <router-link to="/" class="btn btn-warning mt-4 w">Back</router-link>
          <p v-if="$store.state.success" class="text-success">
            {{ $store.state.success }}
          </p>
          <p v-else class="text-danger">{{ $store.state.error }}</p>
        </div>
        <div class="col-lg-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  components: {},
  updated() {
    console.log(this.$store.state);
  },
};
</script>

<style scoped lang="scss" >
.list {
  background-image: url("../assets/temperature.jpg");
  background-size: cover;
  height: calc(100vh - 74px);
  background-position: 50% 50%;
  position: relative;
};
.tc {
  color: rgb(21, 104, 21);
};
.w {
  width: 100px
}
</style>
