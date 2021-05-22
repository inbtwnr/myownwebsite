<template>
    <div class="textblock">
        <h2> {{ aboutMeHeader }} </h2>
        <p class="paragraph1"> {{ aboutMeText }} </p>
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
