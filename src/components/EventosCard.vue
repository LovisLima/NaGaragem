<template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-img :src="imagem" height="220px"></v-img>

      <v-card-title> {{ titulo }} </v-card-title>

      <v-card-subtitle>
        {{ subtitulo }}
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="show = !show">
          Ver Detalhes
        </v-btn>

        <v-btn icon @click="show = !show">
          <v-icon color="red">{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            <span> <strong>Endereço:</strong> {{ endereco }} </span>
            <br />
            <span> <strong>Horário: </strong> {{ horario }} </span>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  methods: {
    
  },
  props: {
    titulo: undefined,
    subtitulo: undefined,
    imagem: undefined,
    endereco: undefined,
    horario: undefined,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
</style>