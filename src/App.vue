<script setup>
import hotelLogo from '@/assets/images/hotel_logo.png'

</script>

<template>

  <div class="container">
    <header>
      <nav>
        <h1 class="logo"><img class="logo_cat" :src="hotelLogo" alt="Cat Logo"></h1>
        <label class="hamburger_menu">
          <input type="checkbox">
        </label>
        <ul class="nav_links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/staff">Our Staff</router-link></li>
          <li><router-link to="/calculator">Calculator</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </nav>
      <p class="big_text">The luxury hotel for<br> your beloved friends.<br>Your pets deserve it.</p>
    </header>
    <!-- This renders the matched page component -->
     <router-view />
  </div>

  
</template>

<style scoped>

</style>
