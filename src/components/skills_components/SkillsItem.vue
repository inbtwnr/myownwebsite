<template>
    <div class="skill-item-block">
        <div class="skill-item-block-title"> 
            <p class="paragraph-secondary-semibold">
                {{ skillCategory }}
            </p>
        </div> 
        <ul class = "skill-item-block-list">
            <li v-for="(skill, index) in skills" :key = "index">
                <p class="paragraph-secondary-regular">
                    {{ skill }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SkillsItem',
    props: ['skillCategory', 'skills']
}
</script>