<template>
  <div id="card" class="flex justify-center border rounded">
      <div class="border rounded img-wrap">
          <img :src="image" alt="" class="rounded">
      </div>
  </div>
</template>

<script>
export default {
props: ["image"]
}
</script>

<style>
#card {
    height: 122px;
    width: 216px;
}
.img-wrap {
    width: 216px;
    height: 122px;
}
</style>