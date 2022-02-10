<template>
    <div class="pagina-produto">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <div class="titulo-produto">
            <h3>Alface crespa</h3>
        </div>
        <div class="corpo-produto">
            <div class="imagem-produto">
                <img
                    src="https://cdn.awsli.com.br/600x450/1304/1304561/produto/52600365/9e1e49db38.jpg"
                    alt="alface"
                />
            </div>
            <div class="side-botoes">
                <div class="valor-produto">
                    <h3>Valor</h3>
                    <h5>R$1,27 /unidade</h5>
                </div>
                <v-container>
                    <v-text-field
                        class="centered-input shrink mx-4"
                        v-model="foo"
                        type="number"
                        label="Qtd"
                        append-outer-icon="mdi-plus"
                        @click:append-outer="increment"
                        prepend-icon="mdi-minus"
                        @click:prepend="decrement"
                    ></v-text-field>
                </v-container>

                <v-btn
                    class="mx-1"
                    color="orange"
                    elevation="2"
                    medium
                    outlined
                    rounded
                    ><v-icon>mdi-basket</v-icon>Adicionar</v-btn
                >
            </div>
            <div class="botoes-produto"></div>
        </div>
        <div class="texto-pagina">
            <h3>Detalhes do produto</h3>
            <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaginaProd",

    data: () => ({
        items: [
            {
                text: "início",
                disabled: false,
                href: "/home",
            },
            {
                text: "produtos e serviços",
                disabled: false,
                href: "/produtosservicos",
            },
            {
                text: "hortaliças",
                disabled: false,
                href: "/produtosservicos/hortalicas",
            },
            {
                text: "produto",
                disabled: true,
                href: "",
            },
        ],
        foo: 0,
    }),
    methods: {
        increment() {
            this.foo = parseInt(this.foo, 10) + 1;
        },
        decrement() {
            this.foo = parseInt(this.foo, 10) - 1;
        },
    },
};
</script>

<style scoped>
.titulo-produto {
    padding-left: 23px;
}
img {
    max-width: 150px;
    max-height: 150px;
}
.corpo-produto {
    display: flex;
    padding: 30px;
}
.side-botoes {
    width: 40vw;
    text-align: left;
}
.side-botoes > .valor-produto {
    padding-left: 30px;
}
.centered-input >>> input {
    text-align: center;
}
.container {
    padding-top: 3px;
}
.texto-pagina {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(16, 248, 35);
    padding: 10px;
    margin: 20px;
    text-align: justify;
    border-left-width: 5px;
}
</style>