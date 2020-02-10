<template lang="pug">
    .inner-page__content
      boxabouts
      boxrewies
      boxworks
      //- router-view     
        
</template>


<script>
import boxabouts  from '../components/boxabouts';
import boxrewies  from '../components/boxrewies';
import boxworks  from '../components/boxworks';


export default {
    
    components: {
     boxabouts, boxrewies, boxworks
    }

}
</script>
        


<style lang="pcss" scoped>

.inner-page__content{
  flex-grow:1;
  overflow-y:auto;
}

</style>