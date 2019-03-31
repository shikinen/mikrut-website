<template>
  <ul class="accordion">
    <accordion-item
      v-for="item in items"
      :key="item.id"
      :multiple="multiple"
      :item="item"
      :left="left"
    />
  </ul>
</template>

<script>
import AccordionItem from '@/components/service/AccordionItem'
export default {
  components: {
    AccordionItem
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      items: this.content.map((item, id) => { return { id, active: false, ...item } })
    }
  }
}
</script>
