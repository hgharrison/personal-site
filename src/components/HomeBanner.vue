<template>
    <v-container fluid fill-height class="home-banner">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-left mb-3">HANK HARRISON</div>
            <div class="display-1 font-weight-bold white--text text-xs-left">Austin, TX</div>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'HomeBanner'
    };
</script>

<style scoped>
    .home-banner {
        background: url('https://i.imgur.com/JD4flPC.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
    }
</style>