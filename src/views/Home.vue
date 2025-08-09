<script setup>
import cat1 from '@/assets/images/cat1.png'
import luna1 from '@/assets/images/luna1.jpeg'
import luna2 from '@/assets/images/luna2.jpeg'
import beforeImg from '@/assets/images/before.png'
import afterImg from '@/assets/images/after.png'
import vaccinationImg from '@/assets/images/vaccination.jpeg'
import walkingImg from '@/assets/images/walking.jpg'
import menuImg from '@/assets/images/menu.jpg'
import showerImg from '@/assets/images/shower.jpg'
import catShopImg from '@/assets/images/cat_shop.jpeg'
import birthdayImg from '@/assets/images/birthday.jpg'


</script>

<template>

<section class="home_container">
    <article class="welcome_container">
      <h2>Welcome to Our Grand Mew Hotel</h2>
      <div class="text">
        <p> Dear guests, we are glad to see you on our website.</p>
        <p> If you love travelling so much as you love the little members of your family,
            but you can’t find a good and reliable cat<br>
            sitter, our hotel is a great solution to this problem.</p>
        <p> We love these mystical animals with all our heart and create the comfortable, safe and friendly atmosphere for them.</p>
        <p> All our fluffy guests, who stayed at our hotel at least once, want to return again and again.</p>
        <p> At our hotel they will not only have a great time but find a lot of good friends.</p>
        <p> After your vacation NOT ONLY YOU will have a lot of things to tell, but your cat as well!</p>
      </div>
    </article>
    
    <article class="three_photos_container">
    <div class="inside_three_photos">
      <img class="fenya_one" :src="cat1" alt="Scottish straight" />
      <img class="luna_one" :src="luna1" alt="Korat" />
      <img class="luna_two" :src="luna2" alt="Korat" />
    </div>
    
    <div class="square"></div>
    </article>
  
    <article class="carousel_part">
    
    <h2 class="title_carousel">Our Services</h2>
    <button class="pre_btn"><img :src="beforeImg" alt="" height="50" width="auto" /></button>
  <button class="nxt_btn"><img :src="afterImg" alt="" height="50" width="auto" /></button>
    
    <section class="service_container">
      <article class="service_card">
        <div class="service_image"><img :src="vaccinationImg" class="service_thumb" alt="Vaccination Service" />
        </div>
        <div class="service_info">
          <h3 class="service_brand">Vaccination</h3>
          <p class="service_short_description">For extra money we vaccinate your fluffy friend against rabies.
                                              We have specialists who examine your pet and give reccomendations on
                                              their weight and diet. Moreover, they examine your pet for fleas.</p>
        </div>
      </article>

      <article class="service_card">
        <div class="service_image"><img :src="walkingImg" class="service_thumb" alt="Walking Service" /></div>
        <div class="service_info">
          <h3 class="service_brand">Walking</h3>
          <p class="service_short_description">We walk with your pet. We use cat strollers, so you should not be worried
                                              that our friend will run away. If your friend stays at the hotel in winter,
                                              we provide warm coat, hat and socks and boots.</p>
        </div>
      </article>
      
      <article class="service_card">
        <div class="service_image"><img :src="menuImg" class="service_thumb" alt="Menu" /></div>        
        <div class="service_info">
          <h3 class="service_brand">Cats' Menu</h3>
          <p class="service_short_description">We have a menu for our guests. If your pet has a special diet or has preferences, 
                                              you can examine the menu and let our staff know which your pet would like to eat 
                                              during their staying at the hotel.</p>
        </div>
      </article>

      <article class="service_card">
        <div class="service_image"><img :src="showerImg" class="service_thumb" alt="Shower" /></div>        
        <div class="service_info">
          <h3 class="service_brand">Cutting Nails and Hair</h3>
          <p class="service_short_description">For extra money we can wash and cut your pet's hair if you are interested in 
                                              this service. Moreover, we cut your pet's nails. We use only shampoos, which don't irritate 
                                              their skin.</p>
        </div>
      </article>
      
      <article class="service_card">
        <div class="service_image"><img :src="catShopImg" class="service_thumb" alt="Cat Shop" /></div>        
        <div class="service_info">
          <h3 class="service_brand">Cats' Toys</h3>
          <p class="service_short_description">If your pet likes toys and other accessories in our hotel, 
                                              you will be able to buy them at the cats' store, which is located inside the hotel. 
                                              The prices there are lower than in other pets' shops.</p>
        </div>
      
      </article>
      
      <article class="service_card">
        <div class="service_image"><img :src="birthdayImg" class="service_thumb" alt="Birthday Party" /></div>       
        <div class="service_info">
          <h3 class="service_brand">Birthday Party</h3>
          <p class="service_short_description"> We organise birthday parties for our guests. If your friend has a birthday
                                                while they are staying at our hotel, we will be happy to make this day 
                                                memorable for your pet.</p>
        </div>
      </article>
    </section>
  
    </article>

</section>
  
</template>




<style scoped>

</style>