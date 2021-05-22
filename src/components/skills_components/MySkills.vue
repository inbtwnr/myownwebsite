<template>
    <div class="my-skills-block">
        <p class="header-2">
            Мої навички
        </p>
        <skills-list></skills-list>
    </div>
</template>
<script>
    import SkillsList from '@/components/skills_components/SkillsList.vue'
    
    export default {
        name: 'MySkills',
        components:{
            SkillsList,
        }
    }
</script>