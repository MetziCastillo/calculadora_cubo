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
            Volumen del Cubo
        </h2>
    </header>

    <div class="min-h-screen flex flex-col bg-white">

        <main class="flex-1 flex flex-col gap-8 px-6 py-10 max-w-md mx-auto w-full">

            <section class="mt-2 mb-1 flex items-center gap-5">

                <div class="mt-3 w-12 h-12 rounded-full border-2 border-black self-start"
                    style="background-color: #FFD600;">
                </div>

                <div>
                    <p class="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        Fórmula
                    </p>

                    <p class="mt-1 text-2xl font-bold">
                        V = a³
                    </p>

                    <p class="mt-1 text-sm text-gray-500">
                        a = longitud de la arista
                    </p>
                </div>

            </section>

            <div class="flex flex-col gap-2">

                <label class="text-sm font-medium text-gray-500 uppercase tracking-widest">
                    Arista (a)
                </label>

                <input type="number"
                    inputmode="decimal"
                    min="0"
                    v-model="arista"
                    @input="resultado = null"
                    placeholder="0"
                    class="w-full border-2 border-black rounded-2xl px-5 py-4 text-3xl font-semibold outline-none focus:ring-2 focus:ring-blue-600 transition"
                    style="font-family: 'DM Mono', monospace;">

                <button @click="calcularVolumen"
                    class="mt-6 w-full py-4 rounded-2xl border-2 border-black text-white font-semibold text-base tracking-wide transition-transform active:scale-95 hover:brightness-90 cursor-pointer"
                    style="background-color: #e63329">

                    Calcular Volumen

                </button>

                <div v-if="resultado == null" class="mt-20 flex-1 flex items-center justify-center">

                    <p class="text-sm text-gray-400 text-center max-w-xs leading-relaxed">
                        Ingresa la medida de la arista y presiona calcular para ver el resultado.
                    </p>

                </div>

            </div>

            <div v-if="resultado != null"
                class="rounded-3xl border-2 border-black p-6 flex flex-col gap-3 bg-[#FFD600]">

                <p class="text-xs font-medium uppercase tracking-widest text-black/60">
                    Resultado
                </p>

                <p class="text-5xl font-bold text-black leading-none">
                    {{resultado}}

                    <span class="text-lg font-normal ml-1 text-black/70"
                        style="font-family: 'Fraunces', serif">
                        cm³
                    </span>
                </p>

                <p class="text-sm text-black/60 mt-1"
                    style="font-family: 'DM Mono', monospace">
                    ({{arista}})³ = {{resultado}}
                </p>

            </div>

        </main>

    </div>
</template>

<script>
import logica from '../js/volumen.js'

export default logica
</script>
