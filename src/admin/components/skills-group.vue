<template lang="pug">
  .skill-container
    
    h2 {{category.category}}
    hr
    table.skill-table
      tr(v-for="skill in category.skills")
        
      skill-item(
      v-for="skill in category.skills"
      :key="skill.id"
      :skill="skill"
      )
    hr
    form(@submit.prevent="addNewSkill" :class={blocked: loading}).add-skill-wrapper
      input(type="text" placeholder="Name" v-model="skill.title")
      input(type="text" placeholder="Percent" v-model="skill.percent")
      //- input(type="file" @change="handleFile")
      button(type="submit" :disabled="loading") Добавить
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    skillItem: () => import("./skill-item.vue")
  },
  data() {
    return {
      loading: false,
      file: {},
      skill: {
        title: "",
        percent: 0,
        category: this.category.id
      }
    };
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    handleFile(e) {
      const file = e.target.files[0];

      this.file = file;

      const formData = new FormData();

      formData.append("photo", this.file);

      

    },
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      this.loading = true;
      try {
        await this.addSkill(this.skill);

        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.skill-table{
  width: 100%;
  
}
.skill-container{
    padding: 0.625rem;
    box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0,0,0,.07);
    background-color: #fff;
}
.add-skill-wrapper.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>