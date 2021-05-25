<template>
    <div class="education-block">
        <h2 class="header-2"> Освіта </h2>
        <education-list></education-list> 
    </div>
</template>

<script>
import EducationList from './EducationList.vue'

export default {
    name: 'Education',
    components:{
        EducationList
    }    
}
</script>