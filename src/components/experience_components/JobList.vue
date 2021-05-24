<template>
    <div class="work-experience-job-list">
        <p class="paragraph-primary-semibold">Робота в компаніях</p>
        <ul>
            <li v-for="(job) in jobs" :key = "job.id" class="work-experience-job-item">
                <div class="work-experience-job-item__job-title">
                    <p class="header-2">{{ job.nameOfJob }}</p>
                    <p class="paragraph-secondary-regular"> {{job.startOfWorking}} – {{job.endOfWorking}}</p>
                </div>
                <div class="work-experience-job-item__job-description">
                    <p class="paragraph-secondary-semibold">{{ job.position }}</p>
                    <p class="paragraph-secondary-regular"> {{job.jobDescription}} </p>
                </div>
                <div class="work-experience-job-item__duties-block"> 
                    <p class="paragraph-secondary-semibold"> В мої обов'язки входило: </p>
                    <ul>
                        <li v-for="(duty, index) in job.duties" :key="index" class="paragraph-secondary-regular">{{duty}}</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'JobList',
    data: function () {
        return {
            jobs: [
                {
                    nameOfJob: 'Sterna.studio',
                    startOfWorking: 'Серпень 2020',
                    endOfWorking: 'Дотепер',
                    position: 'Дизайнер інтерфейсів',
                    jobDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla, mi dictum neque ultrices maximus diam. In proin iaculis venenatis diam purus dis nostra volutpat auctor ornare.',
                    duties: [ 
                        'In proin iaculis venenatis diam purus dis nostra volutpat auctor ornare.',
                        'Lorem ipsum dolor sit amet.',
                        'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla.'
                    ]
                },
            ],  
        }
    }
}
</script>

<style> </style>