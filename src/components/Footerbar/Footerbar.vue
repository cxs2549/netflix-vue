<template>
    <div id="footer" class="pb-4 mx-auto md:mx-40">
        <div class="flex justify-between w-11/12 mt-1 mb-6 text-3xl lg:w-3/12 socials">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-youtube" aria-hidden="true"></i>
        </div>
        <div>
            <ul class="grid justify-between w-full grid-cols-2 md:grid-cols-4">
                <li v-for="link in links" :key="link" class="mb-4 capitalize link ">{{ link }}</li>
            </ul>
        </div>
        <button class="pt-1 text-sm whitespace-no-wrap servicebtn">
            Service Code
        </button>
        <div class="pt-4 text-xs">
            &copy; 2020 SuperVision Design; 1997-2020 Netflix, Inc.
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                "audio and subtitles",
                "audio descriptions",
                "help center",
                "gift cards",
                "media center",
                "investor relations",
                "jobs",
                "terms of use",
                "privacy",
                "legal notices",
                "cookie preferences",
                "corporate information",
                "contact us",
            ],
        }
    },
}
</script>

<style>
#footer {
    margin-top: 1rem;
    display: grid;
    color: #808080;
    grid-template-rows: auto auto auto 33px;
    font-size: 13px;
}

.servicebtn {
    width: 93px;
    height: 30px;
    border: 1px solid #808080;
    margin-top: 8px;
    margin-bottom: 8px;
}
</style>
