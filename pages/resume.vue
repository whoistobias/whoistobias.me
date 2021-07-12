<template>
  <div
    v-if="info"
    class="container max-w-3xl py-12 grid grid-cols-2 gap-12 px-4"
  >
    <h1 class="col-span-2">Resume &amp; CV</h1>
    <div class="col-span-2 sm:col-span-1">
      <h2 class="m-0">{{ info.name }}</h2>
      <div class="text-sm">{{ info.jobTitle }}</div>
    </div>
    <div v-if="deets" class="col-span-2 sm:col-span-1">
      <ResumeSectionHeading>Contact</ResumeSectionHeading>
      <div class="text-sm">{{ deets.email }}</div>
      <div class="text-sm">{{ deets.phone }}</div>
    </div>
    <div class="col-start-1 col-end-3 sm:col-end-2">
      <ResumeSectionHeading>Intro</ResumeSectionHeading>
      <nuxt-content :document="intro" />
    </div>
    <div v-if="education" class="col-span-2 sm:col-span-1">
      <ResumeSectionHeading>Education</ResumeSectionHeading>
      <div
        v-for="(item, i) in education.education"
        :key="`education:${i}`"
        class="mb-4"
      >
        <h4>
          {{ item.degree }}
          <span class="date"
            ><i> - {{ monthYear(item.date) }}</i></span
          >
        </h4>
        <div class="text-sm font-bold">
          {{ item.institution }}
        </div>

        <nuxt-content :document="item" />
      </div>
    </div>
    <div class="col-span-2 grid grid-cols-3 gap-x-12">
      <div v-if="work" class="sm:col-span-2 col-span-3">
        <ResumeSectionHeading>Work</ResumeSectionHeading>
        <div v-for="(item, i) in work.work" :key="`work:${i}`" class="mb-8">
          <h4>
            {{ item.title }}
            <span class="date"
              ><i>
                - {{ monthYear(item.from) }} to {{ monthYear(item.to) }}</i
              ></span
            >
          </h4>
          <div class="text-sm font-bold">
            {{ item.company }}
          </div>
          <nuxt-content :document="item" />
        </div>
      </div>
      <div v-if="skills" class="sm:col-span-1 col-span-3">
        <ResumeSectionHeading>Proficiencies</ResumeSectionHeading>
        <ul>
          <li
            v-for="(skill, i) in skills"
            :key="`skills:${i}`"
            class="
              flex
              justify-between
              items-center
              hover:bg-primary-dark hover:text-white
              px-1
              rounded
            "
          >
            <div class="text-sm leading-5">{{ skill.name }}</div>
            <div class="flex">
              <svg
                v-for="j in 3"
                :key="`skills-circle:${i}-${j}`"
                class="ml-1"
                height="12px"
                viewBox="0 0 100 100"
              >
                <circle
                  :fill="
                    j <= skill.proficiency ? 'currentColor' : 'transparent'
                  "
                  stroke="currentColor"
                  stroke-width="14"
                  cx="50"
                  cy="50"
                  r="40"
                />
              </svg>
              <!-- {{ ['★', '★★', '★★★'][skill.proficiency - 1] }} -->
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="awards" class="sm:col-span-1 col-span-2">
      <ResumeSectionHeading>Recognitions</ResumeSectionHeading>
      <div v-for="(item, i) in awards.awards" :key="`awards:${i}`" class="mb-8">
        <h4>
          {{ item.name }}
          <span class="date"
            ><i> - {{ year(item.date) }}</i></span
          >
        </h4>
        <div class="text-sm font-bold">
          {{ item.organization }}
        </div>
        <nuxt-content :document="item" />
      </div>
    </div>
    <div v-if="service" class="sm:col-span-1 col-span-2">
      <ResumeSectionHeading>Organizations &amp; Service</ResumeSectionHeading>
      <div
        v-for="(item, i) in service.service"
        :key="`service:${i}`"
        class="mb-8"
      >
        <h4>
          {{ item.name }}
          <span class="date"
            ><i> - {{ year(item.from) }} to {{ year(item.to) }}</i></span
          >
        </h4>
        <div class="text-sm font-bold">
          {{ item.organization }}
        </div>
        <nuxt-content :document="item" />
      </div>
    </div>
    <div class="col-span-2 grid grid-cols-3 gap-x-12">
      <div
        class="sm:col-span-2 col-span-3"
        :class="{ 'col-span-3': !references, 'sm:col-span-3': !references }"
      >
        <ResumeSectionHeading>Projects</ResumeSectionHeading>
        <div v-for="(item, i) in projects" :key="`projects:${i}`" class="mb-8">
          <h4>
            {{ item.title
            }}<span class="date"
              ><i> - {{ year(item.date) }}</i></span
            >
          </h4>
          <div class="text-sm font-bold">
            {{ item.description }}
          </div>
          <ul class="flex flex-wrap -mx-1 my-2">
            <li
              v-for="(skill, j) in item.skills"
              :key="`projects-skills:${i}-${j}`"
              class="border text-text text-sm font-bold m-1 rounded flex"
            >
              <div class="bg-text text-background px-1">{{ skill }}</div>
            </li>
          </ul>
          <nuxt-content :document="item" />
        </div>
      </div>
      <div v-if="references" class="sm:col-span-1 col-span-3">
        <ResumeSectionHeading>References</ResumeSectionHeading>
        <div
          v-for="(item, i) in references"
          :key="`references:${i}`"
          class="mb-8"
        >
          <h4>
            {{ item.name }}
          </h4>
          <div class="text-sm font-bold">
            {{ item.position }}, {{ item.organization }}
          </div>
          <div class="text-sm">
            {{ item.contact }}
          </div>
          <p class="my-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
  defineComponent,
  Ref,
  useAsync,
  useContext,
  useRoute,
  computed,
} from '@nuxtjs/composition-api'
import { format, utcToZonedTime } from 'date-fns-tz'
import CryptoJS from 'crypto-js'

