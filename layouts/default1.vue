<template>
  <div>
    <Header v-if="haveMenu"></Header>
    <div :class="{'container-1200': haveMenu}">
      <Aside v-if="haveMenu"></Aside>
      <nuxt :class="{'m-l-290': haveMenu}"/>
    </div>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import Aside from '@/components/Aside'
  export default {
    name: 'defaultpage',
    components: {
      Header,
      Aside
    },
    data() {
      return {
        haveMenu: false,
        noMenuList: ['/login', '/register', '/forget']
      }
    },
    methods: {},
    mounted () {
      if (this.$route) {
        let showMenu = true
        this.noMenuList.forEach(item => {
          if (this.$route.path.indexOf(item) !== -1) {
            showMenu = false
          }
        })
        this.haveMenu = showMenu
      }
    }
  }
</script>
<style>
  .m-l-290{
    margin-left: 290px;
  }
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
