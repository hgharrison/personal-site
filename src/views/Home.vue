<template>
    <span>
        <home-banner></home-banner>
        <home-details></home-details>
    </span>
</template>

<script>
    import HomeBanner from '@/components/HomeBanner';
    import HomeDetails from '@/components/HomeDetails';
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        name: 'home',
        components: {
            HomeBanner,
            HomeDetails,
            Carousel,
            Slide
        }
    };
</script>
