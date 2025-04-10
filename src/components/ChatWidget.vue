<template>
  <div class="chat-widget">
    <div class="chat-header" @click="toggleChat">💬 Chat with us</div>

    <div v-if="isOpen" class="chat-body" @click.stop>
      <div class="messages">
        <div v-for="(msg, i) in messages" :key="i" class="message">
          {{ msg }}
        </div>
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const messages = ref([])
const newMessage = ref('')

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push(newMessage.value)
    newMessage.value = ''
  }
}
</script>

<style scoped>
.chat-widget {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 250px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-family: sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;
}

.chat-header {
  background: #007bff;
  color: white;
  padding: 10px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-weight: bold;
}

.chat-body {
  padding: 10px;
  border-top: 1px solid #ccc;
}

.messages {
  max-height: 150px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.message {
  background: #f1f1f1;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
}

input {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
