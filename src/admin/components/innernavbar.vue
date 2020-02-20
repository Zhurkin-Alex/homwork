<template lang="pug">
    .inner-page__navbar
      .container
        ul.tabs
          li.tabs__item(v-for="tab in tabs")
            router-link(
              :data-text="tab.title" 
              :to="tab.href"
              exact-active-class="active"
            ).tabs__link
        //- .tabs 
        //-   a.tabs__item.tabs__item-active(href="/" title="обо мне") Обо мне 
        //-   a.tabs__item(href="/boxworks" title="Работы") Работы
        //-   a.tabs__item(href="/boxrewies" title="Отзывы") Отзывы   
</template>


<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/boxreviews" },
        { title: "Работы", href: "/boxworks" }
      ]
    };
  }
};
</script>


<style lang="postcss" scoped>
  @import "../../styles/mixins";

.tabs-container {
  background: #fff;
}

.tabs {
  display: flex;
  height: 77px;

  @include phones {
    height: 87px;
  }
}

.tabs__item {
  height: 100%;
  margin-right: 30px;

  @include phones {
    margin-right: 3px;
  }

  &:last-child {
    margin-right: 0;
  }
}

.tabs__link {
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  width: 125px;
  justify-content: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;

  @include phones {
    width: 100px;
  }

  &:before {
    content: attr(data-text);
  }

  &:hover,
  &.active {
    color: #383bcf;
    font-weight: 600;
    border-color: currentColor;
  }
}





/* .inner-page__navbar{
  padding: 0 59px;
  background-color: #fff;
}
.tabs{
  display: flex;
  align-items: center;
}
.tabs__item{
  padding: 30px 30px;
  color: #414c63;
  text-decoration: none;
  white-space: nowrap;

    &:before{
      display: block;
      content: attr(title);
      font-weight: 700;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
   
}
.tabs__item-active{
    position: relative;
    color:#383bcf;
    font-weight: 600;
    &:after{
    content: "";
    position: absolute;
    bottom: -.0625rem;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #383bcf;
    }
} */
</style>