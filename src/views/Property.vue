<template>
    <v-container fluid> 
    </v-container>
</template>

<script>

export default {
    name: "Property",
    components: {
    },
    data () {
        return {
            feasibilityLevels: ['Low', 'Medium', 'High'],
            selectedFeasibilityLevel: ['High'],
        }
    }
}

</script>

<style>
.text_input {
    margin-left: -1.7vw
}
.number_input {
    margin-left: -14vw
}
.column_1 {
    width: 30%
}
.column_2 {
    width: 20%
}
.column_3 {
    width: 15%
}
.column_4 {
    width: 15%
}
.column_5 {
    width: 20%
}
</style>
