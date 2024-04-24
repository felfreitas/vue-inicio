<script lang="ts">
import BotaoPrincipal from './BotaoPrincipal.vue';

export default {
    components:{BotaoPrincipal},
    props:{
        receitas: {type: String, required:true}
    },
    emits:['buscarReceitas']
}
</script>


<template >
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">
            Ingredientes
        </h1>
        <span>inserir um count aqui: </span>
        <p class="paragrafo-lg instrucoes">
            Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
        </p>


        <ul class="categorias">
            <!-- <li v-for="categoria in categorias" :key="categoria.nome">

                <CardCategoria :categoria="categoria" @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
                    @remover-ingrediente="$emit('removerIngrediente', $event)" />


            </li> -->
            <li>{{receitas}}</li>
        </ul>

      

        <BotaoPrincipal texto="Editar lista" @click= "$emit('buscarReceitas')" />
      

    </section>
</template>

<style scoped>
    
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}



@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>