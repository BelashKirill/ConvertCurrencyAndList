import {createStore} from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    arrayСurrency: [],
    baseCurrency: ''
  },
  mutations: {
    getCurrency(state, data) {
      state.arrayСurrency = data;
    },
    setBaseCurrency(state, baseCur) {
      state.baseCurrency = baseCur;
    }
  },
  actions: {
    getCurrency(context, base) {
      const baseCur = base != '' ? base : 'USD';

      axios
        .get('https://freecurrencyapi.net/api/v2/latest?apikey=b27f1c40-5406-11ec-80ac-95b3a83fa42f&base_currency=' + baseCur.toUpperCase())
        .then(response => {
          const newArr = [];

          for (const key in response.data.data) {
            newArr.push([key, response.data.data[key]]);
          }

          context.commit('setBaseCurrency', baseCur);
          context.commit('getCurrency', newArr);
        });
    }
  },
  modules: {}
})