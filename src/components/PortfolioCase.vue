<template>
    <div class="caseCard">
        <div>
            <div class="innerCardInfo">
                <h3>{{ title }}</h3>
                <p class="paragraph2"> {{ text }} </p>
            </div>
            <ul class="projectLinkList">
                <li v-for="link in links" :key="link.id">
                    <a :href="link.url">{{link.label}}</a>
                </li>
            </ul>
        </div>
        <div>
            <img :src="imgOfProject" alt="No Photo" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioCase',
    props: ['title', 'text', 'imgOfProject', 'links'],
}
</script>