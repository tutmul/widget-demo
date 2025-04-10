// src/embed.js
import { createApp } from 'vue'
import ChatWidget from './components/ChatWidget.vue'
import './styles/widget.css' // Import your global CSS

const mountWidget = () => {
  const el = document.createElement('div')
  el.id = 'my-chat-widget'
  document.body.appendChild(el)

  const app = createApp(ChatWidget)
  app.mount(el)
}

mountWidget()
