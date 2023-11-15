<template>
  <section class="bg-gray-100">
    <div class="mx-auto container px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
          <h1 class="text-2xl font-bold text-amber-600">Dhaka Distributions</h1>
          <p class="max-w-xl text-lg">
            AL Complex. 4th Floor(North). H/78/7 International Airport Road.
            Chairman Bari, Bannani, Dhaka-1213, Bangladesh
          </p>
          <div class="mt-8">
            <p class="text-xl">Tech Support</p>
            <a href="" class="text-2xl font-bold text-amber-600">
              +8801777954422
            </a>
            <address class="mt-2 not-italic">
              <a href="mailto:support@dhakadistributions.com"
                >support@dhakadistributions.com</a
              >
            </address>
          </div>
          <div class="mt-8">
            <p class="text-xl">Sales</p>
            <a href="" class="text-2xl font-bold text-amber-600">
              +8801733349598, <br />+8801752363543, <br />+8801730001170
            </a>
            <address class="mt-2 not-italic">
              <a href="mailto:sales@dhakadistributions.com"
                >sales@dhakadistributions.com</a
              >
            </address>
          </div>
          <div class="mt-8">
            <p class="text-xl">General</p>
            <a class="text-2xl font-bold text-amber-600"> +8809614601234</a>
            <address class="mt-2 not-italic">
              <a href="mailto:info@dhakadistributions.com"
                >info@dhakadistributions.com</a
              >
            </address>
          </div>
        </div>
        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form
            id="my-form"
            action="https://formspree.io/f/mjvqzdzd"
            method="POST"
            class="space-y-4"
          >
            <div>
              <label class="sr-only" for="name">Name</label
              ><input
                class="w-full rounded-lg border border-gray-400 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label
                ><input
                  class="w-full rounded-lg border border-gray-400 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div>
                <label class="sr-only" for="phone">Phone</label
                ><input
                  class="w-full rounded-lg border border-gray-400 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div>
                <input
                  class="peer sr-only"
                  id="option1"
                  type="radio"
                  tabindex="-1"
                  name="topic"
                  value="Support"
                /><label
                  for="option1"
                  class="block w-full rounded-lg border border-gray-400 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                  ><span class="text-sm"> Support</span></label
                >
              </div>
              <div>
                <input
                  class="peer sr-only"
                  id="option2"
                  type="radio"
                  tabindex="-1"
                  name="topic"
                  value="Sales"
                /><label
                  for="option2"
                  class="block w-full rounded-lg border border-gray-400 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                  ><span class="text-sm"> Sales</span></label
                >
              </div>
              <div>
                <input
                  class="peer sr-only"
                  id="option3"
                  type="radio"
                  tabindex="-1"
                  name="topic"
                  value="Partnership"
                /><label
                  for="option3"
                  class="block w-full rounded-lg border border-gray-400 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                  ><span class="text-sm"> Partnership</span></label
                >
              </div>
            </div>
            <div>
              <label class="sr-only" for="message">Message</label
              ><textarea
                class="w-full rounded-lg border border-gray-400 p-3 text-sm"
                placeholder="Message"
                rows="8"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div
              class="g-recaptcha"
              data-sitekey="6Lcg_QopAAAAAP2ky46y5gyuAnfYasgrbjOSjv9Z"
            >
              <div style="width: 304px; height: 78px">
                <div>
                  <iframe
                    title="reCAPTCHA"
                    width="304"
                    height="78"
                    role="presentation"
                    name="a-9jwpesgn5qh"
                    frameborder="0"
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lcg_QopAAAAAP2ky46y5gyuAnfYasgrbjOSjv9Z&amp;co=aHR0cHM6Ly93d3cuZGhha2FkaXN0cmlidXRpb25zLmNvbTo0NDM.&amp;hl=en&amp;v=fGZmEzpfeSeqDJiApS_XZ4Y2&amp;size=normal&amp;cb=i95z0z7o535s"
                  ></iframe>
                </div>
                <textarea
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  class="g-recaptcha-response"
                  style="
                    width: 250px;
                    height: 40px;
                    border: 1px solid rgb(193, 193, 193);
                    margin: 10px 25px;
                    padding: 0px;
                    resize: none;
                    display: none;
                  "
                ></textarea>
              </div>
              <iframe style="display: none"></iframe>
            </div>
            <!-- replace with your recaptcha SITE key not secret key -->
            <div class="mt-4">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-amber-700 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
