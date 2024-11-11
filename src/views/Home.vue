<script setup>
import { ref } from 'vue'

import Header from '@/components/Header.vue';
import Button from '@/components/Buttom.vue';
import Cards from '@/components/Cards.vue';
import CardPromo from '@/components/CardPromo.vue';
import Footer from '@/components/Footer.vue';

const cardData = ref([{ id: 1, title: 'Nome do Bolo 1' }, { id: 2, title: 'Nome do Bolo 2' }, { id: 3, title: 'Nome do Bolo 3' },]);
const cardDataBig = ref([{
    id: 1, title: 'Nome do Bolo 1',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id odio maximus, congue felis sed, viverra mauris. Praesent luctus cursus risus porttitor bibendum. Proin ac ante ac lorem rutrum lacinia. Phasellus semper diam eget congue facilisis.',
}]);

</script>

<template>
    <div class="w-full h-auto bg-bg-1">
        <!-- Início container 1 -->
        <Header></Header>
        <div class="flex flex-col justify-start w-full h-auto mb-32">
            <img src="../assets/img/pexels-julias-torten-und-tortchen-434418-1120464.jpg" alt="">
            <h2 class="text-tx-4 text-4xl font-semibold mx-2 my-5">Faça Cada Momento Mais Doce</h2>
            <h3 class="text-tx-4 text-2xl mx-2 my-4 "><i>"Confeitos exclusivos feitos sob medida para o seu
                    paladar."</i></h3>
            <div class="my-5 flex justify-center ">
                <Button label="Primary Button" variant="primary" size="md" />
                <Button label="Primary Button" variant="secondary" size="md" />
            </div>
        </div>
        <!-- Fim container 1 -->
        <!-- Início container 2 -->
        <div class="flex flex-col justify-start w-full  h-auto">
            <div class="flex flex-col justify-center align-middle w-full h-20 mb-10 bg-bg-4">
                <h2 class=" bg-bg-4 text-tx-5 text-2xl font-semibold mx-auto">Nossos Destaques</h2>
            </div>
            <div class="flex flex-wrap justify-center">
                <Cards v-for="card in cardData" :key="card.id" :title="card.title" class="my-5" />
            </div>
            <h2 class="  text-tx-4 text-2xl font-semibold mx-auto mt-10 mb-20"><i>"Produtos com total aprovação"</i>
            </h2>

        </div>
        <!-- Fim container 2 -->
        <!-- Início container 3 -->
        <div class="flex flex-col justify-start w-full  h-auto">
            <div class="flex flex-col justify-center align-middle w-full h-20 mb-10 bg-bg-4">
                <h2 class=" bg-bg-4 text-tx-5 text-2xl font-semibold mx-auto">Produtos</h2>
            </div>
            <div class="flex flex-wrap justify-center">
                <Cards v-for="card in cardData" :key="card.id" :title="card.title" class="my-5" />
            </div>
            <Button label="Primary Button" variant="secondary" size="md" class="mx-auto my-10" />
        </div>
        <!-- Fim container 3 -->
        <!-- Início container 4 -->
        <div class="flex flex-col justify-start w-full  h-auto">

            <div class="flex flex-wrap justify-center">
                <CardPromo v-for="card in cardDataBig" :key="card.id" :title="card.title" class="my-5" />
            </div>
        </div>
        <!-- Fim container 4 -->
        <!-- Início container 5 -->
        <div class="flex flex-col justify-start w-full  h-auto">
            <div class="flex flex-col justify-center align-middle w-full h-20 mb-10 bg-bg-4">
                <h2 class=" bg-bg-4 text-tx-5 text-2xl font-semibold mx-auto">Contatos da Empresa</h2>
            </div>
            <div class=" p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold mb-4"></h2>
                <p class="mb-2"><strong>Telefone:</strong> (11) 1234-5678</p>
                <p class="mb-2"><strong>Email:</strong> contato@empresa.com</p>
                <p class="mb-2"><strong>Endereço:</strong> Rua Exemplo, 123, Bairro, Cidade, Estado, CEP 12345-678</p>
                <div class="mt-4">
                    <h3 class="text-xl font-semibold mb-2">Siga-nos nas redes sociais:</h3>
                    <div class="flex space-x-4"> <a href="https://www.facebook.com"
                            class="text-blue-500 hover:text-blue-700">Facebook</a> <a href="https://www.twitter.com"
                            class="text-blue-400 hover:text-blue-600">Twitter</a> <a href="https://www.instagram.com"
                            class="text-pink-500 hover:text-pink-700">Instagram</a> </div>
                </div>
            </div>

        </div>
        <!-- Fim container 5 -->
        <Footer />



    </div>
</template>

<style lang="scss" scoped></style>