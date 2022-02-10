<template>
    <v-app>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <div class="titulo-pagina">
            <h3>Hortaliças</h3>
        </div>
      <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card :to="card.prodpag">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            
            </v-img>
              <div class="texto-card">
                <h3 >{{card.title}}</h3><h4>R$ {{card.preco}}</h4>
              </div>
            <v-card-actions>
              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-app>
    </template>

<script>
  
  export default {

    data: () => ({
      cards: [
        { title: 'Alface Crespa', src: 'https://cdn.awsli.com.br/600x450/1304/1304561/produto/52600365/9e1e49db38.jpg', preco: '1,27/unid.',flex:6 , prodpag: '/produtosservicos/hortalicas/produto1'},
        { title: 'Rabanete', src: 'https://www.infoescola.com/wp-content/uploads/2010/09/rabanete_643139416.jpg', preco: '4,00/kg',flex:6 },
        { title: 'Cenoura', src: 'https://cdn.brasildefato.com.br/media/ad2c58c8688e2110a024bfb8e57b0b72.jpg', preco: '4,00/kg',flex:6 },
        
      ],
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
                    disabled: true,
                    href: "",
                },
            ],
    }),
  }
</script>

<style scoped>
    .titulo-pagina {
        padding-top: 10px;
        padding-left: 23px;
    }
    .boxprodutos {
      display: flex;
      flex-wrap: wrap ;
      padding: 0%;
    }
    .texto-card {
      padding-top: 5px;
      padding-left: 10px;
    }
</style>
