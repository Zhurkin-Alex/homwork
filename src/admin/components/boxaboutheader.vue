<template lang="pug">
    .about-page__header
      
      .about-page__add-group
        h1.page-title Блок «Обо мне»
        button(type="button").basic-batton.basic-batton_circle.basic-batton_small.basic-batton_flat.basic-batton_primary
          .basic-batton__icon-wrapper +
          .basic-batton__text Добавить группу
      form(@submit.prevent="addNewCategory").category-control
        input(type="text" v-model="title")
        input(type="submit" value="Добавить") 

      ul.skill-list
        li.skill-list__item(v-for="category in categories" :key="category.id")
          skills-group(
            :category="category"
          )   
        
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  components:{
   skillsGroup: () => import("./skills-group")
  },
  data: () => ({
    title: ""
  }),
  computed : {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  created() {
   this.fetchCategories();
  },
  methods:{
    ...mapActions("categories", ["addCategory", "fetchCategories" ]),
    async addNewCategory() {
      try {
        await this.addCategory(this.title)
      } catch (error) {
        alert(error.massage);
      }
     
    }
  }
};
</script>

<style lang="pcss" scoped>
@import "../../styles/mixins";

.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}

.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;

  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }

  /* @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  } */
}
.category-control{
  /* display: flex;
  justify-content: space-between; */
}
button[type="button"] {
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.about-page__header{
  display: flex;
  /* align-items: center; */
  flex-direction: column;
}

.page-title{
  font-size: 21px;
  font-weight: 700;
  color: #414c63;
  margin-right: 3.75rem;
}
.about-page__add-group{
  display: flex;
  align-items: center;
  margin-bottom: 3.75rem;

}
.basic-batton{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #fff;
  transition: .5s cubic-bezier(0.93, 0.33, 0, 1.54);
  cursor: pointer;
  /* background-image: linear-gradient(90.0deg, #006aed 0%, #3f35cb 100%); */

}
.basic-batton__icon-wrapper{
  width: 21px;
  height: 21px;
  font-size: 15.2px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-image: linear-gradient(90.0deg, #006aed 0%, #3f35cb 100%);
  transition: .2s ease;
  /* background: svg-load("user.svg", fill=#00d70a, width=100%, height=100%); */
}
.basic-button_circle{
  background: none;
}
.basic-button_circle .basic-button__icon-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: .2s ease;
  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
  color: #ffffff;
  background-image: linear-gradient(90.0deg, #006aed 0%, #3f35cb 100%);
}
.basic-button_circle.basic-button_disabled .basic-button__icon-wrapper{
    background: #2d3c4e;
    cursor: default;
    opacity: .3;
}
.basic-batton__text{
  padding: 0 13px;
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;

}
</style>