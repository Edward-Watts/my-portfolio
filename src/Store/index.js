import Vue from "vue";
import Vuex from "vuex";
import portfolio from "./portfolio"


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        portfolio
    }
})