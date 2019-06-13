<template>
    <v-container fluid fill-height class="home-banner">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-left mb-3">HANK HARRISON</div>
            <div class="display-1 font-weight-bold white--text text-xs-left">Austin, TX</div>
            <div class="display-1">
                <a href="https://www.facebook.com/hank.harrison2" target="_blank"><img width="50" src="@/assets/facebook-color.png"></a>
                <a href="https://github.com/hgharrison" target="_blank"><img width="50" src="@/assets/github-color.png"></a>
                <a href="https://www.linkedin.com/in/hankharrison/"><img width="50" src="@/assets/linkedin-color.png"></a>
                <a href=mailTo:hank_harrison@baylor.edu><img width="50" src="@/assets/messages-color.png"></a>
            </div>
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