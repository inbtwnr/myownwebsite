<template>
    <div>
        <div class="education-block-item__primary">
            <div class="education-block-item__primary-title">
                <p class="paragraph-primary-semibold">{{universityName}}</p>
                <p class="paragraph-primary-semibold">{{faculty}}</p>
            </div>
            <p class="paragraph-secondary-regular">Дата завершення {{graduation}}р.</p>
        </div>
        <p class="paragraph-secondary-semibold">{{speciality}}</p>
    </div>
</template>

<script>
export default {
    name:'EducationItem',
    props:['universityName', 'graduation', 'faculty', 'speciality']
}
</script>