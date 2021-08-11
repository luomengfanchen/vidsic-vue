<template>
    <vidsic-sidebar />
    <router-view />
</template>

<script>
import vidsicSidebar from './components/vidsic-sidebar.vue'

export default {
    name: 'App',
    components: { vidsicSidebar }
}
</script>


<style>
* {
    margin: 0px;
    padding: 0px;
}
</style>
