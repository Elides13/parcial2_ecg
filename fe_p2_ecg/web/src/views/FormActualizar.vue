<template>
    <div class="form-actualizar">
        <h1>Actualizar Serie</h1>
        <serie-form v-if="serie" :serie="serie" @serie-actualizada="actualizarSerie"></serie-form>
        <p v-else>{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';
import SerieForm from '@/components/SerieForm.vue';

export default {
    name: 'FormActualizar',
    components: {
        SerieForm
    },
    data() {
        return {
            serie: null,
            error: null
        };
    },
    created() {
        this.fetchSerie();
    },
    methods: {
        async fetchSerie() {
            try {
                const response = await axios.get(`http://localhost:3000/api/series/${this.$route.params.id}`);
                this.serie = response.data;
            } catch (error) {
                this.error = 'Error fetching serie: ' + error.message;
                console.error('Error fetching serie:', error);
            }
        },
        async actualizarSerie(datosActualizados) {
            try {
                await axios.patch(`http://localhost:3000/api/series/${this.$route.params.id}`, datosActualizados);
                // Aquí puedes realizar alguna acción adicional después de actualizar la serie
                console.log('Serie actualizada correctamente');
            } catch (error) {
                console.error('Error al actualizar la serie:', error);
            }
        }
    }
};
</script>

<style scoped>

.form-actualizar{
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s;
}

</style>
