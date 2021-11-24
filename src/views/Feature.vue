<template>
    <div class="flex flex-wrap -mx-4">
        <div class="card">
            <div class="card-header bg-gradient-to-r from-violet-500 to-blue-400">
                <div class="card-header-title">
                    <span class="text-violet-900">Dropdown</span>
                </div>
            </div>
            <span class="card-content-title">Menu (Dropdown)
                <span v-show="$route.params.framework" class="text-sm px-4 py-1 bg-teal-700 rounded-lg"> {{ $route.params.framework }}</span>
            </span>
        </div>

        <div class="card">
            <div class="card-header bg-gradient-to-r from-amber-400 to-orange-500">
                <div class="card-header-title">
                    <span class="text-amber-900">Select</span>
                </div>
            </div>
            <span class="card-content-title">Listbox (Select)
                <span v-show="$route.params.framework" class="text-sm px-4 py-1 bg-teal-700 rounded-lg"> {{ $route.params.framework }}</span>
            </span>
        </div>

        <div class="card">
            <div class="card-header bg-gradient-to-r from-green-500 to-teal-500">
                <div class="card-header-title">
                    <span class="text-green-900">Toggle</span>
                </div>
            </div>
            <span class="card-content-title">Switch (Toggle)
                <span v-show="$route.params.framework" class="text-sm px-4 py-1 bg-teal-700 rounded-lg"> {{ $route.params.framework }}</span>
            </span>
        </div>

        <div class="card">
            <div class="card-header bg-gradient-to-r from-fuchsia-500 to-purple-500">
                <div class="card-header-title">
                    <span class="text-fuchsia-900">Disclosure</span>
                </div>
            </div>
            <span class="card-content-title">Disclosure
                <span v-show="$route.params.framework" class="text-sm px-4 py-1 bg-teal-700 rounded-lg"> {{ $route.params.framework }}</span>
            </span>
        </div>

        <div class="card">
            <div class="card-header bg-gradient-to-r from-sky-400 to-blue-600">
                <div class="card-header-title">
                    <span class="text-sky-900">Modal</span>
                </div>
            </div>
            <span class="card-content-title">Dialog (Modal)
                <span v-show="$route.params.framework" class="text-sm px-4 py-1 bg-teal-700 rounded-lg"> {{ $route.params.framework }}</span>
            </span>
        </div>

        <div class="card">
            <div class="card-header bg-gradient-to-r from-orange-400 to-rose-500">
                <div class="card-header-title">
                    <span class="text-orange-900">Popaver</span>
                </div>
            </div>
            <span class="card-content-title">Popaver
                <span v-show="$route.params.framework" class="text-sm px-4 py-1 bg-teal-700 rounded-lg"> {{ $route.params.framework }}</span>
            </span>
        </div>

        <div class="card">
            <div class="card-header bg-gradient-to-r from-sky-400 to-sky-500">
                <div class="card-header-title">
                    <span class="text-sky-900">Radio Group</span>
                </div>
            </div>
            <span class="card-content-title">Radio Group
                <span v-show="$route.params.framework" class="text-sm px-4 py-1 bg-teal-700 rounded-lg"> {{ $route.params.framework }}</span>
            </span>
        </div>

        <div class="card">
            <div class="card-header bg-gradient-to-r from-pink-500 to-rose-500">
                <div class="card-header-title">
                    <span class="text-pink-900">Transition</span>
                </div>
            </div>
            <span class="card-content-title">Transition
                <span v-show="$route.params.framework" class="text-sm px-4 py-1 bg-teal-700 rounded-lg"> {{ $route.params.framework }}</span>
            </span>
        </div>

        <div class="card">
            <div class="card-header bg-gradient-to-r from-sky-500 to-blue-600">
                <div class="card-header-title">
                    <span class="text-sky-900">Tabs</span>
                </div>
            </div>
            <span class="card-content-title">Tabs
                <span v-show="$route.params.framework" class="text-sm px-4 py-1 bg-teal-700 rounded-lg"> {{ $route.params.framework }}</span>
            </span>
        </div>

    </div>
</template>

<style scoped>
    .card {
        @apply w-full sm:w-6/12 md:w-4/12 lg:w-3/12 px-4 py-4 mb-6;
    }

    .card-header {
        @apply w-full mb-4 h-40 rounded-xl flex justify-center items-center;
    }

    .card-header-title {
        @apply px-6 py-4 bg-white opacity-25 rounded-xl shadow flex justify-center items-center font-bold mr-4
    }

    .card-content-title {
        @apply text-center md:text-left block md:inline md:ml-2 font-medium;
    }
</style>