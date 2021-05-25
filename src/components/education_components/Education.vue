<template>
    <div>
        <h2>
            Освіта
        </h2>
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