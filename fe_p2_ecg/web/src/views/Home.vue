<template>
    <div class="home">
        <h1>Bienvenido a Nuestro Sitio Web</h1>
        <p>¡Explora nuestra colección de series y encuentra tu próximo programa favorito!</p>
        <router-link to="/series" class="boton">Descubrir Series</router-link>
        <router-link to="/CreateSerie" class="boton">Crear Serie</router-link>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 50px;
}

.home h1 {
    font-size: 2.5rem;
    color: #333;
}

.home p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
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

.boton:hover {
    background-color: #2c7a63;
}
</style>