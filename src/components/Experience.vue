<template>
    <div class="textblock">
        <h2>
            Досвід роботи
        </h2>
        <job-list></job-list>
    </div>
</template>
<script>
    import JobList from '../components/JobList.vue'
    
    export default {
        name: 'Experience',
        components:{
        JobList,
        }
    }
    
</script>