<template>
    <div class="education-block">
        <p class="header-2">Освіта</p>
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