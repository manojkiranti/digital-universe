<template>
    <div class="page-wrap">
        <WebpageViewer src="https://onlineaccount.nicasiabank.com/" />
    </div>
</template>
<script>
import WebpageViewer from "./components/WebpageViewer.vue";

export default {
    name: 'OnlineAccount',
    components: {WebpageViewer}
}
</script>