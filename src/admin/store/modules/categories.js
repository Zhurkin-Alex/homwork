export default {
    namespaced: true,
    state: {
        categories: []
    },

    mutations: {},
  
    actions:{
         addCategory(store, title) {

            //  await this.$axios.post("/categories");
            console.log(title);
        }
    }
};