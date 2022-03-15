import { ref } from "vue"
import { defineStore } from "pinia"


export const useUserStore = defineStore("user", () => {

    const user = ref({
        username: "",
        email: ""
    })

    const setUsername = (name: string) => {
        user.value.username = name
    }
    const setEmail = (email: string) => {
        user.value.email = email
    }

    return {
        user,
        setUsername,
        setEmail
    }

})