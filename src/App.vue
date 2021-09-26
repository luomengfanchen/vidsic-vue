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

.vidsic-page-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 75px;
}
</style>
