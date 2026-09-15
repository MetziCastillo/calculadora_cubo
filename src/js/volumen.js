export default {
    data() {
        return {
            arista: 0,
            resultado: null
        }
    },

    methods: {
        calcularVolumen() {
            this.resultado = this.arista ** 3
        },

        regresar() {
            this.$router.push('/')
        }
    }
}
