export default {
    data() {
        return {
            arista: 0,
            resultado: null
        }
    },

    methods: {
        calcularArea() {
            
            this.resultado = 6 * (this.arista * 2)
        },
        regresar() {
            this.$router.push('/')
        }
    }
}