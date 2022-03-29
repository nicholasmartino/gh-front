<template>
    <div id="plot_div" class="histogram"></div>
</template>


<script>
import * as dfd from 'danfojs'

export default {
    data () {
        return {
        }
    },
    methods: {
        async fetchData() {
        const areaCSV = "../data/FloorAreas.csv"
        const dfAreas = await dfd.readCSV(areaCSV)
        const layout = {
            bargap: 0,
            bargroupgap: 0.1,
            title: "Histogram",
            xaxis: { title: "Floor Area Category (m2)" },
            yaxis: { title: "Number of Units" }
        }
        dfAreas.plot("plot_div").hist({ layout })
        // this.chartData.labels = dfAreas.index.values
        // this.chartData.datasets[0].data = dfAreas['FloorAreas'].values
        console.log(dfAreas)
        },
    },
    mounted () {
        this.fetchData()
    }
}
</script>

<style>
.histogram {
  width: "100%";
  height: 40vh;
}
</style>
