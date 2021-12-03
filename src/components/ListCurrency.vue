<template>
    <b-card>
        <b-form-select
        v-model="ex1Selected"
        :options="setListCyrrency"
        size="sm"
        class="mt-3"
        @input="updateList(ex1Selected)"
        >
        </b-form-select>
        <div class="mt-3">Base Currency: <strong>{{ actualCur }}</strong></div>
    </b-card>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Currency</th>
                <th scope="col">Value</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in getListCurrency" :key="item.id">
                <td>1 {{ item[0] }}</td>
                <td>= {{ (1 / item[1]).toFixed(2) }} {{ actualCur }}</td>
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
            actualCur: '',
            ex1Selected: ''
        }
    },
    methods: {
        updateList(base) {
            store.dispatch("getCurrency", base[0]);
        }
    },
    computed: {
        getListCurrency() {
            return store.state.arrayСurrency;
        },
        setListCyrrency() {
            const list = [];

            for (const key in store.state.arrayСurrency) {
                list.push([store.state.arrayСurrency[key][0]]);
            }

            return list;
        }
    },
    mounted() {
        store.dispatch("getCurrency", '');
        this.actualCur = store.state.baseCurrency;
    },
    updated() {
        this.actualCur = store.state.baseCurrency;
    }
}
</script>