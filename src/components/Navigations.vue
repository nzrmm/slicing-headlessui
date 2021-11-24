<template>
    <ul class="flex justify-center md:justify-start space-x-8">
        <router-link :to="{name : 'React', params : {framework : 'React'}}" class="list-item border-b-2  border-teal-500">React</router-link>
        <router-link :to="{name : 'Vue', params : {framework : 'Vue'}}" class="list-item text-white/60">Vue</router-link>
    </ul>
</template>

<script>
    export default {
        name : 'Navigations'
    }
</script>

<style lang="css" scoped>
    .list-item {
        @apply py-2 text-xl font-medium;
    }
</style>
