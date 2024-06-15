<script setup>
import { ref } from 'vue'

const open = ref(false)

</script>

<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
            <button @click="open = false">Close</button>
    </div>
    <slot name="footer">
            <div>
              <button @click.stop="emit('modal-close')"></button>
            </div>
          </slot>
</Teleport>
</template>

<style scoped>

.modal {
    position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #0a1963;
}

</style>