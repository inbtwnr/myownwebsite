<template>
    <div>
        <ul class="listUniWrapper">
            <li v-for="education in educations" :key="education.id">
                <div class="uniInfoRow">
                    <h3>{{ education.nameOfUniversity }}</h3> <p class="paragraph2"> {{education.startOfStyding}} — {{education.endOfStyding}}</p>
                </div>
                <div class="uniDetails">
                    <h4>{{ education.faculty }}</h4>
                    <p class="paragraph2">{{ education.speciality }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'EducationList',
    data: function(){
        return {
            educations: [
                {
                    nameOfUniversity: 'Ужгородський Національний університет',
                    startOfStyding: '2017',
                    endOfStyding: '2021',
                    faculty: 'Факультет математики та цифрових технологій.',
                    speciality: 'Спеціальність «Прикладна математика».'
                }
            ]
        }
    }
}
</script>