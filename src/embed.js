// src/embed.js
import { createApp } from 'vue'
import ChatWidget from './components/ChatWidget.vue'

const mountWidget = () => {
  const el = document.createElement('div')
  el.id = 'my-chat-widget'
  document.body.appendChild(el)

  const app = createApp(ChatWidget)
  app.mount(el)
}

mountWidget()
