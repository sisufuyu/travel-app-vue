let departureCity = {
  'id': 1,
  'spell': 'Beijing',
  'name': '北京'
}
try {
  if (localStorage.getItem('departureCity')) {
    departureCity = JSON.parse(localStorage.getItem('departureCity'))
  }
} catch (e) {}

export default {
  departureCity
}
