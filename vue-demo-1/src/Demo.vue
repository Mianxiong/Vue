<template>
    <div class="red">
       {{message}}
    </div>
</template>
<script>
//视图之外的其它选项
export default {
    props: ['message']
}
</script>

<style scoped>
.red{
    color:red;
}

</style>