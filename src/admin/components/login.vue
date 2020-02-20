<template lang="pug">
  .login
    .login__content
      form(@submit.privent="login").login__form
        .login__form-title Авторизация
        .login__row
          label.input.input_labeled.input_iconed.input_icon-user
            .input__title Логин
            input.input__elem.field__elem(title="логин" icon="user" v-model="user.name")
        .login__row
          label.input.input_labeled.input_iconed.input_icon-key
            .input__title Пароль
            input.input__elem.field__elem(type="password" title="пароль" icon="key" v-model="user.password")
        .login__btn
          button.login__send-data(type="submit") Отправить
</template>

<script>
import $axios from "../requests";
export default {
  data: () => ({
    user: {
       name: "",
       password: ""
    }
  }),
  methods: {
    async login() {
      try {
        const response = await $axios.post("/login", this.user);
        const token = response.data.token;

        localStorage.setItem("token", token)
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;

        this.$router.replace("/");
        
      } catch (error) {
        
      }

    }
  }
}
    

</script>

<style lang="postcss">
@import "../../styles/mixins";
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../images/content/admin.jpg") center center / cover no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: #414c63;
  }
}

.login__form-title {
  font-size: 36px;
  text-align: center;
  font-weight: 600;
}

.login__content {
  position: relative;

  /* @include phones {
    height: 100%;
    width: 100%;
  } */
}

.login__row {
  margin-bottom: 35px;
}

.login__btn {
  display: flex;
  width: 100%;
  padding: 0 8%;
  justify-content: center;
}

.login__send-data {
  width: 100%;
  padding: 30px;
  background-image: linear-gradient(to right, #ad00ed, #5500f2);
  border-radius: 40px 0 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;

  &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}

.login__form {
  width: 563px;
  padding: 50px 77px 60px;
  background: #fff;

  @include phones {
    width: 100%;
    padding-right: 7%;
    padding-left: 7%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}


.input {
  display: block;
  position: relative;


  &_labeled {
    .input__elem {
      padding: 15px 0 18px;
    }
  }

  &_iconed {
    .input__title {
      margin-left: 45px;
      margin-bottom: 13px;
    }
    .input__elem {
      padding-left: 45px;
      background: left center / auto 29px no-repeat;
      font-size: 18px;
      font-weight: bold;
      padding-top: 17px;
      padding-bottom: 17px;

      border: none;
      border-bottom: 1px solid #898989;
      width: 100%;
    }
  }

  &_icon {
    @each $icon in (user, key) {
      &-$(icon) {
        .input__elem {
          background-image: svg-load("$(icon).svg", fill=#cfd2d7);
        }
      }
    }
  } 
}

.input__title {
  color: rgba(65, 76, 99, 0.5);
  font-weight: 600;
  opacity: 0.5;
}
</style>