<template>
    <div class="paragraph1">
        <ul class="listJobsWrapper">
            <li v-for="(job) in jobs" :key = "job.id" class="jobInfoBlock">
                <div class="companyInfoRow">
                    <h3>{{ job.nameOfJob }}</h3> <p class="paragraph2"> {{job.startOfWorking}} — {{job.endOfWorking}}</p>
                </div>
                <div class="aboutJobBlock">
                    <h4>{{ job.position }}</h4>
                    <p class="paragraph2"> {{job.aboutJob}} </p>
                </div>
                <div class="aboutWorkingBlock"> 
                    <h4>В мої обов'язки входило:</h4>
                    <ul>
                        <li v-for="act in job.acts" :key="act.id" class="paragraph2">{{act}}</li>
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
                    aboutJob: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla, mi dictum neque ultrices maximus diam. In proin iaculis venenatis diam purus dis nostra volutpat auctor ornare.',
                    acts: [ 
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

