<template>
    <nav
        class="flex items-center justify-between px-4 md:px-12"
        :style="scrolled && 'background: #141414;'"
    >
        <div class="flex items-center justify-between">
            <img src="../../assets/images/logo.png" class="mr-4 md:mr-6 logo" alt="" />
            <div
                @click="toggle"
                class="relative flex items-center text-sm text-white cursor-pointer browse xl:hidden"
            >
                <span class="mr-2">Browse</span> <i class="fa fa-caret-down" aria-hidden="true"></i>
                <div v-show="drop" class="absolute rounded-lg text-md drop">
                    <ul>
                        <li
                            v-for="link in links"
                            :key="link"
                            :class="link === 'home' && 'active'"
                            class="hover:text-white"
                        >
                            {{ link }}
                        </li>
                       
                    </ul>
                </div>
            </div>
            <div class="flex ml-5 links">
                <ul class="flex">
                    <li
                        v-for="link in links"
                        :key="link"
                        class="mr-5 text-sm capitalize"
                        :class="link === 'home' && 'active'"
                    >
                        {{ link }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex items-center justify-between text-white md:mr-2 right-half">
            <div class="items-center hidden ml-8 content md:flex">
                <div class="search">
                    <input
                        type="text"
                        class="text-lg search__input"
                        aria-label="search"
                        placeholder="Search Netflix"
                    />

                    <button class="mr-2 border search__submit md:mr-0" aria-label="submit search">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="hidden ml-2 text-sm lg:inline">DVD</div>
            </div>
            <div class="hidden md:inline"><i class="fa fa-gift" aria-hidden="true"></i></div>
            <div class="hidden md:inline"><i class=" fa fa-bell" aria-hidden="true"></i></div>
            <div class="flex items-center ml-4 md:ml-0">
                <input type="text" placeholder="Search" class="w-8/12 pl-2 mt-2 text-sm bg-transparent border-b outline-none md:hidden">
                <div class="md:hidden">
                    <i class="fa fa-search " aria-hidden="true"></i>
                </div>
                <img src="../../assets/images/ava.png" class="ml-6 rounded md:ml-0 md:mr-2" alt="" />
                <div class="hidden text-md md:block">
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: ["home", "TV shows", "movies", "latest", "my list"],
            scrolled: false,
            drop: false,
        }
    },

    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0
        },
        toggle() {
            this.drop = !this.drop
        },
    },
    created() {
        window.addEventListener("scroll", this.handleScroll)
    },
}
</script>

<style scoped lang="scss">
nav {
    position: fixed;
    width: 100%;
    height: 68px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0));
    z-index: 100;
    transition: background 250ms ease-in-out;
    @include md {
        background: none;
    }
}
.links {
    display: none;
    width: auto;
    color: rgba(209, 209, 209, 0.699);
    @include xl {
        display: block;
    }
}
.active {
    color: white;
}
.right-half {
    width: auto;
    @include md {
        width: 470px;
    }
    @include lg {
        width: 475px;
    }
    @include xl {
        width: 550px;
    }
    font-size: 1.25rem;
}
.logo {
    max-width: 92px;
    @include md {
        max-width: 122px;
    }
}
.content {
    position: relative;
    width: 50vw;
    @include sm {
        width: 25vw;
    }
}
.search {
    grid-area: search;
    --size: 36px;
    margin-bottom: 0.5rem;
    /* border: 1px solid white; */
    display: flex;
    border-radius: 100px;
    overflow: hidden;
    font-size: 1em;
    position: relative;
    width: var(--size);
    height: var(--size);
    margin-left: auto;
    transition: width 450ms ease;
    padding: 3px;
    align-items: center;
    @include tablet {
        width: 100%;
        margin-bottom: 0;
    }
}
.search__input {
    border: 0;
    border-bottom: 1px solid white;
    padding-left: .25em;
    flex-grow: 1;
    padding-top: 5px;
    outline: 0;
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1rem;
    border-radius: 0;
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    font-size: 0.85rem;
    background: transparent;
    color: white;
    cursor: pointer;
    @include md {
        opacity: 1;
    }
}
.search__submit {
    font-size: 1.2rem;
    margin-left: auto;
    background: 0;
    border: 0;
    cursor: pointer;
    /* border-radius: 50%; */
    transition: background 200ms ease-out;
    /* width: calc(var(--size) - 5px); */
    height: calc(var(--size) - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3px;
}

.search:focus-within {
    width: 100%;
    .search__input {
        opacity: 1;
        z-index: initial;
        cursor: initial;
        width: calc(100% - var(--size));
        background: transparent;
    }

    .search__submit {
        color: white;

        &:hover,
        &:focus {
            outline: 0;
        }
    }
}
.fa,
.fa-search {
    margin-top: 4.5px;
    @include md {
        margin-bottom: 7px;
        margin-right: 3px;
    }
    @include lg {
        margin-bottom: 4px;
        margin-right: 1rem;
    }
}
.drop {
    background: rgba(0, 0, 0, 0.788);
    padding: 1em 5em;
    text-transform: capitalize;
    right: -4.25rem;
    top: 1.5rem;
    text-align: center;
    color: rgba(209, 209, 209, 0.699);

    ul li {
        margin-bottom: 1rem;
        white-space: nowrap;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
