<template>
  <div id="app">
    <Sidebar />
    <div class="wrap">
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss">
@import '../static/css/layout/header.scss';
@import '../static/css/layout/sidebar.scss';
@import '../static/css/reset.scss';

#app {
  height: 100%;
  position: relative;
  left: 0;

  .wrap {
    margin-left: 224px;
    position: relative;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
  }
}

</style>
