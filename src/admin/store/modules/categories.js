export default {
    namespaced: true,
    state: {
        categories: []
    },

    mutations: {},
  
    actions: {
        async addCategory(store, title) {
            try{
                const response = await this.$axios.post("/categories", { title });  
            } catch(error){
                throw new Errow(
                    error.response.data.error ||  error.response.data.message
                );
            }
                 
            
        }
    }
};