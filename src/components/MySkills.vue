<template>
    <div class="textblock">
        <h2>
            Мої навички
        </h2>
        <skills-list></skills-list>
    </div>
</template>
<script>
    import SkillsList from '../components/SkillsList.vue'
    export default {
        name: 'MySkills',
        components:{
            SkillsList,
        }
    }
</script>