# Contexto

Esta aplicación consiste en seleccionar un personaje, co un nombre y al apretar el boton de snap, thanos desaparecera a la mitad de los heroes en pantalla, de esta forma luego de una animación comienza un efecto de desaparecer el personaje.

# Partes interesantes del codigo

Una de las partes interesantes del codigo es el efecto de desaparición de los personajes, este efecto se logra de manera nativa en vue y me parece importante compartirlo, el codigo es el siguiente.

Primero mostrando el html

```
<template>
  <div class="snapper">
    <div v-show="isSnapping" class="snapper__frames">
      <img
        v-for="frame in 3"
        :key="frame"
        ref="frames"
        :src="require(`@/assets/images/snap/frame-${frame}.jpg`)"
        :class="`snapper__frame snapper__frame-${frame}`"
      />
    </div>

    <button type="button" class="snapper__button elevation-3" @click="play">
      Snap
    </button>
  </div>
</template>
```
Luego el codigo js que realiza esta accion 

```
const timeline = this.$a.timeline({
    begin: () => {
        this.isSnapping = true;

        this.$emit('snap-begin');
    },
    complete: () => {
        this.isSnapping = false;

        this.$emit('snap-complete');
    },
});
```

Y finalmente el css asociado

```
$z-index: 2

.snapper__frames
  display: flex
  align-items: center
  justify-content: center

  background-color: rgba(0, 0, 0, 0.9)

  +p-fixed($z-index, 0, 0, 0, 0)

.snapper__frame
  position: absolute

.snapper__frame-1
  z-index: #{$z-index + 3}

  opacity: 0

.snapper__frame-2
  z-index: #{$z-index + 2}

  opacity: 0

.snapper__frame-3
  z-index: #{$z-index + 1}

  opacity: 0

.snapper__button
  font-family: 'Marvel';
  font-size: 2rem
  text-transform: uppercase;
  color: $c-white

  padding: .5em 1em

  background-color: $c-primary
  border-radius: 2px
  border: 1px $c-black solid

  transition: background-color .1s
  cursor: pointer

  &:hover
    background-color: lighten($c-primary, 5%)

```

# Instalar las dependencias
Se requiere instalar las dependencias con `yarn install`

# Para ejecutar
Para ejecutar el codigo se necesita correr ` yarn serve` y finalmente se abrira la aplicacion en `http://localhost:8080/`

