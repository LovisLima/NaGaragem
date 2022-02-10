<template>
    <div class="produtos-servicos">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <div class="titulo-pagina">
            <h3>Produtos e serviços</h3>
        </div>
        <br>
        <div class="subtitulo-categoria">
            <h4>Produtos alimentícios</h4>
        </div>

        <div class="box">
            <BotaoCategoria
            v-for="item in listaAlimenticios"
            :key="item.id"
            :categoria="item.categoria"
            :link="item.link"
            ></BotaoCategoria>
        </div>

        <div class="subtitulo-categoria">
            <h4>Produtos não-alimentícios</h4>
        </div>

        <div class="box">
            <BotaoCategoria
            v-for="item in listaNaoAlimenticios"
            :key="item.id"
            :categoria="item.categoria"
            :link="item.link"
            ></BotaoCategoria>
        </div>

        <div class="subtitulo-categoria">
            <h4>Serviços</h4>
        </div>

        <div class="box">
            <BotaoCategoria
            v-for="item in listaServicos"
            :key="item.id"
            :categoria="item.categoria"
            :link="item.link"
            ></BotaoCategoria>
        </div>

        <br>

    </div>
</template>

<script>
import BotaoCategoria from "../components/BotaoCategoria.vue";

export default {
    name: "ProdutosServicos",

    components: {
        BotaoCategoria,
    },
    data() {
        return {
            items: [
                {
                    text: "início",
                    disabled: false,
                    href: "/home",
                },
                {
                    text: "produtos e serviços",
                    disabled: true,
                    href: "",
                },
            ],
            listaAlimenticios: [
                {
                    id: '1',
                    categoria: 'Laticínios',
                    link: 'https://youtube.com'
                },
                {
                    id: '2',
                    categoria: 'Hortaliças',
                    link: '/produtosservicos/hortalicas'
                },
                
            ],
            listaNaoAlimenticios: [
                {
                    id: '1',
                    categoria: 'Móveis',
                    link: 'https://youtube.com'
                },
                
            ],
            listaServicos: [
                {
                    id: '1',
                    categoria: 'Manutenção',
                },
                
                
            ],
        };
    },
}
</script>

<style scoped>
    .titulo-pagina {
        padding-left: 23px;
    }
    .subtitulo-categoria{
        padding-top: 10px;
        padding-left: 23px;
    }

    .box{
        padding: 0px;
        margin: 0;
    }



</style>