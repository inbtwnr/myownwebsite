<template>
    <ul id="array-1">
        <li v-for="(category) in categories" :key = "category.id">
            {{ category.skillCategory }}: {{ category.skills }}
        </li>
    </ul>
</template>
<script>
export default {
    el: "#array-1",
    name: 'SkillsList',
    data: function () {
        return {
            categories: [
                { 
                    skillCategory: 'Interactive Design',
                    skills: 'Design Research, Design Systems, Prototyping, Layout.'
                },
                { 
                    skillCategory: 'Інструменти, які я використовую',
                    skills: 'Figma, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Visual Studio Code.'
                },
                { 
                    skillCategory: 'Frontend',
                    skills: 'HTML & CSS, VueJS, NodeJS, JavaScript, Github.'
                },
                { 
                    skillCategory: 'Рівні володіння мови',
                    skills: 'English – Intermediate lever, Українська – рідна, Російська – вільне володіння.'
                },
                { 
                    skillCategory: '«Soft skills»',
                    skills: 'креативне і аналітичне мислення, емпатія, витривалість.'
                },
            ]
        }
    }  
}
</script>