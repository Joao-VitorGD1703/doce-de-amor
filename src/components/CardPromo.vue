<script setup>
import { ref } from 'vue';
import Button from '@/components/Buttom.vue'
const title = ref('Título do Card');
const descricao = ref('Título do Card');


const handleClick = () => {
    alert('Botão clicado!');
};
</script>

<template>
    <!-- @click="handleClick" -->
    <div class="max-w-sm rounded-md overflow-hidden shadow-lg mx-auto w-9/12  bg-bg-2">
        <img class="w-10/12 rounded-md my-5 mx-auto "
            src="../assets/img/pexels-julias-torten-und-tortchen-434418-1120464.jpg" alt="Imagem do Card">
        <div class="px-6 py-4 bg-bg-2  w-auto flex-col flex justify-center align-middle">

            <h2 class=" font-bold  mb-2 text-2xl mx-auto text-tx-5 bg-bg-2">{{ title }}</h2>
            <p class=" font-bold  my-10  mx-auto text-tx-5 bg-bg-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id odio maximus, congue felis sed, viverra mauris. Praesent luctus cursus risus porttitor bibendum. Proin ac ante ac lorem rutrum lacinia. Phasellus semper diam eget congue facilisis.</p>
            <ul class="list-none">
                <li class="bg-bg-2 text-tx-5">- item</li>
                <li class="bg-bg-2 text-tx-5">- item</li>
                <li class="bg-bg-2 text-tx-5">- item</li>
     
                
            </ul>
            <Button @click="handleClick" label="Primary Button" variant="primary" size="md" class="mx-auto my-7" />


        </div>
    </div>
</template>



<style scoped>
/* Se você precisar de estilos adicionais, pode adicioná-los aqui */
</style>