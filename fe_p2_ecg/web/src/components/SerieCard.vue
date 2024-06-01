<template>
    <div class="serie-card">
        <h2>{{ serie.titulo }}</h2>
        <p><strong>Sinopsis:</strong> {{ serie.sipnosis }}</p>
        <p><strong>Director:</strong> {{ serie.director }}</p>
        <p><strong>Temporadas:</strong> {{ serie.temporadas }}</p>
        <p><strong>Fecha de Estreno:</strong> {{ formattedFechaEstreno }}</p>
        <button class="boton" @click="borrarSerie">Borrar</button>
        <button class="boton" @click="irAFormActualizar">Actualizar</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SerieCard',
    props: {
        serie: {
            type: Object,
            required: true
        }
    },
    computed: {
        formattedFechaEstreno() {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(this.serie.fecha_estreno).toLocaleDateString(undefined, options);
        }
    },
    methods: {
        async borrarSerie() {
            try {
                // Realiza la solicitud DELETE al endpoint de la API para borrar la serie
                await axios.delete(`http://localhost:3000/api/series/${this.serie.id}`);
                //actualizar la pagina
                this.$router.go();
                // Emitir un evento para indicar al componente padre que la serie ha sido borrada
                this.$emit('serie-borrada', this.serie.id);
            } catch (error) {
                console.error('Error al borrar la serie:', error);
            }
        },
        irAFormActualizar() {
            this.$router.push({ name: 'formActualizar', params: { id: this.serie.id } });
        }
    }
};

</script>

<style scoped>
.serie-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s;
}

.serie-card:hover {
    transform: translateY(-5px);
}

.serie-card h2 {
    margin-top: 0;
    color: #2c3e50;
}

.serie-card p {
    margin: 5px 0;
    color: #34495e;
}

.serie-card p strong {
    color: #2980b9;
}

.boton {
    display: inline-block;
    padding: 10px 20px;
    background-color: #42b983;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
}
</style>