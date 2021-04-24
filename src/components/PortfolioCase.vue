<template>
    <div class="caseCard">
        <div>
            <div class="innerCardInfo">
                <h3>{{title}}</h3>
                <p class="paragraph2"> {{ text }} </p>
            </div>
            <div class="projectLinkList">
                <a src="behanceLink">behance</a>
                <a :src="github">github</a>
                <a :src="website">вебсайт проекту</a>
            </div>
        </div>
        <div>
            <img src="../images/image1.jpg" width="524px" alt="No Photo" />
        </div>
    </div>
</template>

<script>
export default {
    data:  function () {
        return {
            title: 'LinkBase v1.0',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, litora metus porta integer consequat quisque fringilla, mi dictum neque ultrices maximus diam. In proin iaculis venenatis diam purus dis nostra volutpat auctor ornare, convallis vestibulum posuere varius eget dictumst aliquet potenti tristique mollis condimentum, laoreet enim arcu metus odio nullam maximus aenean pharetra.',
            imgOfProject: 'images/image1.jpg',
            links: [ {
                behanceLink: 'https://behance.net/',
                github: 'https://github.com/',
                website: ''
            } ]
        }
    }
}
</script>