<template>
    <v-app>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <div class="titulo-pagina">
            <h3>Eventos</h3>
        </div>

        <v-container>
            <EventosCard
                v-for="evento in listaEventos"
                :key="evento.id"
                :titulo="evento.titulo"
                :subtitulo="evento.subtitulo"
                :imagem="evento.imagem"
                :endereco="evento.endereco"
                :horario="evento.horario"
            ></EventosCard>
        </v-container>
    </v-app>
</template>

<script>
import EventosCard from "../components/EventosCard.vue";
export default {
    name: "Eventos",
    components: {
        EventosCard,
    },
    methods: {},
    data() {
        return {
            listaEventos: [
                {
                    id: "1",
                    titulo: "Título",
                    subtitulo: "Subtítulo",
                    imagem: "https://paranaportal.uol.com.br/wp-content/uploads/2020/06/rsz_feira_livre.jpg",
                    endereco: "Taquaritinga",
                    horario: "15:30",
                },
                {
                    id: "2",
                    titulo: "Na Garagem",
                    subtitulo: "Projeto bacana",
                    imagem: "https://img.elo7.com.br/product/zoom/2D30323/paisagem-em-tela-casebre-e-rio-30x40-paisagem-em-tela-interior.jpg",
                    endereco: "Taquaritinga",
                    horario: "15:30",
                },
            ],
            items: [
                {
                    text: "início",
                    disabled: false,
                    href: "/home",
                },
                {
                    text: "eventos",
                    disabled: true,
                    href: "",
                },
            ],
        };
    },
};
</script>

<style scoped>
.titulo-pagina {
    padding-left: 23px;
}
</style>
