<script lang="ts" setup>
import { ref } from "vue"

import { useUserStore } from "../stores/user"
const userStore = useUserStore()

const usernameInput = ref("")
const emailInput = ref("")

const handleSubmit = () => {
    userStore.setUsername(usernameInput.value)
    userStore.setEmail(emailInput.value)
    usernameInput.value = ""
    emailInput.value = ""
}

</script>

<template>
    <h1>Pinia Demo</h1>

    <div class="selected-user" v-show="userStore.user.username && userStore.user.email">
        <h2>Welcome, {{ userStore.user.username }}</h2>
        <p>{{ userStore.user.email }}</p>
    </div>

    <form class="select-user" @submit.prevent="handleSubmit">
        <div class="form-group">
            <input
                type="text"
                v-model="usernameInput"
                placeholder="Enter Name "
                required
                aria-required
            />
        </div>
        <div class="form-group">
            <input
                type="email"
                v-model="emailInput"
                placeholder="Enter Email "
                required
                aria-required
            />
        </div>
        <input type="submit" value="Submit" />
    </form>
</template>


<style lang="scss">
input[type="text"],
input[type="email"] {
    @apply text-black;
}
</style>