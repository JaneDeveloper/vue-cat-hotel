<script setup>

import AndreaC from '@/assets/images/AndreaC.jpg'
import RickR from '@/assets/images/RickR.jpg'
import LeslieC from '@/assets/images/LeslieC.jpg'
import JamesK from '@/assets/images/JamesK.jpg'

</script>

<template>

    <article class="staff_container">
        <div class="staff_carousel" data-carousel>
           <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
            <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
            
            <div class="card_list" data-slides>
                <div class="slide" data-active>
                    <h3 class="staff_name">Hello. I am Andrea Cervantes.</h3>
                    <p class="quatation">I believe that every cat deserves to have good home and a loving owner.</p>
                    <div class="staff_image"><img :src="AndreaC" alt="" height="100" width="auto" class="staff_thumb"/></div>
                    <p class="staff_short_description">Andrea is a veterinarian. She loves animals. She has 2 dogs and three cats, one parrot at home.
                                She is a volunteer at Charity Organisation "Let's save every street animal". She will be one of good friends to your pet during 
                                your absence.
                    </p>
                </div>
                
                <div class="slide">
                    <h3 class="staff_name">Hello. I am Rick Roiland.</h3>
                    <p class="quatation">I am sure that cats are our best friends. They are very sensitive.</p>
                    <div class="staff_image"><img :src="RickR" class="staff_thumb" alt="" height="100" width="auto"></div>
                    <p class="staff_short_description">Rick is good at understanding cats. 
                                      He is a cat specialist. He is interested in cat’s history. 
                                      He also has 4 cats at home. He also donates food and toys
                                      to a lot of animal shelters. He has a YouTube channel “Worship
                                      to cats”. You should watch his videos, you will 
                                      definitely learn a lot about your beloved cats.
                    </p>
                </div>
                
                
                <div class="slide">
                    <h3 class="staff_name">Hello. I am Leslie Collins.</h3>
                    <p class="quatation">This hotel is my second home, because my home is where cats are. </p>
                    <div class="staff_image"><img :src="LeslieC" class="staff_thumb" alt="" height="100" width="auto"></div>
                    <p class="staff_short_description">She has 5 cats at home. She wants to found an animal shelter and name it after her mother from whom she inherited 
                                        this love for cats. Even aggressive and unfriendly cats calm down 
                                        next to her and turn into nice and hospitable guests.
                    </p>
                </div>
                
                
                
                <div class="slide">
                    <h3 class="staff_name">Hello. I am James Kumar.</h3>
                    <p class="quatation">There is no place better than the place which is full of happy cats. </p>
                    <div class="staff_image"><img :src="JamesK" class="staff_thumb" alt="" height="100" width="auto"></div>
                    <p class="staff_short_description">James loves all animals and animals love him back. 
                                      He is a veterinary assistant and loves his job a lot. 
                                      He has 2 cats and one dog. He trained his cats to do 
                                      some fun tricks. He is absolutely sure that cats are 
                                      smarter than people.
                    </p>
                </div>
            </div>
        </div>  
    </article>
    


  


</template>

<style scoped>

</style>