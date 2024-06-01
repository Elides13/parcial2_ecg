<template>
    <div class="AllSeries">
        <h1>{{ message }}</h1>
        <div v-if="error">{{ error }}</div>
        <div v-else class="series-container">
            <serie-card v-for="serie in series" :key="serie.id" :serie="serie"></serie-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import SerieCard from '../components/SerieCard.vue'; // Importa el componente SerieCard

export default {
    name: 'AllSeries',
    components: {
        SerieCard // Declara el componente SerieCard
    },
    data() {
        return {
            message: 'Lista de Series',
            series: [],
            error: null,
        }
    },
    created() {
        this.fetchSeries();
    },
    methods: {
        async fetchSeries() {
            try {
                const response = await axios.get('http://localhost:3000/api/series');
                this.series = response.data;
            } catch (error) {
                this.error = 'Error fetching series: ' + error.message;
                console.error('Error fetching series:', error);
            }
        }
    }
}
</script>

<style scoped>
.AllSeries {
    text-align: center;
    padding: 20px;
}

.series-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.serie-card {
    flex: 1 1 300px;
    /* Crecer, encoger, tamaño base */
    max-width: 300px;
    /* Asegurarse de que no crezcan demasiado */
}
</style>