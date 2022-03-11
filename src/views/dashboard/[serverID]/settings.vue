<script lang="ts" setup>

defineProps<{ serverID: String }>()

</script>

<template>
    <div>
        <h1>Server Settings</h1>
        <p>Server ID: {{ serverID }}</p>
    </div>
</template>