<template>
    <div class="divWrapper">
        <h1>Резюме</h1>
        <about-me></about-me>
        <my-skills></my-skills>
        <experience></experience>
    </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import MySkills from '../components/MySkills.vue'
import Experience from '../components/Experience.vue'

export default {
    name: 'Application',
    components: {
        AboutMe,
        MySkills,
        Experience,
    }
}
</script>
