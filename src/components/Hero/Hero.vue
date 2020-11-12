<template>
    <div id="hero" class="relative flex justify-between px-4 text-white md:px-12">
        <div class=" info">
            <img class=" info-header" src="../../assets/images/hero-header.png" alt="" />
            <div class="flex items-center">
                <div
                    class="flex flex-col items-center justify-center mb-4 text-xs font-bold uppercase border-2 top-box"
                >
                    top <span class="text-sm">10</span>
                </div>
                <div class="mt-3 ml-3 text-2xl">#7 in Movies Today</div>
            </div>
            <div class="hidden w-11/12 mt-6 text-xl font-light leading-6 md:inline">
                A devoted husband and father on his own for the weekend has his life turned inside
                out after giving shelter to two young women during a storm.
            </div>
            <div class="flex justify-between w-full">
                <div class="flex">
                    <div
                        class="flex items-center justify-center py-2 mt-8 font-semibold text-black bg-white rounded play"
                    >
                        <i class="fa fa-play" aria-hidden="true"></i
                        ><span class="pt-1 ml-3 text-lg">Play</span>
                    </div>
                    <div
                        class="flex items-center justify-center py-2 mt-8 ml-3 font-semibold text-white rounded more"
                    >
                        <i class="fa fa-info-circle" aria-hidden="true"></i
                        ><span class="ml-3 text-lg ">More info</span>
                    </div>
                </div>
                <div class="absolute flex items-center mt-8 rating">
                    <span class="ml-2">R</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#hero {
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 500px;
    background: linear-gradient(
            to bottom,
            rgba(65, 65, 65, 0.5) 0%,
            rgba(51, 34, 34, 0.14) 25%,
            rgba(#141414, 1) 100%
        ),
        url("https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2015/10/KnockKnock1.png?w=620&ssl=1");
    background-repeat: no-repeat;
    @include md {
        height: 784px;
        background-position: center;
        background: linear-gradient(
                to bottom,
                rgba(65, 65, 65, 0.5) 0%,
                rgba(255, 153, 153, 0.01) 55%,
                rgba(#141414, 1) 100%
            ),
            url("https://i.redd.it/cd93uto3tkm21.jpg");
        background-size: cover;
    }
}
.info {
    width: 514px;
    height: 420px;
    margin-top: 9rem;
    @include md {
        margin-top: 7.2rem;
    }
    .info-header {
        width: 200px;
        @include md {
            width: 410px;
        }
    }
    .top-box {
        line-height: 0.66rem;
        width: 32px;
        height: 34px;
        padding: 0.15em;
        margin-top: 1.55rem;
    }
    .play {
        width: 116px;
    }
    .more {
        @extend .play;
        width: 160px;
        background: #505051d5;
    }
    .rating {
        width: 55px;
        height: 40px;
        background: rgba(0, 0, 0, 0.478);
        border-left: 3px solid #dcdcdc;
        right: 0;
        @include md {
            width: 95px;
        }
    }
}
</style>
