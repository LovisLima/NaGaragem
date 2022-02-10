<template>
    <v-app>
        <AppTopBar />
        <v-main>
            <router-view />
        </v-main>
        <v-footer dark padless>
            <v-card flat tile class="green white--text text-center">
                <v-card-text>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4 white--text"
                        icon
                        :href="icon.link"
                    >
                        <v-icon size="24px">
                            {{ icon.src }}
                        </v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum
                    sit amet. Mauris cursus commodo interdum. Praesent ut risus
                    eget metus luctus accumsan id ultrices nunc. Sed at orci sed
                    massa consectetur dignissim a sit amet dui. Duis commodo
                    vitae velit et faucibus. Morbi vehicula lacinia malesuada.
                    Nulla placerat augue vel ipsum ultrices, cursus iaculis dui
                    sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
                    vel ut orci. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import AppTopBar from "./components/shared/AppTopBar.vue";

export default {
    name: "App",

    components: {
        AppTopBar,
    },

    data: () => ({
        icons: [
            {
                src: "mdi-facebook",
                link: "http://facebook.com",
            },
            {
                src: "mdi-twitter",
                link: "http://twitter.com",
            },
            {
                src: "mdi-linkedin",
                link: "http://linkedin.com",
            },
            {
                src: "mdi-instagram",
                link: "http://instagram.com",
            },
            
        ],
    }),
};
</script>

<style>
v-footer {
    width: 100vw;
}
</style>
