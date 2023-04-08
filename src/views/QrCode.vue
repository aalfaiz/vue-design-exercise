<script setup lang="ts">
import imgUrl from '@/assets/img/qrcode/image-qr-code.png';

const imageUrl = new URL('@/assets/img/qrcode/image-qr-code.png', import.meta.url).href
</script>

<template>
  <div class="background h-screen flex items-center justify-center ">
    <div class="bg-white p-4 rounded-3xl max-w-xs">
        <img :src="imageUrl" class="rounded-2xl w-80 mx-auto">
        <p class="mt-6 title flex text-2xl justify-center text-center
        font-weight font-bold break-normal ">Improve your front-end skills by building projects</p>
        <p class="my-4 subtitle flex justify-center text-center
        font-weight font-bold break-normal ">Scan the QR code to visit Frontend Mentor and take your coding
    skills to the next level</p>
    </div>
  </div>
</template>

<style scoped>
.background {
  background: #d6e2f0;
}
.title {
    color: #1F3251;
}
.subtitle {
    color: #7B879D;
}
</style>
