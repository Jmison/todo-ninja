<template>
  <nav>

    <v-toolbar flat app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-spacer></v-spacer>

    <!-- PLEASE READ
  
        CURRENT ISSUE: MAKING THE 'MENU' TEXT AND LOGO APPEAR ON THE TOP RIGHT OF THE SCREEM
        IN THE TUTORIAL THE CODE ABOVE 'DROPDOWN MENU' NOTES SHOULD BE NOTED, WHILE THE TEXT BELOW IS LIVE
     -->

  <!-- <v-menu offset-y>
      <template v-slot:activator="{ on }">
          <v-btn flat v-on="on" color="grey">
              <v-icon left>expand_more</v-icon>
              <span>Menu</span>
          </v-btn>
      </template>
      <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
      </v-list>
  </v-menu> -->

    <!-- dropdown menu -->
  <v-menu>
    <v-btn flat slot="activator" color="grey">
      <v-icon left>expand_more</v-icon>
      <span>Menu</span>
    </v-btn>
  </v-menu>


    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="avatar-1.png" alt="">
          </v-avatar>
          <p class="white--text subheading mt-1">
            The Net Ninja
          </p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
      ]
    }
  }
}
</script>

<style>

</style>
