<template>
    <div class="app-top-bar">
        <v-app-bar color="green" dense dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Gondola App</v-toolbar-title>

            <v-spacer></v-spacer>

            <router-link v-if="autenticated" to="/cesta">
                <template>
                    <v-btn icon>
                        <v-icon>mdi-basket</v-icon>
                    </v-btn>
                </template>
            </router-link>
            <router-link v-else to="/login">
                <template>
                    <v-btn icon>
                        <v-icon>mdi-basket-off</v-icon>
                    </v-btn>
                </template>
            </router-link>

            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="green">
                    <!-- Título do projeto -->
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            Gondola App
                        </v-list-item-title>
                        <!-- Subtítulo -->
                        <v-list-item-subtitle>
                            Grupo Na Garagem
                        </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-divider></v-divider>

                    <router-link to="/home">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Início</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/eventos">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-calendar</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Eventos</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/produtosservicos">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-lightbulb</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                >Produtos e serviços</v-list-item-title
                            >
                        </v-list-item>
                    </router-link>

                    <router-link to="/sobre">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-progress-question</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                >Sobre o Projeto</v-list-item-title
                            >
                        </v-list-item>
                    </router-link>

                    <router-link v-if="autenticated" to="/login">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Perfil</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link v-else to="/login" >
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                >Entre ou Cadastre-se</v-list-item-title
                            >
                        </v-list-item>
                    </router-link>

                    <v-divider></v-divider>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "AppTopBar",
    data: () => ({
        collapseOnScroll: true,
        drawer: false,
        group: null,
        autenticated: false,
    }),
    mounted() {
        this.autenticated = this.$store.state.user.autenticated;
    },
};
</script>

<style scoped>
.app-top-bar a {
    text-decoration: none;
}
</style>