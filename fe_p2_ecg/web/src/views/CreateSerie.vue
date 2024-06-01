<template>
    <div class="crear-serie">
        <h1>Crear Nueva Serie</h1>
        <serie-form @serie-creada="guardarSerie"></serie-form>
    </div>
</template>

<script>
import SerieForm from '@/components/SerieForm.vue'; 
import axios from 'axios';

export default {
    name: 'CrearSerie',
    components: {
        SerieForm
    },
    methods: {
        async guardarSerie(serie) {
            try {
                // Realiza la solicitud POST al endpoint de la API para crear una nueva serie
                const response = await axios.post('http://localhost:3000/api/series', serie);

                // Si la solicitud se completa con éxito, puedes mostrar un mensaje de éxito o realizar cualquier otra acción necesaria
                console.log('Serie creada con éxito:', response.data);
            } catch (error) {
                // Si ocurre un error durante la solicitud, puedes manejarlo aquí
                console.error('Error al crear la serie:', error);
            }
        }
    }
};
</script>

<style scoped>
.crear-serie {
    max-width: 800px;
    margin: auto;
    text-align: center;
}
</style>