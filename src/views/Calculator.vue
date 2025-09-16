<script setup>
</script>

<template>
<article class="calculator_container">
    <div class="scores_of_weight">
        <h2>Find out the ideal weight for your pet.</h2>
        <h3 class="step1">Step 1. Evaluate your cat's BCS by examining your pet's ribs,
            abdomen, and waistline by sight and touch.</h3>    
   <!--    <table>
            <thead>
                <tr>
                    <th>Body Condition Score</th>
                    <th>Description</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Ribs, spine, and pelvis:
                        <ul>
                            <li>Visible</li>
                            <li>Pronounced, very easy to palpate</li>
                            <li>No fat covering</li>
                        </ul>
                        Marked abdominal tuck<br>
                        Loss of body muscle
                    </td>
                </tr>
                
                <tr>
                    <td>2</td>
                    <td>Ribs and spine:
                        <ul>
                            <li>Easily palpated</li>
                            <li>Very little fat covering</li>
                        </ul>
                        Tops of lumbar vertebrae visible <br>
                        Obvious waist behind ribs
                    </td>
                </tr>
                
                <tr>
                    <td>3</td>
                    <td>Ribs and spine:
                        <ul>
                            <li>Palpable but not visible</li>
                            <li>Slight fat covering</li>
                        </ul>
                        Waist and abdominal tuck present<br>
                        Minimal abdominal fat pad
                    </td>
                </tr>
                
                <tr>
                    <td>4</td>
                    <td>Ribs and spine:
                        <ul>
                            <li>Not easy to palpate</li>
                            <li>Moderate fat covering</li>
                        </ul>
                        Little or no waist present <br>
                        Rounding of abdomen
                    
                    </td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Ribs and spine:
                        <ul>
                            <li>Hard to palpate</li>
                            <li>Marked fat cover</li>
                        </ul>
                            Fat over other body areas<br>
                            No waist, marked abdominal fat<br>
                            Marked inguinal fat pad
                        </td>
                </tr>
            </tbody>
        </table> -->
        <h3 class="step2">Step 2. Calculate your pet's ideal weight.</h3>

    

        <div class="calculator">
        <div>
            <label for="current_weight">Current weight:</label>
            <input type="text" id="current_weight">
        </div>
        <div>
            <label for="scores">Scores:</label>
            <input type="text" id="scores">
        </div>
            
        <div>
            <label for="ideal_weight">Ideal weight:</label>
            <input type="text" id="ideal_weight" disabled>
        </div>
        <div>
            <input type="button" id="calculate" value="Calculate">
            <input type="button" id="clear_form" value="Clear form">
        </div>
    </div>
    </div>






        
    
</article>

</template>

<style scoped>


</style>
