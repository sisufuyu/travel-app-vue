export default {
  departureChange (state, city) {
    state.departureCity = city
    try {
      let cityStr = JSON.stringify(city)
      localStorage.setItem('departureCity', cityStr)
    } catch (e) {}
  }
}
