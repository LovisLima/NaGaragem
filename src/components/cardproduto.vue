<template>
  <v-container fluid>
    
  
          <v-card max width="180px">
            <v-img
              :src="src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="180px"
              width="180px"
            >
              <v-card-title :v-text="title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
    </v-container>
</template>

<script>
export default {
  methods: {
    
  },
  props: {
    title: undefined,
    flex: undefined,
    src: undefined,

  },
 
};
</script>

<style>
</style>