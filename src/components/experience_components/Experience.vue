<template>
  <div class="work-experience-block">
    <p class="header-2">Work experience</p>
    <job-list></job-list>
    <project-list></project-list>
  </div>
</template>
<script>
import JobList from "./JobList.vue";
import ProjectList from "./ProjectList.vue";

export default {
  name: "Experience",
  components: {
    JobList,
    ProjectList,
  },
};
</script>

<style>
</style>