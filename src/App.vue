<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">MOONCAT STATS</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" @click.stop="toggleNavbar()">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText" v-bind:class="{ 'show': show }">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">ALL</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/coats">COATS</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/expressions">EXPRESSIONS</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/poses">POSES</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container-fluid">
                <div class="row mt-4">
                    <div class="col-12">
                    <router-view/>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    data() {
        return {
            show: false
        }
    },
    computed: {
        ...mapGetters([
            'getBlockNumber'
        ])
    },
    async mounted() {
        await this.$store.dispatch('getWeb3');
    },
    methods: {
        toggleNavbar() {
            this.show = !this.show
        }
    }
}
</script>