<template>
  <div class="sidebar">
    <div class="sidebar__top-contents" style="height:48px;">
      <!--
      <img src="../../../public/logo.png" class="sidebar__logo" />
      -->
    </div>
    <div class="sidebar__menu">
      <ul class="submenu-box">
        <li class="submenu-item"
          v-for="(sub, idx) in subMenuList"
          v-if="sub.menu_id === null"
          :key="idx"
          @click="goMenu(sub.route)">
          <i class="icon-dashboard"></i>{{ sub.name }}
        </li>
      </ul>
      <ul>
        <li v-for="(menu, index) in menuList" :key="index" class="sidebar__menu-item">
          <div class="sidebar__menu-title">
          </div>
          <ul class="submenu-box">
            <li class="submenu-item"
              v-for="(sub, idx) in subMenuList"
              v-if="menu.id === sub.menu_id"
              :key="idx">
              <md-icon>{{ sub.icon }}</md-icon>{{ sub.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  components: {
  },
  data () {
    return {
      menuList: [
        {id: 0, title: 'UI Elements' },
        {id: 1, title: 'Pages' }
      ],
      subMenuList: [
        {name: 'Dashboard', menu_id: null, icon:  'vertical_split', route: 'dashboard' },
        {name: 'Charts', menu_id: 0, icon:  'insert_chart', url: '' },
        {name: 'Edit', menu_id: 0, icon:  '', url: '' },
        {name: 'Forms', menu_id: 0, icon:  '', url: '' },
        {name: '_icons', menu_id: 0, icon:  '', url: '' },
        {name: 'Maps', menu_id: 0, icon:  '', url: '' },
        {name: 'Tab', menu_id: 0, icon:  '', url: '' },
        {name: 'Tables', menu_id: 0, icon:  '', url: '' },
        {name: 'Login', menu_id: 1, icon:  '', url: '' },
        {name: 'Error', menu_id: 1, icon:  '', url: '' }
      ]
    }
  }
}
</script>

<style>

</style>
