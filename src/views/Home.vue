<template>
    <span>
        <home-banner></home-banner>
        <home-details></home-details>
    </span>
</template>

<script>
    import HomeBanner from '@/components/HomeBanner';
    import HomeDetails from '@/components/HomeDetails';

    export default {
        name: 'home',
        components: {
            HomeBanner,
            HomeDetails
        }
    };
</script>