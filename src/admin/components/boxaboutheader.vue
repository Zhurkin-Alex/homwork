<template lang="pug">
    .about-page__header
        h1.page-title Блок «Обо мне»
        .about-page__add-group
            button(type="button").basic-batton.basic-batton_circle.basic-batton_small.basic-batton_flat.basic-batton_primary
                .basic-batton__icon-wrapper +
                .basic-batton__text Добавить группу
         
        
</template>


<style lang="pcss" scoped>
button[type="button"] {
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.about-page__header{
  display: flex;
  align-items: center;
}

.page-title{
  font-size: 21px;
  font-weight: 700;
  color: #414c63;
}
.about-page__add-group{
  margin-left: 65px;

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