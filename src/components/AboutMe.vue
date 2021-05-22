<template>
    <div class="about-me-block">
        <p class="header-2"> {{ aboutMeHeader }} </p>
        <p class="paragraph-primary"> {{ aboutMeText }} </p>
    </div>
</template>
<script>
    export default {
        name: 'AboutMe',
        data(){
            return{
                aboutMeHeader:'Про мене',
                aboutMeText: 'Я дизайнер інтерфейсів. Цікавлюся проектуванням зручних веб сервісів та додатків. Допомагаю людям робити естетичні та зручні сайти, програми. Працюю як з версткою сайтів, так же можу робити дизайн системи. Одна з улюблених задач — типографіка на сайтах.'
            }
        }
    }
</script>
