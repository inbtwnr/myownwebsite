<template>
    <div class="work-experience-project-item">
        <div class="work-experience-project-item__project-title">
            <p class="header-2">{{nameOfTask}}</p>
        </div>
        <div class="work-experience-project-item__role-block">
            <p class="paragraph-secondary-semibold">{{roleTitle}}</p>
            <p class="paragraph-secondary-regular">{{roleDescription}}</p>
        </div>
        <div class="work-experience-project-item__duties-block">
            <p class="paragraph-secondary-semibold">Задачі</p>
            <ul>
                <li v-for="(taskItem, index) in taskList" :key ="index" class="paragraph-secondary-regular"> {{taskItem}} </li>
            </ul>
        </div>
        <div class="work-experience-job-item__link-block">
            <p class="paragraph-secondary-semibold">Посилання</p>
            <ul>
                <li v-for="(linkItem, index) in linkList" :key ="index" class="paragraph-secondary-regular"> {{linkItem}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: ['nameOfTask', 'roleTitle', 'roleDescription', 'taskList', 'linkList']
}
</script>