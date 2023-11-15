<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const isSubOpen = ref(false);
const drawer = function () {
  isOpen.value = !isOpen.value;
};

const subdwawer = function () {
  isSubOpen.value = !isSubOpen.value;
};
</script>
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
            <a href="#" class=""> Solutions & Services </a>
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
            ></path>
          </svg>
        </a>
        <a
          class="rounded-md px-2 py-2.5 text-sm"
          href="https://www.linkedin.com/company/dhakadistributions/"
          target="_blank"
        >
          <svg
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
            id="nav"
            aria-label="Nav"
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
          <li class="group relative">
            <a @click="subdwawer" class="my-4 inline-block"> Solutions & Services </a>
            <ul
            v-if="isSubOpen"
              class="hidden group-hover:block absolute w-[200px] bg-white overflow-y text-sm"
            >
              <li class="border-b border-amber-600 py-2 px-1">
                <a href="https://www.bitdefender.com/" target="_blank">
                  Endpoint Security
                </a>
              </li>
              <li class="border-b border-amber-600 py-2 px-1">
                <a
                  href="https://www.bitdefender.com/business/enterprise-products/endpoint-detection-response.html"
                  target="_blank"
                >
                  EDR
                </a>
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
            <a @click="subdwawer" class="my-4 inline-block"> Partnerships </a>
            <ul
            v-if="isSubOpen"
              class="hidden group-hover:block absolute w-[200px] bg-white text-sm"
            >
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
          <li>
            <NuxtLink
              to="/contact"
              @click="isOpen = false"
              class="my-4 inline-block"
            >
              Contact Us
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/beapartner"
              @click="isOpen = false"
              class="my-4 inline-block"
            >
              Be a Partner
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/information"
              @click="isOpen = false"
              class="my-4 inline-block"
            >
              Information & Media
            </NuxtLink>
          </li>
          <li>
            <a
              href="https://store.dhakadistributions.com/"
              target="_blank"
              class="my-4 inline-block text-amber-500 font-bold transition hover:text-amber-600"
            >
              Online Store
            </a>
          </li>
        </ul>

        <div class="follow mt-10">
          <div class="social flex space-x-5 mt-4">
            <a href="https://www.facebook.com/dhakadisti" target="_blank">
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
            <a
              href="https://www.linkedin.com/company/dhakadistributions/"
              target="_blank"
            >
              <svg
                viewBox="0 0 256 256"
                class="h-5 w-5 fill-current text-gray-600"
              >
                <path
                  fill="currentColor"
                  d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM96 176a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm-8-80a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm96 80a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </div>
  </nav>
</template>
