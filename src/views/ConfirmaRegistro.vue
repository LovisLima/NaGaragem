<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <div class="confirma-email">
            <div class="titulo-pagina">
                <h2>Registro Concluído!</h2>
            </div>
            <div class="imagem">
                <img
                    src="../assets/Emails-amico.png"
                    alt="Confirmação de email"
                />
            </div>
            <div class="subtitulo-pagina">
                <h4>Cheque sua caixa de e-mail!</h4>
            </div>
            <br />
        </div>
    </div>
</template>

<script>
export default {
    name: "ConfirmaRegistro",
    data: () => ({
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
    }),
};
</script>

<style scoped>
.confirma-email {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.confirma-email > .imagem > img {
    max-width: 200px;
}
</style>