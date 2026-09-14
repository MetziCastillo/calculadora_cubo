export default {
    data() {
        return {
            arista: 0,
            resultado: null
        }
    },

    methods: {
        calcularPerimetro() {
            
            this.resultado = 12 * (this.arista)
        },
        regresar() {
            this.$router.push('/')
        }
    }
}