<template lang="pug">
    .about-page
        boxaboutheader
        boxaboutcontent
         
        
</template>


<script>
import boxaboutheader  from '../components/boxaboutheader';
import boxaboutcontent  from '../components/boxaboutcontent';

export default {
    
    components: {
     boxaboutheader, boxaboutcontent
    }

}
</script>
<style lang="pcss" scoped>

.about-page{
  padding: 60px;
  padding-bottom: 0;
}
</style>