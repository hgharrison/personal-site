<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-4" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="brown lighten-2" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down" @click="$vuetify.goTo('#aboutme')">About</v-btn>
            <v-btn flat class="hidden-sm-and-down">RESUME</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down">CONTACT</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
    export default {
        name: 'AppNavigation',
        data() {
            return {
                appTitle: 'Hank Harrison',
                drawer: false,
                items: [
                    { title: 'About' },
                    { title: 'Resume' },
                    { title: 'Contact' }
                ]
            };
        }
    };
</script>

<style scoped>
</style>