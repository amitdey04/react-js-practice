import closures from './demos/core/closures.js'
import thisArrow from './demos/core/this_arrow.js'
import promisesOrder from './demos/core/promises_order.js'
import generators from './demos/core/generators.js'
import copyEquality from './demos/core/copy_equality.js'
import destructuring from './demos/core/destructuring.js'
import asyncMap from './demos/tricks/async_map.js'
import nullishOptional from './demos/tricks/nullish_optional.js'
import arrayHoles from './demos/tricks/array_holes.js'

const demos = {
  'core/closures': closures,
  'core/this_arrow': thisArrow,
  'core/promises_order': promisesOrder,
  'core/generators': generators,
  'core/copy_equality': copyEquality,
  'core/destructuring': destructuring,
  'tricks/async_map': asyncMap,
  'tricks/nullish_optional': nullishOptional,
  'tricks/array_holes': arrayHoles,
}

export default demos
