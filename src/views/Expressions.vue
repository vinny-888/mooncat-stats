<template>
    <div class="home">
        <h1>COATS + EXPRESSIONS</h1>
        <div class="row">
            <canvas id="myChart"></canvas>
        </div>
    </div>
</template>

<script>
import stats from "../store/data/expressions.json";
const chartData = stats.map((d) => [d.score, d.count]);
chartData.sort((a,b)=>a[1]-b[1]);

const labels = [];
const dataset = [];

for (let i in chartData) {
    let v = chartData[i];

    labels.push(v[0]);
    dataset.push(v[1]);
}

const data = {
    labels: labels,
    datasets: [{
        label: 'Coats + Expressions',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataset,
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

export default {
    components: {},
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    async mounted() {
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );

    }
}
</script>