<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <div class="titulo-pagina1">
            <h3>Sobre</h3>
        </div>
        <br />

        <div class="texto-pagina">
            <h4>
                O Coletivo “NaGaragem” foi criado visando a aproximação e
                estreitamento de laços com a comunidade local, e desse
                sentimento surgiu a primeira feira de garagem, evento que além
                de proporcionar a proximidade entre as pessoas, favoreceu os
                pequenos produtores, a economia local e doméstica, que esteve no
                espaço reservado oferecendo seus produtos à Comunidade..
            </h4>
            <div class="img">
                <img height="125px" width="125px" src="../assets/teste.png" />
            </div>
        </div>

        <div class="texto-pagina">
            <h4>
                Criado com o objetivo de permitir a divulgação com antecedência
                dos produtos que estarão disponíveis no próximo evento, e até
                mesmo permitir a reserva de produtos para retirada no evento, o
                Coletivo “NaGaragem” desenvolveu o Gôndola Web App que é um
                aplicativo de e-commerce que busca aumentar o fluxo comercial e
                informacional entre os seus usuários.
            </h4>
            <div class="img">
                <img height="125px" width="125px" src="../assets/cesta1.png" />
            </div>
        </div>

        <br />
    </div>
</template>

<script>
export default {
    name: "sobre",
    data: () => ({
      items: [
        {
          text: 'início',
          disabled: false,
          href: '/home',
        },
        {
          text: 'sobre',
          disabled: true,
          href: '',
        },
      ],
    }),
};
</script>

<style scoped>
.titulo-pagina {
    padding-top: 10px;
    padding-left: 23px;
    margin: 10px;
    align-content: center;
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

.img {
    display: flex;
    justify-content: flex-end;
}
.titulo-pagina > .img {
    margin: 0 auto;
}
.titulo-pagina1 {
    padding-left: 23px;
}
.img {
    display: flex;
    justify-content: flex-end;
}

</style>


