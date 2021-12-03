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
    methods: {
      resultConvert() {
        this.result = 'Please wait...';

        function update(value) {
          return new Promise(resolve => {
            store.dispatch("getCurrency", value);
            setTimeout(() => {
              resolve();
            }, 0)
          });
        }
        
        update(this.selectedText.split(' ')[1]).then(() => {
          setTimeout(() => {
            const storeCur = store.state.arrayСurrency;

            for (let i = 0; i < storeCur.length; i++) {
              if (String(this.selectedText.split(' ')[3]).toUpperCase() === storeCur[i][0]) {
                const fixedResult = (this.selectedText.split(' ')[0] * storeCur[i][1]).toFixed(2);
                
                this.result = `Result: ${fixedResult} ${this.selectedText.split(' ')[3].toUpperCase()}`;
              }
            }
          }, 1500)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .button {
    margin-top: 10px;
  }
</style>