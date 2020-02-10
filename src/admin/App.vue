<template lang="pug">
  .inner-page
    inner
    boxing    
   
</template>

 <script>
import inner from './components/inner';
import boxing from './components/boxing';
export default {
  
  components: {
   inner, boxing
  }
}
</script>

<style lang="pcss" >
  .inner-page{
    margin: 0;
    padding: 0;
  }
</style>
