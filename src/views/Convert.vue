<template>
    <b-card>
        <ConvertCyrrency/>
        <router-link to="/">Back</router-link>
    </b-card>
</template>

<script>
import ConvertCyrrency from "@/components/ConvertCyrrency.vue";

export default {
    name: 'Convert',
    components: {
        ConvertCyrrency
    }
}
</script>