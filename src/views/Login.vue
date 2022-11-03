<template>
    <v-app>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <div style="width: 80%" class="login">
            <div class="login-form">
                <h2>Entrar</h2>
            </div>

            <v-form class="login-box" method="post" novalidate="true">
            <v-text-field  v-model="login_id" label="Usuário"  ref = "input-value" required>
                </v-text-field>

                <v-text-field  v-model="login_pass" label="Senha" input type="password" required>
                </v-text-field>
                
            </v-form>

            <div class="botoes" >
                <v-btn
                    @click="logar" 
                    color="orange"
                    elevation="2"
                    medium
                    outlined
                    rounded :disabled="!formValidate"
                    >Conectar</v-btn
                >
                <router-link to="/registro">
                    <v-btn color="orange" elevation="2" medium outlined rounded
                        >Cadastrar-se</v-btn
                    >
                </router-link>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    name: "Login",

    data() {
        return {
            login_id: "",
            login_pass: "",
            items: [
                {
                    text: "início",
                    disabled: false,
                    href: "/home",
                },
                {
                    text: "entrar",
                    disabled: true,
                    href: "",
                },
            ],
        };
    },
    methods: {
        logar() {
            let user = {
                nome: this.login_id,
                id: this.login_pass,
                autenticated: true,
            };
            this.$store.commit("logar", user);
            this.$router.push({ name: "Home" });
        },
    },

};
</script>

<style>
.login {
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
}
.login-box {
    max-width: 100%;
}
.botoes {
}
.botoes a {
    text-decoration: none;
}

/*required fields*/
input:required invalid{
    border-color: #FF0000;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
} 
</style>