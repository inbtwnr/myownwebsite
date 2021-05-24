<template>    
    <ul class="skill-list-block">
        <li v-for="(category, index) in categories" 
            :key="index" >
            <skills-item 
                :skill-category="category.skillCategory"
                :skills="category.skills"
            ></skills-item>
        </li>
    </ul>
</template>

<script>
import SkillsItem from './SkillsItem.vue'

export default {
    name: 'SkillsList',
    components:{ SkillsItem },
    data() {
        return {
            categories:[
                { 
                    skillCategory: 'Interactive Design',
                    skills: [
                     "Design Research", "Design Systems", "Prototyping", "Layout"   
                    ]
                },
                {
                    skillCategory: 'Інструменти, які я використовую',
                    skills: [
                        "Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Visual Studio Code"
                    ]
                },
                { 
                    skillCategory: 'Frontend',
                    skills: [
                        "HTML & CSS", "Sass", "Vue.JS", "Node.JS", "JavaScript", "Github"
                    ]
                },
                { 
                    skillCategory: 'Рівні володіння мови',
                    skills: [
                        "English – intermediate lever", "Українська – рідна", "Російська – вільне володіння"
                    ]
                },
                { 
                    skillCategory: '«Soft skills»',
                    skills: [
                        "Креативне і аналітичне мислення","емпатія","витривалість"
                    ]
                },
            ]
        }
    }
}
</script>

<style></style>