export default {
    data() {
        return {

            titulos: [
                {
                    id: 'area',
                    texto: 'Área superficial',
                },
                {
                    id: 'perimetro',
                    texto: 'Perímetro total'
                },
                {
                    id: 'volumen',
                    texto: 'Volumen'
                }
            ]

        }
    },
    mounted() {

    },
    methods: {

        redireccionar(direccion) {
            console.log("direccion: " + direccion)

            
            switch (direccion) {
                case 'area':
                   this.$router.push('/area')
                    break;
            
                default:
                    break;
            }

        }
    }
}