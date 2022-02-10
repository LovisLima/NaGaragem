<template>
    <v-app>
        <div class="titulo-pagina">
            <h3>produtos</h3>
        </div>
   
      
  
      <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
             
            </v-img>
                <h3>{{card.title}}</h3><h4>R$ {{card.preco}}</h4>
            <v-card-actions>
              <v-spacer></v-spacer>
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
        { title: 'Banana', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', preco: '4,00',flex:6 },
        { title: 'Maçã', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', preco: '4,00',flex:6 },
        { title: 'Chumbinho', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', preco: '4,00',flex:6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', preco: '4,00',flex:6 },
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
</style>
