<template>
  <div class="work-experience-job-list">
    <p class="paragraph-primary-semibold">Participation in projects</p>
    <ul class="work-experience-list-wrapper">
      <li v-for="(project, index) in projects" :key="index">
        <project-item
          :name-of-task="project.nameOfTask"
          :role-title="project.roleTitle"
          :role-description="project.roleDescription"
          :task-list="project.taskList"
          :link-list="project.linkList"
        ></project-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
export default {
  name: "ProjectList",
  components: {
    ProjectItem,
  },
  data() {
    return {
      projects: [
        {
          nameOfTask: "My financial independence mobile app",
          roleTitle: "As an interface designer",
          roleDescription:
            "Here I reworked the «raw» layouts to fit the figma standards. Used components and variants, adaptability of layouts and made a demo. My participation in this project is on the Master pages and in the Components. In old layouts what was before the changes.",
          taskList: [
            "Turn group of elements in components, made variants;",
            "Made adaptivity on screen so you can change size of frames and layouts will response;",
            "Made library of styles: fonts, grids, colors.",
          ],
          linkList: [
            "https://www.figma.com/file/wqRZAQDtrYBZsflolRc91C/My-Financial-Independence?node-id=0%3A1",
          ],
        },
        {
          nameOfTask: "Apple Home website",
          roleTitle: "As an interface designer",
          roleDescription: "I designed an e-commence for the Apple home shop.",
          taskList: ["Made layouts and styles for all type of screens."],
          linkList: [
            "https://www.figma.com/file/njpnyx894f8MphEbdHMTb9/Layouts?node-id=0%3A1",
          ],
        },
        {
          nameOfTask: "Sterna.studio website",
          roleTitle: "As an interface designer",
          roleDescription:
            "I designed an corporate site for the Sterna.studio.",
          taskList: [
            "Made layouts and styles for all type of screens.",
            "Made brand logotype",
          ],
          linkList: [
            "https://www.figma.com/file/njpnyx894f8MphEbdHMTb9/Layouts?node-id=0%3A1",
          ],
        },
        {
          nameOfTask: "Linkbase website",
          roleTitle: "As an interface designer and frontend developer",
          roleDescription:
            "I designed and developed an web service, where you can save and group links.",
          taskList: [
            "Designed layouts and styles.",
            "Developed frontend part of website",
          ],
          linkList: ["https://github.com/such-an-inbetweener/linkbase"],
        },
      ],
    };
  },
};
</script>