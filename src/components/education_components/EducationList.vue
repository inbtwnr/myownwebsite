<template>
    <div>
        <ul>
            <li v-for="(education, index) in educations" :key="index" class="education-block-item">
                <education-item
                :university-name="education.universityName"
                :graduation="education.graduation"
                :faculty="education.faculty"
                :speciality="education.speciality"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import EducationItem from './EducationItem.vue'
export default {
    name: 'EducationList',
    components:{
        EducationItem
    },
    data: function(){
        return {
            educations: [
                {
                    universityName: 'УЖНУ',
                    graduation: '2021',
                    faculty: 'Факультет математики та цифрових технологій.',
                    speciality: 'Прикладна математика. Бакалавр'
                }
            ]
        }
    }
}
</script>