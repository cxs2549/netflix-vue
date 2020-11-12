<template>
    <div id="app">
        <svg-sprite></svg-sprite>
        <navbar></navbar>
        <hero class=""></hero>
        <cards class=""></cards>
        <footerbar class=""></footerbar>
    </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Cards from "./components/Cards/Cards"
import Footerbar from "./components/Footerbar/Footerbar"
export default {
    name: "App",
    components: { Navbar, Hero, Cards, Footerbar },
}
</script>

<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
}
</style>
