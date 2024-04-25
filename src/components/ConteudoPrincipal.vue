<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import MostrarReceitas from './MostrarReceitas.vue';

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas'

export default {
    data() {
        return {
            ingredientes: [] as string[],
            conteudo: 'SelecionarIngredientes' as Pagina,
            // receitas: "Olá mundo"
        }
    },
    methods: {
        adicionarIngrediente(ingredienteParaAdicionar: string) {
            this.ingredientes.push(ingredienteParaAdicionar)
        },
        removerIngrediente(ingredienteParaRemover: string) {
            this.ingredientes = this.ingredientes.filter(iLista => ingredienteParaRemover !== iLista);
        },
        navegar(pagina: Pagina) {

            this.conteudo = pagina;
        }
    },
    components: { SelecionarIngredientes, SuaLista, MostrarReceitas },
}

</script>



<template>
    <main class="conteudo-principal">



        <SuaLista :ingredientes="ingredientes" v-if="conteudo === 'SelecionarIngredientes'" />

        <!-- serve para manter vivo o estado, preservar o estado guardando em cache -->
        <KeepAlive include="SelecionarIngredientes">
            <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
                @adicionar-ingrediente="adicionarIngrediente($event)" @remover-ingrediente="removerIngrediente($event)"
                @buscar-receitas="navegar('MostrarReceitas')" />

            <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'" :ingredientes="ingredientes"
                @buscar-ingredientes="navegar('SelecionarIngredientes')" />
        </KeepAlive>


    </main>

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