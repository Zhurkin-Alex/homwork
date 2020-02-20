<template lang="pug">
    header.header
      .container.header__container
        .header__avatar
          img.header__image(src="../../images/content/me200.jpg", alt="avatar")
        .header__content
          .header__username Журкин Алексей
          .header__title Панель администрирования
          a.header__exit-link(@click="logoutUser") Выйти   
</template>




<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("user", ["logout"]),
    logoutUser() {
      this.logout();
      this.$router.replace("/login");
    }
  }
};
</script>

<style lang="pcss" scope>

.header__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header{
  display: flex;
  justify-content: center;
  height: 80px;
  /* padding: 0 60px; */
  color:#fff;
  background-image: linear-gradient(90.0deg, #3e3e59 0%, #454573 100%);
}

.header__avatar{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
}  
.header__image{
  width: 100%;
  object-fit: cover;
  object-position: center center;
}  
.header__content{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-left: 20px;
}
.header__username{
  font-size: 18px;
  font-weight: 600;
}
.header__title{
  margin-left: 1.75rem;
  margin-right: auto;
  opacity: .5;
  font-size: 14px;
  font-weight: 400;
}
.header__exit-link{
  color: #fff;
  opacity: .7;
  text-decoration: underline;
  transition: opacity .2s ease;
  cursor: pointer;
    &:hover{
      opacity: 1;
    }
}
</style>