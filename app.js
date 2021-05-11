new Vue({
	el: '#app',
	data: {
    playerLife: 15,
    monsterLife: 0,

	},
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0
    }
  }
});