<template>
  <div class="application-block">
    <p class="header-1">Application</p>
    <about-me></about-me>
    <my-skills></my-skills>
    <experience></experience>
    <education></education>
    <contacts></contacts>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
import MySkills from "@/components/skills_components/MySkills.vue";
import Experience from "@/components/experience_components/Experience.vue";
import Education from "@/components/education_components/Education.vue";
import Contacts from "@/components/Contacts.vue";

export default {
  name: "Application",
  components: {
    AboutMe,
    MySkills,
    Experience,
    Education,
    Contacts,
  },
};
</script>
