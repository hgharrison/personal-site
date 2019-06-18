<template>
    <v-container id="aboutme" fluid fill-height class="background-pic" style="max-height: 100vh;">
        <v-layout row>
            <v-flex fluid class="profile-pic" style="max-height: 100%">
            </v-flex>
            <v-flex fluid class="col-2" style="max-height: 100%" pl-4>
                <div class="headline font-weight-black black--text text-xs-left mb-3">About Myself</div>
                <p class="subheading mt-3">Hey there! I’m Hank, a 23 year old French-American software developer living in Austin.</p>
                <p class="subheading mt-3">Born in Cleveland and raised in Montbard and Houston, I've had the privilege of living abroad throughout the formative years of my life, and pursue schooling in both the French and American systems. I graduated from the Awty International School in Houston with an International Baccalaureate diploma, where I first learned how to program. I was roped into development after thinking that signing up for “computer science” meant I could escape an elective by enrolling in a class where I would learn Photoshop and After Effects – I was definitely wrong there. I pursued computer science in college at Baylor University, where I graduated from in the spring of 2018.</p>
                <p class="subheading mt-3">Since then, I’ve had the pleasure of working in Oracle’s cloud department in Austin, where you can catch me indoor rock climbing, spending unreasonable amounts of money on Cabo Bob’s burritos, or getting crossed out of my shoes at your local basketball court.</p>

            <GmapMap box-sizing="border-box;"
                    :center="{lat:43.2276, lng:4.0}"
                    :zoom="5"

                    style="max-width: 100%; height: 100vh"
            >

                <GmapMarker ref="myMarker"
                :position="google && new google.maps.LatLng(47.625, 4.3370)" />

            </GmapMap>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {gmapApi} from 'vue2-google-maps'

    export default {
        computed: {
            google: gmapApi
        },

        name: 'HomeDetails'
    };
</script>

<style scoped>
    .profile-pic {
        background: url('https://i.imgur.com/MAyJl9I.jpg');
        background-size: cover;
        width: 50%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    .col-2 {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    .background-pic{
        background-size: cover;
    }
</style>