<script>
  import routes from '../js/app.js'
  export default routes
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">

    <header class="sticky top-0 z-10 bg-white border-b-2 border-black flex items-center justify-center h-14 px-6">
      <h1 class="text-base font-semibold tracking-wide"> GeoCalc </h1>
    </header>

    <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div class="absolute top-24 right-8 w-32 h-32 rounded-full border-2 border-black opacity-10"></div>
      <div class="absolute bottom-24 left-6 w-20 h-20 border-2 border-black opacity-10 rotate-12"></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-black opacity-5">
      </div>
    </div>

    <main class="flex-1 flex flex-col items-center justify-center px-6 py-12 gap-10 relative">
      <div class="text-center flex flex-col gap-2">
        <p class="text-xs font-medium uppercase tracking-widest text-gray-400">
          Geometría · Cuerpos sólidos
        </p>
        <h2 class="text-4xl font-bold leading-tight">
          Calculadora
        </h2>
      </div>

      <div class="w-full max-w-sm border-2 border-black rounded-3xl p-8 bg-white flex items-center gap-6">
        <div class="shrink-0">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="36,6 66,22 66,50 36,66 6,50 6,22" fill="#ffd600" stroke="#111111" strokeWidth="2.5"
              strokeLinejoin="round" />
            <polygon points="36,6 66,22 36,38 6,22" fill="#ffffff" stroke="#111111" strokeWidth="2.5"
              strokeLinejoin="round" />
            <polygon points="36,38 66,22 66,50 36,66" fill="#e8e4dc" stroke="#111111" strokeWidth="2.5"
              strokeLinejoin="round" />
            <polygon points="36,38 6,22 6,50 36,66" fill="#c8c4bc" stroke="#111111" strokeWidth="2.5"
              strokeLinejoin="round" />
            <line x1="36" y1="6" x2="36" y2="38" stroke="#111111" strokeWidth="2" strokeDasharray="4 3" />
          </svg>
        </div>
        <div class="flex flex-col gap-1 text-left flex-1">
          <span class="text-2xl font-bold">
            Cubo
          </span>
          <span class="text-sm text-gray-500">
            Área · Perímetro · Volumen
          </span>
        </div>
      </div>

      <!-- opciones -->
      <div v-for="titulo in titulos" :key="titulo" class="w-full max-w-sm flex flex-col gap-3">
        <button @click="redireccionar(titulo.id)" class="w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl border-2 border-black bg-white
        hover:translate-x-1 hover:-translate-y-0.5 transition-transform duration-150 cursor-pointer">
          <span class="w-3 h-3 rounded-full border border-black shrink-0"></span>
          
          <span class="text-sm font-medium flex-1 text-left"> {{titulo.texto}}</span>
        
          
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 5l5 5-5 5" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </main>

  </div>

</template>