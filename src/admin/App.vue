<template lang="pug">
  .wrapper.admin-wrapper
      .maincontent
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
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");



  .admin-wrapper{
    background-image: url("../images/content/MountainBaloon.png");
    background-size: cover;
}
.inner-page{
  background-color: hsla(0,0%,100%,.9);
  height: 100vh;
}
</style>