interface Skill {
  name: string
  proficiency: number
}
interface Skills extends IContentDocument {
  skills: Skill[]
}
interface Reference {
  encryptedContact: string
  encryptedDescription: string
  encryptedOrganization: string
  encryptedPosition: string
  encryptedName: string
}

export default defineComponent({
  setup() {
    const route = useRoute()
    const { $content } = useContext()

    const info = useAsync(() =>
      $content('resume/info').fetch()
    ) as Ref<IContentDocument>

    const encryptedReferences = useAsync(() =>
      $content('resume/references').fetch()
    ) as Ref<IContentDocument>

    const intro = useAsync(() =>
      $content('resume/intro').fetch()
    ) as Ref<IContentDocument>

    const education = useAsync(() =>
      $content('resume/education').fetch()
    ) as Ref<IContentDocument>

    const work = useAsync(() =>
      $content('resume/work').fetch()
    ) as Ref<IContentDocument>

    const awards = useAsync(() =>
      $content('resume/awards').fetch()
    ) as Ref<IContentDocument>

    const service = useAsync(() =>
      $content('resume/service').fetch()
    ) as Ref<IContentDocument>

    const skills = useAsync(async () => {
      const skills = (await $content('skills').fetch()) as Skills
      return skills.skills.sort((a, b) => b.proficiency - a.proficiency)
    })

    const projects = useAsync(() =>
      $content('projects').sortBy('date', 'desc').fetch()
    )

    const deets = computed(() => {
      if (
        route.value.query.k &&
        typeof route.value.query.k === 'string' &&
        info.value
      ) {
        const email = CryptoJS.AES.decrypt(
          info.value.encryptedEmail,
          route.value.query.k
        ).toString(CryptoJS.enc.Utf8)
        const phone = CryptoJS.AES.decrypt(
          info.value.encryptedPhone,
          route.value.query.k
        ).toString(CryptoJS.enc.Utf8)

        return {
          email,
          phone,
        }
      }
      return null
    })

    const references = computed(() => {
      if (
        route.value.query.k &&
        typeof route.value.query.k === 'string' &&
        encryptedReferences.value
      ) {
        const key = route.value.query.k
        const decrypt = (v: string) =>
          CryptoJS.AES.decrypt(v, key).toString(CryptoJS.enc.Utf8)
        return encryptedReferences.value.references.map((rf: Reference) => {
          return {
            contact: decrypt(rf.encryptedContact),
            description: decrypt(rf.encryptedDescription),
            organization: decrypt(rf.encryptedOrganization),
            position: decrypt(rf.encryptedPosition),
            name: decrypt(rf.encryptedName),
          }
        })
      }
      return null
    })

    const monthYear = (date: string) =>
      format(utcToZonedTime(date, 'UTC'), 'MMM, yyyy')
    const year = (date: string) => format(utcToZonedTime(date, 'UTC'), 'yyyy')

    return {
      info,
      deets,
      intro,
      education,
      monthYear,
      year,
      work,
      skills,
      awards,
      service,
      projects,
      references,
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
})
</script>

<style lang="postcss" scoped>
.date {
  @apply text-xs font-normal whitespace-nowrap;
}
::v-deep .nuxt-content {
  @apply my-2;
  & a {
    @apply text-primary underline;
  }
  & p {
    @apply text-sm;
  }
}
</style>
