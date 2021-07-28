<template>
  <div class="work-experience-job-item">
    <div class="work-experience-job-item__job-title">
      <p class="header-2">{{ nameOfJob }}</p>
      <p class="paragraph-secondary-regular">
        {{ startOfWorking }} – {{ endOfWorking }}
      </p>
    </div>
    <div class="work-experience-job-item__job-description">
      <p class="paragraph-secondary-semibold">{{ position }}</p>
      <p class="paragraph-secondary-regular">{{ jobDescription }}</p>
    </div>
    <div class="work-experience-job-item__duties-block">
      <p class="paragraph-secondary-semibold">My responsibilities</p>
      <ul>
        <li
          v-for="(duty, index) in duties"
          :key="index"
          class="paragraph-secondary-regular"
        >
          {{ duty }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobItem",
  props: [
    "nameOfJob",
    "startOfWorking",
    "endOfWorking",
    "position",
    "jobDescription",
    "duties",
  ],
};
</script>