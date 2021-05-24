<template>
    <div class="work-experience-block">
        <p class="header-2"> Досвід роботи </p>
        <job-list></job-list>
    </div>
</template>
<script>
    import JobList from './JobList.vue'
    
    export default {
        name: 'Experience',
        components:{
        JobList,
        }
    }
    
</script>

<style> </style>