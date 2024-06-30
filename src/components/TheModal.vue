<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['modal-close'])
const target = ref(null)

onClickOutside(target, () => emit('modal-close'))
</script>

<template>
  <div v-if="props.isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <div>
              <button @click.stop="emit('modal-close')"></button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #034e7c28;
}

.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 600px;
  margin: 20px auto;
  padding: 20px 30px;
  background-color: #034e7c;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #ccb403;
}
</style>