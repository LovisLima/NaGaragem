<template>
    <v-container>
        <div class="titulo-pagina">
            <h3>Início</h3>
        </div>
        <br />
        <div class="corpo-pagina">
            <v-carousel height="250px">
                <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                >
                </v-carousel-item>
                
            </v-carousel>
        </div>
        <br/>
    </v-container>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            items: [
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                    text: "noticia",
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
                    text: "noticia",
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
                    text: "noticia",
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                    text: "noticia",
                },
            ],
        };
    },
};
</script>

<style scoped>
.titulo-pagina {
    padding-top: 10px;
    padding-left: 23px;
}
</style>

