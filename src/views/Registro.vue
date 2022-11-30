<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <div style="width: 80%" class="registro">
            <h2>Cadastro</h2>
            

            <v-form @submit.prevent="cadastrar"
                class="registro-box"
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field 
                    v-model="cliente.nome" 
                    type = "text"
                    label="Nome" required>
                </v-text-field>
                <v-text-field
                    v-model="cliente.password"
                    type = "password"
                    label="Senha"
                    required
                >
                </v-text-field>
                <v-text-field
                    v-model="cliente.numeroTelefone"
                    type = "text"
                    label="Telefone"
                >
                </v-text-field>

                <v-text-field 
                    v-model="cliente.email" 
                    type = "text"
                    label="E-mail" 
                    required
                >
                </v-text-field>
                <v-text-field v-model="cliente.endereco" 
                type = "text"
                label="Endereço">
                </v-text-field>
                
            </v-form>
            <div class="botoes">
                <router-link to="/confirmacao">
                    <v-btn
                        class="botaoCadastrar"
                        color="orange"
                        elevation="2"
                        medium
                        outlined
                        rounded
                        @click="cadastrar"
                    >
                        Cadastrar
                    </v-btn>
                </router-link>
                <v-btn
                    class="botaoLimpar"
                    color="orange"
                    elevation="2"
                    medium
                    outlined
                    rounded
                    @click="limpar"
                >
                    Limpar
                </v-btn>
            </div>
            <br /><br />
        </div>
    </div>
</template>


<script>
import axios from "axios"
import Cliente from '../services/clientes'

export default {
    name: "Registro",

    data() {
        return {
            cliente:{
            nome: "",
            password: "",
            numeroTelefone: "",
            email: "",
            endereco: "",
           
        },

            items: [
                {
                    text: "início",
                    disabled: false,
                    href: "/home",
                },
                {
                    text: "entrar",
                    disabled: false,
                    href: "/login",
                },
                {
                    text: "cadastro",
                    disabled: true,
                    href: "",
                },
            ],
        };
    },


    methods: {
           cadastrar(){
            axios.post("http://localhost:8080/cliente",this.cliente)
            .then('cadastrado com sucesso');
          
        
        
        }, 
        
        
        limpar() {
            this.nome = "";
            this.numeroTelefone = "";
            this.password = "";
            this.email = "";
            this.endereco = "";
        },

       
    },
};


</script>

<style>
.registro {
    text-align: center;
    margin: auto;
    margin-top: 30px;
}
.registro-box {
    max-width: 100vw;
}
</style>