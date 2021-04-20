<template>
    <div class="divWrapper">
        <h1>Резюме</h1>
        <about-me></about-me>
        <my-skills></my-skills>
        <experience></experience>
        <education></education>
    </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import MySkills from '../components/MySkills.vue'
import Experience from '../components/Experience.vue'
import Education from '../components/Education.vue'

export default {
    name: 'Application',
    components: {
        AboutMe,
        MySkills,
        Experience,
        Education,
    }
}
</script>
