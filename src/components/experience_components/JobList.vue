<template>
    <div class="work-experience-job-list">
        <p class="paragraph-primary-semibold">Робота в компаніях</p>
        <ul class="work-experience-list-wrapper">
            <li v-for="(job, index) in jobs" :key ="index">
                <job-item
                    :name-of-job="job.nameOfJob"
                    :start-of-working="job.startOfWorking"
                    :end-of-working="job.endOfWorking"
                    :position="job.position"
                    :job-description="job.jobDescription"
                    :duties="job.duties"
                ></job-item>
            </li>
        </ul>
    </div>
</template>

<script>
import JobItem from './JobItem.vue'

export default {
    name: 'JobList',
    components:{
        JobItem,
    },
    data() {
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