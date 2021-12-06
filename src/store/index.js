import {createStore} from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    arrayСurrency: [],
    baseCurrency: '',
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
    async getCurrency(context, base) {
      const baseCur = base != '' ? base : 'USD';
      
      context.commit('setBaseCurrency', baseCur);

      const response = await axios.get('https://freecurrencyapi.net/api/v2/latest?apikey=b27f1c40-5406-11ec-80ac-95b3a83fa42f&base_currency=' + baseCur.toUpperCase());

      context.commit('getCurrency', response.data.data);
    }
  },
  modules: {}
})