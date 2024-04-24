<script lang="ts">
import Tag from './Tag.vue'

export default {
    components: { Tag },
    props:{
        ingrediente:{ type: String, required:true}
    },
    data(){
        return{
            selecionado: false
        }
    },
    methods:{

        aoClicar(){
            this.selecionado=!this.selecionado

            // emitindo evento personalizado para o pai escutar. Boa pratica é escrever o emits com o nome 'chave'
            if(this.selecionado){
                this.$emit('adicionarIngrediente', this.ingrediente)
            }else{
                this.$emit('removerIngrediente', this.ingrediente)
            }

        }
    },
    emits:['adicionarIngrediente','removerIngrediente']
}

</script>
<template>
    <button 
        class="ingrediente"
        @click="aoClicar"
        :aria-pressed="selecionado"
    >
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>


<style scoped>
.ingrediente{
    cursor: pointer;
}
</style>