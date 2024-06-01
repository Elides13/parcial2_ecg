<template>
    <div class="serie-form">
        <h2>{{ isEditing ? 'Actualizar Serie' : 'Crear Nueva Serie' }}</h2>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="titulo">Título:</label>
                <input type="text" id="titulo" v-model="form.titulo" required>
            </div>
            <div class="form-group">
                <label for="sipnosis">Sinopsis:</label>
                <textarea id="sipnosis" v-model="form.sipnosis" required></textarea>
            </div>
            <div class="form-group">
                <label for="director">Director:</label>
                <input type="text" id="director" v-model="form.director" required>
            </div>
            <div class="form-group">
                <label for="temporadas">Temporadas:</label>
                <input type="number" id="temporadas" v-model.number="form.temporadas" required>
            </div>
            <div class="form-group">
                <label for="fechaEstreno">Fecha de Estreno:</label>
                <input type="date" id="fechaEstreno" v-model="form.fecha_estreno" required>
            </div>
            <button type="submit">{{ isEditing ? 'Actualizar' : 'Crear' }} Serie</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SerieForm',
    props: {
        serie: {
            type: Object,
            required: false,
            default: null
        }
    },
    data() {
        return {
            form: this.serie ? { ...this.serie } : {
                titulo: '',
                sipnosis: '',
                director: '',
                temporadas: null,
                fecha_estreno: ''
            }
        };
    },
    computed: {
        isEditing() {
            return !!this.serie;
        }
    },
    methods: {
        submitForm() {
            if (this.isEditing) {
                this.$emit('serie-actualizada', this.form);
            } else {
                this.$emit('serie-creada', this.form);
            }
            this.resetForm();
        },
        resetForm() {
            this.form = {
                titulo: '',
                sipnosis: '',
                director: '',
                temporadas: null,
                fecha_estreno: ''
            };
        }
    }
};
</script>

<style scoped>
.serie-form {
    max-width: 500px;
    margin: auto;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
textarea,
input[type="number"],
input[type="date"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
}
</style>