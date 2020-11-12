<template>
    <div class="mb-10">
        <div class="mb-2 ml-4 font-semibold text-white md:text-xl md:ml-12">
            {{ title }}
        </div>
        <div class="flex h-full overflow-x-scroll overflow-y-hidden">
            <div id="card" class="mr-2 rounded" v-for="image in images" :key="image">
                <div class="ml-4 rounded md:ml-12 img-wrap">
                    <img  :src="image" alt="" class="rounded" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "images"],
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
