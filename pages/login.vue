<template>
    <div class="min-h-screen flex">
        <div class="w-1/2 hidden md:flex bg-gray-100 items-center justify-center">
            <img src="/assets/images/logo.png" alt="Imagem do lado esquerdo" class="logo">
        </div>

        <div class="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
            <div class="max-w-md w-full space-y-8">
                <h2 class="text-center text-3xl font-extrabold text-gray-900">
                    Faça seu Login
                </h2>

                <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div class="mb-2">
                            <label for="email" class="sr-only">Email</label>
                            <input id="email" v-model="email" type="email" autocomplete="email" required
                                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email">
                        </div>
                        <div>
                            <label for="password" class="sr-only">Senha</label>
                            <input id="password" v-model="password" type="password" autocomplete="current-password" required
                                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Senha">
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md btn-custom">
                            Logar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

function handleLogin() {
    if (email.value && password.value) {
        router.push('/')
    } else {
        alert('Por favor, preencha todos os campos.')
    }
}
</script>

<style scoped>
.logo {
    width: 450px;
}

.btn-custom {
    background-color: #F57921;
    color: white;
}

.btn-custom:hover {
    background-color: #e46d14; /* Cor para hover */
}

.btn-custom:focus {
    outline: none;
    box-shadow: 0 0 0 2px #F57921; /* Cor para o foco */
}
</style>
