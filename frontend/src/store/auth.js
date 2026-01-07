import { ref } from 'vue'

export const isLoggedIn = ref(
  localStorage.getItem('isLoggedIn') === 'true'
)

export const logout = () => {
  localStorage.removeItem('isLoggedIn')
  isLoggedIn.value = false
}
