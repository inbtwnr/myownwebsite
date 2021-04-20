<template>
    <div class="divWrapper">
        <h1>Резюме</h1>
        <about-me></about-me>
        <my-skills></my-skills>
    </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import MySkills from '../components/MySkills.vue'

export default {
    name: 'Application',
    components: {
        AboutMe,
        MySkills,
    }
}
</script>
