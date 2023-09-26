<template>
    <div>  {{ localStore.counter }}</div>
</template>

<script>
import { useStore } from "../pinia/store.js";
const localStore = useStore();
</script>