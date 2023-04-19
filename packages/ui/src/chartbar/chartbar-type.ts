import type { ExtractPropTypes, PropType } from 'vue'

type CheckboxText = {
  checked: boolean
  label: string
}

export const chartProps = {
  option: {
    type: Object,
    required: true,
    default: () => {}
  },
  title: {
    type: Object as PropType<CheckboxText>,
    default: (): CheckboxText => {
      return {
        checked: false,
        label: ''
      }
    }
  },
  subTitle: {
    type: Object as PropType<CheckboxText>,
    default: (): CheckboxText => {
      return {
        checked: false,
        label: ''
      }
    }
  }
} as const

export type ChartProps = ExtractPropTypes<typeof chartProps>
