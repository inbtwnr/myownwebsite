<template>
    <div class="work-experience-job-list">
        <p class="paragraph-primary-semibold">Співпраця в проектах</p>
        <ul class="work-experience-list-wrapper">
            <li v-for="(project, index) in projects" :key ="index">
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
import ProjectItem from './ProjectItem.vue'
export default {
    name:"ProjectList",
    components:{
        ProjectItem,
    },
    data(){
        return{
            projects: [ 
                {
                    nameOfTask:'Назва проекту',
                    roleTitle:'Роль в проекті',
                    roleDescription:'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla.',
                    taskList: [
                        'In proin iaculis venenatis diam purus dis nostra volutpat auctor ornare.',
                        'Lorem ipsum dolor sit amet.',
                        'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla.'
                    ],
                    linkList: [
                        'In proin iaculis venenatis diam purus dis nostra volutpat auctor ornare.'
                    ]
                }
            ]
        }
    }
}
</script>