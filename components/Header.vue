<template>
  <div style="height: 1200px">
    <div class="fixed w-full z-10">
      <div ref="bg" class="absolute top-0 left-0 w-full">
        <div class="relative bg-background h-16 w-full z-10"></div>
        <svg
          class="curved-bottom fill-current z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0v24a107.65 107.65 0 0 1 50-12 107.65 107.65 0 0 1 50 12V0z"
          ></path>
        </svg>
      </div>
      <div class="relative flex z-10 h-16 justify-end items-center px-8">
        <NuxtLink to="/contact">CONTACTs</NuxtLink>
        <div
          class="
            pointer-events-none
            absolute
            top-0
            left-0
            w-full
            h-full
            flex
            justify-center
            items-center
          "
        >
          <div class="h-16 w-full">
            <div ref="logo" class="w-full h-full">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ScreenTween from 'screen-tween'
import {
  defineComponent,
  onMounted,
  ref,
  watchEffect,
  useRoute,
} from '@nuxtjs/composition-api'
import anime from 'animejs'

export default defineComponent({
  setup(_, context) {
    const route = useRoute()

    if (route.value.name === 'index') {
      const scrollRatio = ref(0)

      onMounted(() => {
        middle =
          window.innerHeight / 2 -
          (context.refs.logo as Element).clientHeight / 2

        upAnimation = anime
          .timeline({
            easing: 'easeInOutCubic',
            autoplay: false,
          })
          .add(
            {
              targets: context.refs.logo,
              duration: 1200,
              translateY: [middle, 0],
              scale: [1.6, 1],
              opacity: [1, 1],
            },
            0
          )
          .add(
            {
              targets: context.refs.svg,
              skewY: [-6.5, 0],
              duration: 800,
            },
            300
          )
          .add(
            {
              targets: [context.refs.path1, context.refs.path6],
              strokeDashoffset: [doubleDashOffset, anime.setDashoffset],
              duration: 800,
              easing: 'easeOutSine',
            },
            300
          )
          .add(
            {
              targets: [context.refs.path2, context.refs.path7],
              strokeDashoffset: [0, anime.setDashoffset],
              duration: 400,
            },
            0
          )
          .add(
            {
              targets: [context.refs.path3, context.refs.path8],
              strokeDashoffset: [0, anime.setDashoffset],
              duration: 400,
            },
            100
          )
          .add(
            {
              targets: [context.refs.path4, context.refs.path9],
              strokeDashoffset: [doubleDashOffset, anime.setDashoffset],
              fill: 'rgba(0, 0, 0, 0)',
              duration: 500,
            },
            200
          )
          .add(
            {
              targets: [context.refs.path5, context.refs.path10],
              strokeDashoffset: [doubleDashOffset, anime.setDashoffset],
              fill: 'rgba(0, 0, 0, 0)',
              duration: 400,
            },
            250
          )
          .add(
            {
              targets: [context.refs.bg],
              opacity: [0, 1],
              duration: 400,
            },
            800
          )
        // .add(
        //   {
        //     targets: [context.refs.bgCurve],
        //     // fill: ['rgba(0,0,0,0)', '#0D1616'],
        //     duration: 400,
        //   },
        //   800
        // )

        anime.set(
          [
            context.refs.path1,
            context.refs.path6,
            context.refs.path2,
            context.refs.path7,
            context.refs.path3,
            context.refs.path8,
            context.refs.path4,
            context.refs.path9,
            context.refs.path5,
            context.refs.path10,
          ],
          {
            strokeDashoffset: anime.setDashoffset,
            fill: 'rgba(0, 0, 0, 0)',
          }
        )
        anime.set(context.refs.svg, {
          skewY: 0,
        })
        anime.set(context.refs.logo, {
          translateY: middle,
          scale: 1.6,
          opacity: 0,
        })

        const intro = anime
          .timeline({
            autoplay: false,
            easing: 'easeOutCirc',
          })
          .add(
            {
              targets: context.refs.logo,
              easing: 'easeOutCirc',
              opacity: [0, 1],
              duration: 1000,
            },
            0
          )
          .add(
            {
              targets: context.refs.svg,
              duration: 1000,
              translateY: [-20, 0],
            },
            0
          )
          .add(
            {
              targets: context.refs.svg,
              skewY: [0, -6.5],
              duration: 1400,
            },
            1000
          )
          .add(
            {
              targets: [context.refs.path1, context.refs.path6],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: 300,
              easing: 'easeOutSine',
            },
            1000
          )
          .add(
            {
              targets: [context.refs.path2, context.refs.path7],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: 5000,
            },
            1240
          )
          .add(
            {
              targets: [context.refs.path3, context.refs.path8],
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: 4000,
            },
            1280
          )
          .add(
            {
              targets: [context.refs.path4, context.refs.path9],
              strokeDashoffset: [anime.setDashoffset, 0],
              fill: ['rgba(0, 0, 0, 0)', '#c6a869'],
              duration: 1400,
            },
            1280
          )
          .add(
            {
              targets: [context.refs.path5, context.refs.path10],
              strokeDashoffset: [anime.setDashoffset, 0],
              fill: ['rgba(0, 0, 0, 0)', '#c6a869'],
              duration: 1400,
            },
            1350
          )

        const tween = new ScreenTween({
          distance: 1000,
          // callback: (v) => console.log(v),
          target: scrollRatio,
          property: 'value',
          throttle: 80,
          speed: 0.8,
        })
        tween.stop()

        let start: number | null = null

        function playIntro(timestamp: number) {
          if (!start) start = timestamp
          let progress = timestamp - start
          const position = progress / intro.duration

          if (document.documentElement.scrollTop !== 0) {
            if (position > 0.8) {
              start -= intro.duration
            } else if (position > 0.3) {
              start -= 80
            } else {
              start -= 30
            }
          }

          progress = Math.min(progress, intro.duration)
          intro.seek(progress)

          if (progress >= intro.duration) {
            tween.start()
            return
          }
          requestAnimationFrame(playIntro)
        }

        setTimeout(() => requestAnimationFrame(playIntro), 300)

        watchEffect(() => {
          upAnimation.seek(scrollRatio.value * upAnimation.duration)
        })
      })

      let upAnimation: anime.AnimeInstance
      let middle: number

      // const reverseDashOffset = (el: SVGElement) => -anime.setDashoffset(el)
      const doubleDashOffset = (el: SVGElement) => anime.setDashoffset(el) * 2

      onMounted(() => {})
    }
    return { route }
  },
})
</script>

<style lang="postcss" scoped>
.curved-bottom {
  @apply fill-current text-background;
  height: 24px;
  width: 100%;
  margin-top: -12px;
  transition: opacity 0.5s ease;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7));
  z-index: -2;
}
</style>
