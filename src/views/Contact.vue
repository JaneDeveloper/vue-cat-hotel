<script setup>
</script>

<template>

<article class="contact_container">
    <form action="contact_form.html" method="get">
        <fieldset class="contactinfo">
            <h2>Contact Information</h2>
            <div>
                <label for="nameinput">Your Name</label>
                <input type="text" name="name" id="nameinput">
                <span>*</span>
            </div>
            
            <div>
                <label for="emailinput">Email</label>
                <input type="email" name="email" id="emailinput">
                <span>*</span>
            </div>
            
            <div>
                <label for="phoneinput">Phone</label>
                <input type="tel" name="phone" id="phoneinput"
                placeholder="999-999-9999">
                <span>*</span>
            </div>
        </fieldset>
        
        <fieldset class="catinfo">
            <h3>Your Cat's Information</h3>
            <div>
                <label for="catnameinput">Cat's Name</label>
                <input type="text" name="name" id="catnameinput">
                <span>*</span>
            </div>
            
            <div>
                <label for="catageinput">Cat's Age</label>
                <input type="text" name="name" id="catageinput">
                <span>*</span>
            </div>
            
            <h3>Rabies</h3>
            <div>
                <label for="vaccinated">Vaccinated</label>
                <input type="radio" name="rabies" id="vaccinated" value="Vaccinated" checked>
                <label for="not_vaccinated">Not Vaccinated</label>
                <input type="radio" name="rabies" id="not_vaccinated" value="notVaccinated">
            </div>
        </fieldset>
        
        <fieldset class="reserveinfo">
            <h3>Reservation Information</h3>
            <h4>Check-in date</h4>
            <div class="date-picker">
                <label for="checkin-month">Month</label>
                <select id="checkin-month" name="checkin-month">
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                
                
                <label for="checkin-day">Day</label>
                <select id="checkin-day" name="checkin-day">
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                
                
                <label for ="checkin-year">Year</label>
                <select id="checkin-year" name="checkin-year">
                    <option value="2023">2024</option>
                    <option value="2024">2025</option>
                    <option value="2025">2026</option>
                </select>
            </div>
            
            
            <h4>Check-out date</h4>
            <div class="date-picker">
                <label for="checkout-month">Month</label>
                <select id="checkout-month" name="checkout-month">
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                
                <label for="checkout-day">Day</label>
                <select id="checkout-day" name="checkout-day">
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                
                
                <label for ="checkout-year">Year</label>
                <select id="checkout-year" name="checkout-year">
                    <option value="2023">2024</option>
                    <option value="2024">2025</option>
                    <option value="2025">2026</option>
                </select>
            </div>
        </fieldset>
        
        <fieldset class="additionalinfo">
            <h3>Additional Information</h3>
            <div>
                <label for="comments">Your wishes, requests, or other Information</label>
                <textarea name="comments" id="comments" rows="10" cols="45"></textarea>
            </div>
            
            <div>
                <label>&nbsp;</label>
                <input type = "button" id="btnSubmit" value="Submit">
                <input type="button" id="clear" value="Clear">
            </div>
        </fieldset>
                      
    </form>


</article>

</template>





<style scoped>

</style>
