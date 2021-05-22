<template>    
    <ul class="skill-list-block">
        <li v-for="(category, index) in categories" :key="index" class = "skill-item-block">
            <div class="skill-item-block-title"> 
                <p class="paragraph-secondary-semibold">
                    {{ category.skillCategory }}
                </p>
            </div> 
            <ul class = "skill-item-block-list">
                <li v-for="(skill) in category.skills" :key = "skill.id">
                    <p class="paragraph-secondary-regular">
                        {{ skill }}
                    </p>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>

export default {
    name: 'SkillsList',
    data() {
        return {
            categories: [
                { 
                    skillCategory: 'Interactive Design',
                    skills: [
                     "Design Research", "Design Systems", "Prototyping", "Layout"   
                    ]
                },
                {
                    skillCategory: 'Інструменти, які я використовую',
                    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Visual Studio Code"]
                },
                { 
                    skillCategory: 'Frontend',
                    skills: ["HTML & CSS", "Sass", "VueJS", "NodeJS", "JavaScript", "Github"]
                },
                { 
                    skillCategory: 'Рівні володіння мови',
                    skills: ["English – Intermediate lever", "Українська – рідна", "Російська – вільне володіння"]
                },
                { 
                    skillCategory: '«Soft skills»',
                    skills: ["Креативне і аналітичне мислення","емпатія","витривалість"]
                },
            ]
        }
    }
}
</script>