<template>
    <div class="box-botao">
        <v-content class="texto">{{ categoria }}</v-content>
        <div class="icone">
            <a :href="link">
            
            <v-btn icon>
                <v-icon color="red">mdi-chevron-double-right</v-icon>
            </v-btn>
            
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categoria: undefined,
        link: undefined,
    },
};
</script>

<style scoped>
.box-botao {
    display: flex;
    border-color: red;
    border-width: 1px;
    border-style: solid;
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    align-items: center;
}
.texto {
    padding: 0px;
}
.icone > a {
    text-decoration: none;
}
</style>
