import Vue from 'vue';
import Loading from './Loading.vue';

export default new Vue({
  components: {
    Loading,
  },
  render: (h) => h(Loading),
});
