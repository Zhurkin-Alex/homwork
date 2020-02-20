<template lang="pug">
    tr.skill-stroke(v-if="editmode === false")
        td
          .skill-title {{skill.title}}
        td 
          .skill-percent {{skill.percent}} 
        td.button-watch 
            
            button.skill-button__chenge(type="button" @click="editmode = true") 
            button.skill-button__delete(type="button" @click="removeExistedSkill")

    tr.skill-stroke_chenge(v-else)
        td 
            input(type="text" placeholder="Title" v-model="editedSkill.title")
        td 
            input(type="text" placeholder="percent" v-model="editedSkill.percent")
        td 
            button.skill-button__chengs-none(type="button" @click="editExistedSkill") 
            button.skill-button__close-none(type="button" @click="editmode = false") 

</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editmode: false,
      editedSkill: { ...this.skill }
    };
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill);
      } catch (error) {}
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {

      }
    }
  }
};
</script>
<style scoped>

.skill-title{
  margin-right: 235px;
}
.skill-percent{
  &:after{
    content: "%";
    left:15px;
  }
}
.skill-button__delete {
  margin-left:22px;
  background-image: url("../../images/content/trash.png") ;
  background-repeat: no-repeat;
  height: 16px;
  width: 13px;  
}

.skill-button__chenge{
  margin-left:60px;
  background-image: url("../../images/content/Pencil.png") ;
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;  
}
.skill-button__chengs-none{
  margin-left:60px;
   background-image: url("../../images/content/tick.png") ;
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;  
}
.skill-button__close-none{
  margin-left:22px;
   background-image: url("../../images/content/cross.png") ;
  background-repeat: no-repeat;
  height: 16px;
  width: 16px; 
}
</style>
