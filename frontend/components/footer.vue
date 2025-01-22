<script setup lang="ts"></script>
<template>
  <footer
    class="flex w-full flex-col space-y-8 pt-8 text-custom-dark dark:text-custom-cyan"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <svg
          class="mr-1 h-12 w-12"
          viewBox="0 0 500 500"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>logo</title>
          <g
            id="vootaa"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="logo" stroke="">
              <!--
              <g id="bg-group">
                <circle class="stroke-custom-dark dark:stroke-custom-cyan" stroke-width="8" id="cicle" cx="250" cy="250"
                  r="250"></circle>
              </g>
    -->
              <g
                id="logo-group"
                transform="translate(80, 42)"
                stroke-width="10"
              >
                <path
                  id="path"
                  class="fill-custom-dark dark:fill-custom-cyan"
                  d="M165.38866,346.818251 L165.38866,360.331212 C165.38866,387.945449 143.002897,410.331212 115.38866,410.331212 C87.7744222,410.331212 65.3886597,387.945449 65.3886597,360.331212 L65.3886597,60.3312117 C65.3886597,32.7169742 87.7744222,10.3312117 115.38866,10.3312117 C143.002897,10.3312117 165.38866,32.7169742 165.38866,60.3312117 L165.38866,256.990445 L165.38866,256.990445"
                  transform="translate(115.3887, 210.3312) rotate(-20) translate(-115.3887, -210.3312)"
                />
                <path
                  id="circle"
                  class="fill-custom-green stroke-white dark:stroke-custom-black"
                  d="M179.096098,238.800919 C189.526707,233.94026 201.812819,233.056151 213.482106,237.300618 C225.023732,241.49865 233.800692,249.92764 238.696589,260.197381 C243.597095,270.476788 244.609786,282.600334 240.613702,294.169629 L240.313496,295.012583 C236.064601,306.664866 227.493267,315.494813 217.068709,320.352652 C206.6381,325.21331 194.351989,326.097419 182.682701,321.852953 C171.141075,317.65492 162.364116,309.225931 157.468218,298.95619 C152.567713,288.676783 151.555021,276.553237 155.551106,264.983941 L155.851311,264.140987 C160.100207,252.488705 168.67154,243.658758 179.096098,238.800919 Z"
                  transform="translate(198.0824, 279.5768) rotate(20) translate(-198.0824, -279.5768)"
                />
                <rect
                  id="box"
                  class="fill-custom-dark dark:fill-custom-cyan"
                  transform="translate(259.5939, 111.0703) rotate(20) translate(-259.5939, -111.0703)"
                  x="214.593909"
                  y="16.0702692"
                  width="90"
                  height="190"
                  rx="45"
                />
              </g>
            </g>
          </g>
        </svg>
        <h2 class="text-xl font-medium">Vootaa.com</h2>
      </div>
      <section class="flex space-x-8">
        <h3 class="sr-only">Social media</h3>
        <a href="" target="_blank" rel="noopener noreferrer">
          <UIcon
            name="grommet-icons:x"
            class="h-8 w-8 bg-custom-dark dark:bg-custom-cyan"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <UIcon
            name="grommet-icons:github"
            class="h-8 w-8 bg-custom-dark dark:bg-custom-cyan"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <UIcon
            name="ic:baseline-discord"
            class="h-8 w-8 bg-custom-dark dark:bg-custom-cyan"
          />
        </a>
      </section>
    </div>
    <div class="flex flex-row items-center justify-between">
      <p>@Vootaa Crypto, 2025</p>
      <p>
        Contact us:
        <a href="mailto:vootaa@gmail.com" class="underline underline-offset-2"
          >vootaa@gmail.com</a
        >
      </p>
    </div>
  </footer>
</template>
