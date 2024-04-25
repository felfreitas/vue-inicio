export function itensDeLista1EstaoEmLista2(lista1: unknown[],lista2: unknown[]){

    //se todos os items da lista1 estiver na lista 2 retorna true
    return lista1.every((itemLista1)=> lista2.includes(itemLista1))
}