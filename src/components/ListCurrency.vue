<template>
    <select class="form-select" aria-label="Default select example" v-model="selected" @change="updateList(selected)">
        <option v-for="(item, index) in ListCurrency" :key="item.id" :value="index">{{index}}</option>
    </select>
    <div class="mt-3">Base Currency: <strong>{{ baseCurrencyInPage }}</strong></div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Currency</th>
                <th scope="col">Value</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in ListCurrency" :key="item.id">
                <td>1 {{index}}</td>
                <td>= {{(1 / item).toFixed(4)}} {{ baseCurrencyInPage }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import store from '@/store';

export default {
    name: 'ListCurrency',
    data() {
        return {
            selected: ''
        }
    },
    methods: {
        updateList(base) {
            store.dispatch("getCurrency", base);
        }
    },
    computed: {
        ListCurrency() {
            return store.state.arrayСurrency;
        },
        baseCurrencyInPage() {
            return store.state.baseCurrency;
        }
    },
    mounted() {
        store.dispatch("getCurrency", '');
    }
}
</script>