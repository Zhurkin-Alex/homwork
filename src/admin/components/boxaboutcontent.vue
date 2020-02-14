<template lang="pug">
    .about-page__content
          .about-page__skill-group
            .card.skill-group
              .card__header
                
                form(@submit.prevent="addNewCategory").category-control
                  .category-control__input
                    .simple-input
                      input.simple-input__control.simple-input__control_large(type="text" step="1" placeholder="Название новой группы" v-model="title")
                  .category-control__buttons
                    button.category-control__button.category-control__button_save(type="submit")
                    button.category-control__button.category-control__button_cancel
              .card__body
                .skill-group__new-skill
                  form.new-skill
                    .new-skill__title
                      .simple-input.simple-input_disabled
                        input.simple-input__control.simple-input__control_default(type="text" step="1" placeholder="Новый навык")
                    .new-skill__percent
                      .simple-input.simple-input_disabled
                        input.simple-input__control.simple-input__control_default(type="number" step="1" placeholder="100")
                        .simple-input__measure %
                    .new-skill__button
                      .button(type="submit" disabled="disabled").basic-button.basic-button_circle.basic-button_disabled.basic-button_default.basic-button_flat.basic-button_primary
                        .basic-button__icon-wrapper +

          .about-page__skill-group
            .card.skill-group
              .card__header
                .category-control.skill-group__category
                  .category-control__input
                    .simple-input
                      input.simple-input__control.simple-input__control_large(type="text" step="1"  placeholder="Название новой группы" readonly="readonly")
                  .category-control__buttons 
                    button.category-control__button.category-control__button_edit   
                    button.category-control__button.category-control__button_delete   
              .card__body
                table.skill-group__skills-table
                  tr.skill
                    td.skill__title
                      .simple-input 
                        input.simple-input__control.simple-input__control_default(tupe="text" step="1"  placeholder="Название навыка" readonly="readonly") 
                    td.skill__persent
                      .simple-input
                        input(tupe="number" step="1"  placeholder readonly="readonly").simple-input__control.simple-input__control_default
                        .simple-input__measure %
                    td.skill__controls
                      .skill__buttons
                        button.skill__button.skill__button_edit
                        button.skill__button.skill__button_remove
                .skill-group__new-skill
                  form.new-skill
                    .skill__title
                      .simple-input
                        input(tupe="text" step="1" placeholder="Новый навык").simple-input__control.simple-input__control_default
                    .new-skill__percent
                      .simple-input
                        input(tupe="number" step="1" placeholder).simple-input__control.simple-input__control_default
                        .simple-input__measure %
                    .new-skill__button
                      button(type="submit").basik-button.basic-button_circle.basik-button_default.basik-button_flat.basik-button_primary
                        .basic-button__icon-wrapper +
         
        
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  components:{
   
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
@import url("../../styles/mixins");
 
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button[type="button"] {
  cursor: pointer;
  background-color: transparent;
  border: none;
}
 .about-page__content{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 58px;
  @include tablets{
    grid-template-columns: 1fr;
  }
}
.card{
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0,0,0,.07);
}
.skill-group{
  height: 100%;
  min-height: 413px;
}
.card__header{
  margin: 1.25rem 1.25rem 0;
  padding-bottom: .875rem;
  border-bottom: 1px solid rgba(31,35,45,.15);
  font-size: inherit;
  font-weight: 700;
}
.category-control{
  display: flex;
  justify-content: space-between;
}
.skill-group__category{
  padding: 0 10px;
}
.category-control__input{
  width: 273px;
}
.simple-input{
  position: relative;
  width: 100%;
}
.simple-input_disabled:after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0,0%,100%,.8);
}
.simple-input__control{
  width: 100%;
  color: #2d3c4e;
  font-size: 1rem;
  font-weight: inherit;
  line-height: 2.625rem;
  background: none;
  border: none;
  transition: border .2s ease;
  border-bottom: 1px solid #1f232d;
  transition: border .2s ease;
}
.simple-input__control:read-only{
    border-color: transparent;
}
.simple-input__control_large{
  font-size: 18px;
  line-height: 34px;
  font-weight: 600;
  border-bottom: 1px solid #000000;
}
.category-control__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}
.category-control__button{
    padding: 0;
    width: 15px;
    height: 15px;
    fill: #2d3c4e;
    border: none;
    background: none;
    cursor: pointer;
    transition: .2s ease;
    
}
.category-control__button_edit {
  background: svg-load("pencil.svg", fill=#414c63, width=100%, height=100%);
}
.category-control__button_save{
background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%);
margin-right: 20px;
}
.category-control__button_cancel{
background: svg-load("remove.svg", fill=#bf2929, width=100%, height=100%);
}
.category-control__button_delete {
  margin-left: 19px;
   background: svg-load("trash.svg", fill=#414c63, width=100%, height=100%);
  /* width: 15px;
  height: 15px;
  background-repeat: no-repeat; */
  
}

/* -------card__body--------- */

.card__body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 30px;
}
.skill-group__new-skill{
  align-self: flex-end;
  margin-top:auto;
  margin-bottom: 14px;
}
.skill-group__skills-table{
  margin-bottom: 30px;
}
.simple-input{
  position: relative;
  width:100%;
}
.skill__persent{
  padding: 0 30px 0 20px;
  width: 7.75rem;
}
.simple-input__measure{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
.skill__controls{
  width: 50px;
}
.skill__buttons{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.skill__button{
    padding: 0;
    margin: 0 10px;
    width: 16px;
    height: 16px;
    fill: #2d3c4e;
    border: none;
    background: none;
    cursor: pointer;
    transition: .2s ease;
}
.skill__button_edit{
  background: svg-load("pencil.svg", fill=#414c63, width=100%, height=100%);
}
.skill__button_remove{
  background: svg-load("trash.svg", fill=#414c63, width=100%, height=100%);
}
.new-skill{
  display: flex;
  align-items: flex-end;
}
.new-skill__title{
  flex-basis: 218px;
}

.new-skill__percent{
    margin-left: 10px;
    width: 74px;
}
.new-skill__button{
  margin-left: 30px;
}

.basik-button__circle{
 /* width: 40px;
 height: 40px; */
  background: none;
  padding: 0;
}
.basic-button_disabled{
  cursor: default;
}
/* .basik-button__icon-wrapper{
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-image: linear-gradient(90.0deg, #006aed 0%, #3f35cb 100%);
    transition: .2s ease;
} */
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
  border: none;
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
</style>