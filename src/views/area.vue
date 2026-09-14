<template>
    <header class="sticky top-0 z-10 bg-white border-b-2 border-black flex items-center h-14 px-4">
        <button @click="regresar()"
            class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-black hover:bg-yellow-300 transition-colors duration-150 cursor-pointer"
            aria-label="Volver">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M14 5l-6 6 6 6" stroke="#111111" strokeWidth="2.2" strokeLinecap="round"
                    strokeLinejoin="round" />
            </svg>
        </button>
        <h2 class="absolute left-1/2 -translate-x-1/2 text-base font-semibold tracking-wide">
            Área del Cubo
        </h2>
    </header>
    <div class="min-h-screen flex flex-col bg-white">

        <main class="flex-1 flex flex-col gap-8 px-6 py-10 max-w-md mx-auto w-full">

            <div class="w-12 h-12 rounded-full border-2 border-black self-start" style="background-color: #FFD600;">
            </div>

            <div class="flex flex-col gap-2">
                <label class="text-sm font-medium text-gray-500 uppercase tracking-widest">
                    Arista (a)
                </label>
                <input type="number" inputmode="decimal" min="0" v-model="arista" @input="resultado = null"
                    placeholder="0"
                    class="w-full border-2 border-black rounded-2xl px-5 py-4 text-3xl font-semibold outline-none focus:ring-2 focus:ring-blue-600 transition"
                    style="font-family: 'DM Mono', monospace;">
                <button @click="calcularArea"
                    class="w-full py-4 rounded-2xl border-2 border-black text-white font-semibold text-base tracking-wide transition-transform active:scale-95 hover:brightness-90 cursor-pointer"
                    style="background-color: #e63329">
                    Calcular Área
                </button>

                <div v-if="resultado == null" class="flex-1 flex items-center justify-center">
                    <p class="text-sm text-gray-400 text-center max-w-xs leading-relaxed">
                        Ingresa la medida de la arista y presiona calcular para ver el resultado.
                    </p>
                </div>

            </div>

            <div class="rounded-3xl border-2 border-black p-6 flex flex-col gap-3">
                <p class="text-xs font-medium uppercase tracking-widest text-black/60">
                    Resultado
                </p>
                <p class="text-5xl font-bold text-black leading-none">
                    {{resultado}} <span class="text-lg font-normal ml-1 text-black/70"
                        style="font-family: 'Fraunces', serif">cm²</span>
                </p>
                <p class="text-sm text-black/60 mt-1" style="font-family: 'DM Mono', monospace">
                    6 * ({{arista}})² = 6 * (a)²
                </p>
            </div>

        </main>
    </div>
</template>

<script>
    import logica from '../js/area.js'

    export default logica
</script>