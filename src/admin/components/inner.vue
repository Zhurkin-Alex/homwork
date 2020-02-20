<template lang="pug">
    .inner-page__panel
        innerheader 
        innernavbar 
        //- login
        
</template>


<script>
import innerheader   from '../components/innerheader';
import innernavbar  from '../components/innernavbar';
// import login  from '../components/login';

export default {
    
    components: {
     innerheader , innernavbar
    }

}
</script>