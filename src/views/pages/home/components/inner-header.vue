<template>
    <header class="inner-header">
        <div class="back-btn" @click="goHome">
            <font-awesome-icon
                        :icon="['fal', 'long-arrow-left']"
                      />
        </div>
    </header>
</template>
<script>
export default {
    name: 'InnerHeader',
    data () {
        return {

        }
    },
    methods: {
        goHome() {
            this.$router.push("/home")
        }
    }
}
</script>