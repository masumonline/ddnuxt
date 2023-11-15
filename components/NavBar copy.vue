<template>
  <nav class="container mx-auto p-6 bg-transparent">
    <div class="flex items-center justify-between">
      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button
          @click="drawer"
          class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <svg
            class="h-5 w-5 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-sm font-sans">
          <li class="group relative">
            <a href="#" class="active border-b-2 border-blue-500 pb-1">
              Solutions & Services
            </a>
            <ul class="hidden group-hover:block absolute w-[250px] bg-white">
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.bitdefender.com/" target="_blank"
                  >Endpoint Security</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.bitdefender.com/business/enterprise-products/endpoint-detection-response.html"
                  target="_blank"
                  >EDR</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.bitdefender.com/business/gravityzone-platform/xdr-extended-detection-and-response.html"
                  target="_blank"
                  >XDR</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.bitdefender.com/business/gravityzone-addons/security-for-mobile.html"
                  target="_blank"
                  >Enterprise Mobile Security Solution</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.appknox.com/" target="_blank"
                  >Mobile Apps VAPT</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.titanhq.com/email-security-master-lp/?utm_campaign=ST-ENG-LT-GSN&amp;?product_type=SpamTitan&amp;acctid=THQ&amp;utm_source=Adwords&amp;utm_medium=PPC&amp;keyword=email%20security%20software&amp;matchtype=b&amp;campaignid=2020897804&amp;adgroupid=112726781440&amp;gclid=Cj0KCQjwy4KqBhD0ARIsAEbCt6g_-Yi-yoLv-0_gHtaHg8pBvv4twWpSrYq6zU7t1rdnXbe4n9WZ2YQaAviTEALw_wcB&amp;network=g&amp;device=c&amp;gad_source=1"
                  target="_blank"
                  >Email Security</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.acronis.com/en-us/products/cyber-protect/backup/"
                  target="_blank"
                  >Backup &amp; Storage</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.acronis.com/en-us/products/cloud/cyber-protect/data-loss-prevention/"
                  target="_blank"
                  >DLP</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.wallix.com/privileged-access-management/"
                  target="_blank"
                  >PAM</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.wallix.com/multi-factor-authentication"
                  target="_blank"
                  >Multi-Factor Authentication</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.ekransystem.com/en/solutions/preventing-insider-threat"
                  target="_blank"
                  >Insider Threat Management</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.ekransystem.com/en/product/session-recording"
                  target="_blank"
                  >User Session Recording</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.pulseway.com/" target="_blank"
                  >Remote Monitoring &amp; Management</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://niiconsulting.com/" target="_blank"
                  >GRC Assessments &amp; Certifications</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.group-ib.com/" target="_blank"
                  >Threat Intel, Monitoring &amp; Cybercrime Investigations</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="/contact">Cybersecurity Trainings</a>
              </li>
            </ul>
          </li>
          <li class="group">
            <a href="#" class=""> Partnerships </a>
            <ul class="hidden group-hover:block absolute w-[250px] bg-white">
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.bitdefender.com/" target="_blank"
                  >Bitdefender</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.acronis.com/en-us/" target="_blank"
                  >Acronis</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.titanhq.com/" target="_blank">TitanHQ</a>
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.wallix.com/" target="_blank">Wallix</a>
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.ekransystem.com/en" target="_blank"
                  >Ekran</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.appknox.com/" target="_blank">Appknox</a>
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.pulseway.com/" target="_blank">Pulseway</a>
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.niiconsulting.com/" target="_blank"
                  >Network Intelligence</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.ampcuscyber.com/" target="_blank"
                  >Ampcus Cyber</a
                >
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.group-ib.com/" target="_blank">Group-IB</a>
              </li>
            </ul>
          </li>
          <li><NuxtLink to="/contact" class="">Contact Us</NuxtLink></li>
          <li><NuxtLink to="/beapartner" class="">Be a Partner</NuxtLink></li>
          <li>
            <NuxtLink to="/information" class="">Information & Media</NuxtLink>
          </li>
          <li>
            <a
              href="https://store.dhakadistributions.com"
              target="_blank"
              class="text-amber-500 font-bold transition hover:text-amber-600"
              >Online Store</a
            >
          </li>
        </ul>
      </div>
      <div class="hidden sm:flex sm:gap-1">
        <a
          class="block px-2 py-2.5 text-sm"
          href="https://www.facebook.com/dhakadisti"
          target="_blank"
          ><svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="text-gray-700 hover:text-amber-600"
          >
            <path
              fill="currentColor"
              d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"
            ></path></svg></a
        ><a
          class="rounded-md px-2 py-2.5 text-sm"
          href="https://www.linkedin.com/company/dhakadistributions/"
          target="_blank"
          ><svg
            width="32"
            height="32"
            viewBox="0 0 256 256"
            class="text-gray-700 hover:text-amber-600"
          >
            <path
              fill="currentColor"
              d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM96 176a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm-8-80a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm96 80a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140Z"
            ></path>
          </svg>
        </a>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b"
        >
          <Logo />
        </span>

        <ul class="divide-y font-sans">
          <li>
            <a href="#" @click="isOpen = false" class="my-4 inline-block"
              >Solutions & Services</a
            >
          </li>
          <li>
            <a href="#" @click="isOpen = false" class="my-4 inline-block"
              >Partnerships</a
            >
          </li>
          <li>
            <a href="#" @click="isOpen = false" class="my-4 inline-block"
              >Contact Us</a
            >
          </li>
          <li>
            <a href="#" @click="isOpen = false" class="my-4 inline-block"
              >Be a Partner</a
            >
          </li>
          <li>
            <a href="#" @click="isOpen = false" class="my-4 inline-block"
              >Information & Media</a
            >
          </li>
          <li>
            <a
              href="#"
              @click="isOpen = false"
              class="text-amber-500 font-bold transition hover:text-amber-600"
              >Online Store</a
            >
          </li>
        </ul>

        <div class="follow">
          <p class="italic font-sans text-sm">follow us:</p>
          <div class="social flex space-x-5 mt-4">
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                class="h-5 w-5 fill-current text-gray-600"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                class="h-5 w-5 fill-current text-gray-600"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                class="h-5 w-5 fill-current text-gray-600"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="youtube"
                class="h-5 w-5 fill-current text-gray-600"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>
