<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <router-link to="/">Back</router-link>
            </div>
            <div class="col-md-12">
                <ListCurrency/>
            </div>
        </div>
    </div>
</template>

<script>
import ListCurrency from "@/components/ListCurrency.vue";

export default {
    name: 'List',
    components: {
        ListCurrency
    }
}
</script>