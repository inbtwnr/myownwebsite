<template>
  <div class="my-skills-block">
    <p class="header-2">Skills</p>
    <skills-list></skills-list>
  </div>
</template>
<script>
import SkillsList from "./SkillsList.vue";

export default {
  name: "MySkills",
  components: {
    SkillsList,
  },
};
</script>