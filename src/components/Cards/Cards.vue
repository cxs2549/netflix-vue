<template>
    <div id="cards" class="flex flex-col">
        <wrapper title="My List" :images="myList"></wrapper>
        <wrapper title="Continue Watching for Cliff" :images="cw"></wrapper>
        <wrapper title="Popular on Netflix" :images="pop"></wrapper>
        <wrapper title="Trending" :images="trend"></wrapper>
        <wrapper title="Watch Again" :images="wa"></wrapper>
        <wrapper title="Familiar Favorites" :images="fam"></wrapper>
    </div>
</template>

<script>
import img1 from "../../assets/images/MyList/ml-1.jpg"
import img2 from "../../assets/images/MyList/ml-2.jpg"
import img3 from "../../assets/images/MyList/ml-3.jpg"
import img4 from "../../assets/images/MyList/ml-4.jpg"
import img5 from "../../assets/images/MyList/ml-5.jpg"
import img6 from "../../assets/images/MyList/ml-6.jpg"
import img7 from "../../assets/images/MyList/ml-7.jpg"
import img8 from "../../assets/images/MyList/ml-8.jpg"
import img9 from "../../assets/images/MyList/ml-9.jpg"
import img10 from "../../assets/images/MyList/ml-10.jpg"
import cw1 from "../../assets/images/ContinueWatching/cw-1.jpg"
import cw2 from "../../assets/images/ContinueWatching/cw-2.jpg"
import cw3 from "../../assets/images/ContinueWatching/cw-3.jpg"
import cw4 from "../../assets/images/ContinueWatching/cw-4.jpg"
import cw5 from "../../assets/images/ContinueWatching/cw-5.jpg"
import cw6 from "../../assets/images/ContinueWatching/cw-6.jpg"
import cw7 from "../../assets/images/ContinueWatching/cw-7.jpg"
import cw8 from "../../assets/images/ContinueWatching/cw-8.jpg"
import cw9 from "../../assets/images/ContinueWatching/cw-9.jpg"
import cw10 from "../../assets/images/ContinueWatching/cw-10.jpg"
import pop1 from "../../assets/images/Popular/pop-1.jpg"
import pop2 from "../../assets/images/Popular/pop-2.jpg"
import pop3 from "../../assets/images/Popular/pop-3.jpg"
import pop4 from "../../assets/images/Popular/pop-4.jpg"
import pop5 from "../../assets/images/Popular/pop-5.jpg"
import pop6 from "../../assets/images/Popular/pop-6.jpg"
import pop7 from "../../assets/images/Popular/pop-7.jpg"
import pop8 from "../../assets/images/Popular/pop-8.jpg"
import pop9 from "../../assets/images/Popular/pop-9.jpg"
import pop10 from "../../assets/images/Popular/pop-10.jpg"
import trend1 from "../../assets/images/Trending/trend-1.jpg"
import trend2 from "../../assets/images/Trending/trend-2.jpg"
import trend3 from "../../assets/images/Trending/trend-3.jpg"
import trend4 from "../../assets/images/Trending/trend-4.jpg"
import trend5 from "../../assets/images/Trending/trend-5.jpg"
import trend6 from "../../assets/images/Trending/trend-6.jpg"
import trend7 from "../../assets/images/Trending/trend-7.jpg"
import trend8 from "../../assets/images/Trending/trend-8.jpg"
import trend9 from "../../assets/images/Trending/trend-9.jpg"
import trend10 from "../../assets/images/Trending/trend-10.jpg"
import wa1 from "../../assets/images/WatchAgain/wa-1.jpg"
import wa2 from "../../assets/images/WatchAgain/wa-2.jpg"
import wa3 from "../../assets/images/WatchAgain/wa-3.jpg"
import wa4 from "../../assets/images/WatchAgain/wa-4.jpg"
import wa5 from "../../assets/images/WatchAgain/wa-5.jpg"
import wa6 from "../../assets/images/WatchAgain/wa-6.jpg"
import wa7 from "../../assets/images/WatchAgain/wa-7.jpg"
import wa8 from "../../assets/images/WatchAgain/wa-8.jpg"
import wa9 from "../../assets/images/WatchAgain/wa-9.jpg"
import wa10 from "../../assets/images/WatchAgain/wa-10.jpg"
import fam1 from "../../assets/images/Familiar/fam-1.jpg"
import fam2 from "../../assets/images/Familiar/fam-2.jpg"
import fam3 from "../../assets/images/Familiar/fam-3.jpg"
import fam4 from "../../assets/images/Familiar/fam-4.jpg"
import fam5 from "../../assets/images/Familiar/fam-5.jpg"
import fam6 from "../../assets/images/Familiar/fam-6.jpg"
import fam7 from "../../assets/images/Familiar/fam-7.jpg"
import fam8 from "../../assets/images/Familiar/fam-8.jpg"
import fam9 from "../../assets/images/Familiar/fam-9.jpg"
import fam10 from "../../assets/images/Familiar/fam-10.jpg"
import Wrapper from "./Wrapper"
export default {
    components: { Wrapper },
    data() {
        return {
            myList: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
            cw: [cw1, cw2, cw3, cw4, cw5, cw6, cw7, cw8, cw9, cw10],
            pop: [pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8, pop9, pop10],
            trend: [
                trend1,
                trend2,
                trend3,
                trend4,
                trend5,
                trend6,
                trend7,
                trend8,
                trend9,
                trend10,
            ],
            wa: [wa1, wa2, wa3, wa4, wa5, wa6, wa7, wa8, wa9, wa10],
            fam: [fam1, fam2, fam3, fam4, fam5, fam6, fam7, fam8, fam9, fam10],
        }
    },
}
</script>

<style lang="scss">
#cards {
    z-index: 1;
    height: auto;
    margin-top: 26rem;
    @include md {
        margin-top: 39.75rem;
    }
}
</style>
