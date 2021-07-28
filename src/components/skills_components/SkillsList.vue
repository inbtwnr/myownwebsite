<template>
  <ul class="skill-list-block">
    <li
      v-for="(category, index) in categories"
      :key="index"
      class="skill-list-item-wrapper"
    >
      <skills-item
        :skill-category="category.skillCategory"
        :skills="category.skills"
      ></skills-item>
    </li>
  </ul>
</template>

<script>
import SkillsItem from "./SkillsItem.vue";

export default {
  name: "SkillsList",
  components: { SkillsItem },
  data() {
    return {
      categories: [
        {
          skillCategory: "Interactive Design",
          skills: [
            "Design Research",
            "Design Systems",
            "Prototyping",
            "Layout",
          ],
        },
        {
          skillCategory: "Instruments",
          skills: [
            "Figma",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Adobe InDesign",
            "Visual Studio Code",
          ],
        },
        {
          skillCategory: "Frontend",
          skills: [
            "HTML & CSS",
            "Sass",
            "Vue.JS (Vue Router, VueX)",
            "JavaScript",
          ],
        },
        {
          skillCategory: "Language proficiency",
          skills: [
            "English – intermediate level",
            "Ukrainian – native",
            "Russian – advanced",
          ],
        },
        {
          skillCategory: "«Soft skills»",
          skills: ["Creative and analytical thinking", "Empathy", "Liability"],
        },
      ],
    };
  },
};
</script>

<style></style>