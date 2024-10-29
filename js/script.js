const app = Vue.createApp({
    data() {
        return {
            step: 0,
            answers: [],
            questions: [
                {
                    question: "1. ¿Cómo prefieres pasar tu tiempo libre?",
                    options: [
                        { text: "En mi cama con una mantita", value: "relajado" },
                        { text: "Jugar con amigos", value: "juguetón" },
                        { text: "Explorando lugares nuevos", value: "aventurero" },
                        { text: "Pasar tiempo con mis amigos", value: "tierno" }
                    ]
                },
                {
                    question: "2. Si fueras a un lugar, ¿cuál elegirías?",
                    options: [
                        { text: "Una acogedora cama", value: "relajado" },
                        { text: "Un parque lleno de juegos", value: "juguetón" },
                        { text: "Un lugar lleno de acción y sorpresas", value: "aventurero" },
                        { text: "Un lugar tranquilo para descansar con mis seres queridos", value: "tierno" }
                    ]
                },
                {
                    question: "3. ¿Cuál es tu comida favorita?",
                    options: [
                        { text: "Un delicioso plato de pasta", value: "relajado" },
                        { text: "Un sabroso plato de pollito", value: "juguetón" },
                        { text: "Comida exótica y picante", value: "aventurero" },
                        { text: "Un postre suave y dulce", value: "tierno" }
                    ]
                },
                {
                    question: "4. ¿Cómo te describirías en una palabra?",
                    options: [
                        { text: "Relajad@ (tranquilo y despreocupado)", value: "relajado" },
                        { text: "Activ@ (lleno de energía)", value: "juguetón" },
                        { text: "Curios@ (siempre explorando)", value: "aventurero" },
                        { text: "Tiern@ (amable y cariñoso)", value: "tierno" }
                    ]
                },
                {
                    question: "5. ¿Qué tipo de música prefieres escuchar?",
                    options: [
                        { text: "Música suave y tranquila", value: "relajado" },
                        { text: "Ritmos animados y energéticos", value: "juguetón" },
                        { text: "Sonidos de la naturaleza", value: "aventurero" },
                        { text: "Canciones románticas y nostálgicas", value: "tierno" }
                    ]
                },
                {
                    question: "6. ¿Como te sientes en un dia lluvioso?",
                    options: [
                        { text: "Me quedo en casa leyendo un libro", value: "relajado" },
                        { text: "Juego dentro de casa", value: "juguetón" },
                        { text: "Salgo a caminar bajo la lluvia", value: "aventurero" },
                        { text: "Hablo con mis amigos", value: "tierno" }
                    ]
                },
                {
                    question: "7. Si pudieras tener un superpoder, ¿cuál elegirías?",
                    options: [
                        { text: "Poder teletransportarse a la cama", value: "relajado" },
                        { text: "Ser super rápido", value: "juguetón" },
                        { text: "Hablar con los animales", value: "aventurero" },
                        { text: "Hacer que todos me quieran", value: "tierno" }
                    ]
                },
                {
                    question: "8. ¿Qué tipo de película prefieres?",
                    options: [
                        { text: "Un documental tranquilo", value: "relajado" },
                        { text: "Una comedia divertida", value: "juguetón" },
                        { text: "Una aventura épica", value: "aventurero" },
                        { text: "Una romántica o familiar", value: "tierno" }
                    ]
                }
            ],
            resultMessage: '',
            resultImage: ''
        };
    },
    methods: {
        nextStep() {
            if (this.step < this.questions.length) {
                this.step++;
            }

            if (this.step === this.questions.length) {
                this.calculateResult();
            }
        },
        calculateResult() {
            const resultCounts = {
                relajado: 0,
                juguetón: 0,
                tierno: 0,
                aventurero: 0
            };

            this.answers.forEach(answer => {
                if (answer) {
                    resultCounts[answer]++;
                }
            });

            const resultType = Object.keys(resultCounts).reduce((a, b) => resultCounts[a] > resultCounts[b] ? a : b);
            this.resultMessage = `Eres un gatito ${resultType}!`;

            // Cambia la imagen según el resultado
            this.resultImage = this.getImageForResult(resultType);
        },
        getImageForResult(type) {
            const images = {
                relajado: 'img/tranquilo.png',
                juguetón: 'img/jugueton.png',
                tierno: 'img/tierno.png',
                aventurero: 'img/aventurero.png'
            };
            return images[type] || '';
        },
        reset() {
            this.step = 0;
            this.answers = [];
            this.resultMessage = '';
            this.resultImage = '';
        }
    }
});

app.mount('#contenido');
