<template>
  <b-card>
    <b-form-input v-model="selectedText" placeholder="Example 15 usd in rub"></b-form-input>
    <b-button class="button" @click="resultConvert">Convert</b-button>
    <div class="mt-2">{{ result }}</div>
  </b-card>
</template>

<script>
  import store from '@/store';

  export default {
    name: 'ConvertCyrrency',
    data() {
      return {
        selectedText: '',
        result: ''
      }
    },
    computed: {
      selectedTextArray() {
        return this.selectedText.split(' ');
      },
      amount() {
        return this.selectedTextArray[0];
      },
      firstCur() {
        if (this.selectedTextArray.length > 1) {
          return this.selectedTextArray[1];
        }
      },
      secondCur() {
        if (this.selectedTextArray.length > 3) {
          return this.selectedTextArray[3];
        }
      },
      ListCurrency() {
          return store.state.arrayСurrency;
      }
    },
    methods: {
      resultConvert() {
        async function update(value) {
          await store.dispatch("getCurrency", value);
        }

        update(this.firstCur).then(() => {
          if (this.ListCurrency.hasOwnProperty(String(this.secondCur).toUpperCase())) {
            this.result = `Result: ${(this.amount * this.ListCurrency[String(this.secondCur).toUpperCase()]).toFixed(3)} ${this.secondCur.toUpperCase()}`;
          }
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
  .button {
    margin-top: 10px;
  }
</style>