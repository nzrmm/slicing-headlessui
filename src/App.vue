<template>
    <div class="antialiased bg-gray-900 text-white min-h-screen">
        <nav class="mb-4">
            <div class="container py-6 mx-auto flex justify-between items-center border-b border-gray-800">
                <div class="flex items-center">
                    <div
                        class="w-10 h-10 -rotate-12 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                        N
                    </div>
                    <a href="#" class="text-xl font-bold">Nzrm<span class="text-teal-500">m .</span></a>
                </div>
                <a href="https://github.com/tailwindlabs/headlessui" class="w-6 h-6 rounded-full bg-teal-700 hover:bg-teal-500 flex justify-center items-center">
                    <svg class="feather feather-github" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </div>
        </nav>

        <main class="container mx-auto">
            <div class="py-20 text-3xl w-8/12 font-bold">
                Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
            </div>

            <div class="px-2 py-4">
                <ul class="flex space-x-8">
                    <li><a href="#" class="py-2 text-xl font-medium border-b-2 border-teal-500">React</a></li>
                    <li><a href="#" class="py-2 text-xl font-medium text-white/60">Vue</a></li>
                </ul>
            </div>

            <div class="flex flex-wrap -mx-4">
                <div class="w-3/12 px-4 py-4 mb-6">
                    <div class="w-full mb-4 bg-gradient-to-r from-violet-500 to-blue-400 h-40 rounded-xl flex justify-center items-center">
                         <div
                            class="px-6 py-4 bg-white opacity-25 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                            <span class="text-violet-900">Dropdown</span>
                        </div>
                    </div>
                    <span class="ml-2 font-medium">Menu (Dropdown)</span> 
                </div>

                <div class="w-3/12 px-4 py-4 mb-6">
                    <div class="w-full mb-4 bg-gradient-to-r from-amber-400 to-orange-500 h-40 rounded-xl flex justify-center items-center">
                        <div
                            class="px-6 py-4 bg-white opacity-25 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                            <span class="text-amber-900">Select</span>
                        </div>
                    </div>
                    <span class="ml-2 font-medium">Listbox (Select)</span> 
                </div>

                <div class="w-3/12 px-4 py-4 mb-6">
                    <div class="w-full mb-4 bg-gradient-to-r from-green-500 to-teal-500 h-40 rounded-xl flex justify-center items-center">
                        <div
                            class="px-6 py-4 bg-white opacity-25 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                            <span class="text-green-900">Toggle</span>
                        </div>
                    </div>
                    <span class="ml-2 font-medium">Switch (Toggle)</span> 
                </div>

                <div class="w-3/12 px-4 py-4 mb-6">
                    <div class="w-full mb-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 h-40 rounded-xl flex justify-center items-center">
                         <div
                            class="px-6 py-4 bg-white opacity-25 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                            <span class="text-fuchsia-900">Disclosure</span>
                        </div>
                    </div>
                    <span class="ml-2 font-medium">Disclosure</span> 
                </div>

                <div class="w-3/12 px-4 py-4 mb-6">
                    <div class="w-full mb-4 bg-gradient-to-r from-sky-400 to-blue-600 h-40 rounded-xl flex justify-center items-center">
                         <div
                            class="px-6 py-4 bg-white opacity-25 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                            <span class="text-sky-900">Modal</span>
                        </div>
                    </div>
                    <span class="ml-2 font-medium">Dialog (Modal)</span> 
                </div>

                <div class="w-3/12 px-4 py-4 mb-6">
                    <div class="w-full mb-4 bg-gradient-to-r from-orange-400 to-rose-500 h-40 rounded-xl flex justify-center items-center">
                        <div
                            class="px-6 py-4 bg-white opacity-25 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                            <span class="text-orange-900">Popaver</span>
                        </div>
                    </div>
                    <span class="ml-2 font-medium">Popaver</span> 
                </div>
                <div class="w-3/12 px-4 py-4 mb-6">
                    <div class="w-full mb-4 bg-gradient-to-r from-sky-400 to-sky-500 h-40 rounded-xl flex justify-center items-center">
                          <div
                            class="px-6 py-4 bg-white opacity-25 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                            <span class="text-sky-900">Radio Group</span>
                        </div>
                    </div>
                    <span class="ml-2 font-medium">Radio Group</span> 
                </div>
                <div class="w-3/12 px-4 py-4 mb-6">
                    <div class="w-full mb-4 bg-gradient-to-r from-pink-500 to-rose-500 h-40 rounded-xl flex justify-center items-center">
                          <div
                            class="px-6 py-4 bg-white opacity-25 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                            <span class="text-pink-900">Transition</span>
                        </div>
                    </div>
                    <span class="ml-2 font-medium">Transition</span> 
                </div>
                 <div class="w-3/12 px-4 py-4 mb-6">
                    <div class="w-full mb-4 bg-gradient-to-r from-sky-500 to-blue-600 h-40 rounded-xl flex justify-center items-center">
                          <div
                            class="px-6 py-4 bg-white opacity-25 rounded-xl shadow flex justify-center items-center font-bold mr-4">
                            <span class="text-sky-900">Tabs</span>
                        </div>
                    </div>
                    <span class="ml-2 font-medium">Tabs</span> 
                </div>
            </div>
        </main>

        <footer>
            <div class="container py-16 mx-auto border-t border-gray-800">
                Website <a href="https://headlessui.dev/" class="font-bold text-teal-500 hover:text-teal-300">headlessui.dev</a>, slicing by <span class="font-bold text-teal-500">Muhammad Gata</span>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>

</style>