<template>
  <div class="mx-auto container px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between pt-10">
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="flex flex-shrink-0 items-center">
          <Logo />
        </div>
      </div>
      <div
        class="hidden md:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      >
        <a
          href="/"
          class="relative rounded-full p-1 text-gray-700 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
            > </path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
