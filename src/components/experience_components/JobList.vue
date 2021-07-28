<template>
  <div class="work-experience-job-list">
    <p class="paragraph-primary-semibold">Work in companies</p>
    <ul class="work-experience-list-wrapper">
      <li v-for="(job, index) in jobs" :key="index">
        <job-item
          :name-of-job="job.nameOfJob"
          :start-of-working="job.startOfWorking"
          :end-of-working="job.endOfWorking"
          :position="job.position"
          :job-description="job.jobDescription"
          :duties="job.duties"
        ></job-item>
      </li>
    </ul>
  </div>
</template>

<script>
import JobItem from "./JobItem.vue";

export default {
  name: "JobList",
  components: {
    JobItem,
  },
  data() {
    return {
      jobs: [
        {
          nameOfJob: "Sterna.studio",
          startOfWorking: "August 2020",
          endOfWorking: "May 2021",
          position: "Graphic designer",
          jobDescription:
            "Worked as a designer in a small studio: made online stores, corporate pages. Made design systems and talked to developers about the implementation.",
          duties: [
            "Design layouts.",
            "Speak with clients about the project details.",
            "Design print paper products: posters, packages and so on.",
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>