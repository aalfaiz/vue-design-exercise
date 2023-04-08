<script setup lang="ts">
    import iconReaction from "@/assets/img/summary/icon-reaction.svg";
    import iconMemory from "@/assets/img/summary/icon-memory.svg";
    import iconVerbal from "@/assets/img/summary/icon-verbal.svg";
    import iconVisual from "@/assets/img/summary/icon-visual.svg";
</script>
<template>
  <div
    class="background h-screen w-screen flex md:justify-center md:items-center"
  >
    <div class="flex md:flex-row md:justify-center md:items-center flex-col w-full md:max-w-2xl
    bg-white md:drop-shadow-2xl md:rounded-3xl">
      <div
        class="flex flex-col bg-gradient-to-b from-light-slate-blue
         to-light-royal-blue from-10% rounded-b-3xl md:rounded-xl justify-center items-center
           mb-5 md:mb-0 md:max-w-xs" 
      >
        <p class="mt-6 title font-bold text-center">Your Result</p>
        <div class="rounded-full  w-28 h-28 bg-gradient-to-b
         from-light-royal-blue 
          flex justify-center items-center flex-col my-8">
          <p class="text-white text-4xl mb-1 font-bold">76</p>
          <p class="text-slate-400 text-xs">of 100</p>
        </div>
        <p class="text-2xl font-bold text-slate-100 mb-5">Great</p>
        <p class="text-md text-slate-300 mx-16 mb-5 text-center">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div class="mx-10 grow">
        <p class="font-bold text-lg text-slate-500 mb-2">Summary</p>
        <div class="rounded-md w-full bg-red-100 h-12 flex flex-row items-center mb-3">
            <img :src="iconReaction" width="20" height="20" class="mx-4" />
            <p class="font-bold text-red-400">Reaction</p>
            <p class="grow text-right mr-5 text-slate-500"><span class="font-bold">80</span> / 100</p>
        </div>
        <div class="rounded-md w-full bg-yellow-100 h-12 flex flex-row items-center mb-3">
            <img :src="iconMemory" width="20" height="20" class="mx-4" />
            <p class="font-bold text-yellow-500">Memory</p>
            <p class="grow text-right mr-5 text-slate-500"><span class="font-bold">92</span> / 100</p>
        </div>
        <div class="rounded-md w-full bg-green-100 h-12 flex flex-row items-center mb-3">
            <img :src="iconVerbal" width="20" height="20" class="mx-4" />
            <p class="font-bold text-green-500">Verbal</p>
            <p class="grow text-right mr-5 text-slate-500"><span class="font-bold">61</span> / 100</p>
        </div>
         <div class="rounded-md w-full bg-purple-100 h-12 flex flex-row items-center mb-3">
            <img :src="iconVisual" width="20" height="20" class="mx-4" />
            <p class="font-bold text-purple-500">Visual</p>
            <p class="grow text-right mr-5 text-slate-500"><span class="font-bold">72</span> / 100</p>
        </div>
        <button class="rounded-full bg-indigo-950 hover:bg-light-royal-blue text-slate-100 h-12 w-full mt-3">Continue</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.background {
  background-color: hsl(0, 0%, 100%);
}
.summary {
  background-color: hsl(0, 0%, 100%);
}
.title {
  color: #c8c7ff;
}
.container {

}
</style>
