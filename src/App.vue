<template>
    <div class="antialiased bg-gray-900 text-white min-h-screen">
        <nav class="mb-4">
            <div class="container py-6 mx-auto flex justify-between items-center border-b border-gray-800">
                <div class="flex items-center">
                    <div
                        class="w-10 h-10 -rotate-12 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                        N
                    </div>
                    <a href="/" class="text-xl font-bold">Nzrm<span class="text-teal-500">m .</span></a>
                </div>
                <a href="https://github.com/tailwindlabs/headlessui" class="w-8 h-8 rounded-full hover:border-2 border-white/60 hover:border-white flex justify-center items-center">
                    <svg class="feather feather-github" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </div>
        </nav>

        <main class="container mx-auto">
            <div class="py-20 text-3xl w-12/12 text-center md:w-10/12 md:text-left lg:w-8/12 font-bold">
                Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
            </div>

            <div class="px-2 py-4">
                <Navigations />
            </div>

            <router-view></router-view>
        </main>

        <footer>
            <div class="container py-16 mx-auto text-center md:text-left border-t border-gray-800">
                Website <a href="https://headlessui.dev/" class="font-bold text-teal-500 hover:text-teal-300">headlessui.dev</a>, slicing by <span class="font-bold text-teal-500">Muhammad Gata</span>
            </div>
        </footer>
    </div>
</template>

<script>
    import Navigations from './components/Navigations.vue';

    export default {
        name : 'App',
        components : {
            Navigations
        }
    }
</script>