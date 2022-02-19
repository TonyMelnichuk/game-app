export const defineDropdownAnimation = (isDropdownOpen: boolean) => {
  // Here I wrote 'as' because 'TS' throws an error 'type 'string' is not assignable to visibility values'
  const visible = { opacity: 1, y: 0, visibility: 'visible' as 'visible' }
  const hidden = { opacity: 0, y: -5, transitionEnd: { visibility: 'hidden' as 'hidden' } }
  const initial = { opacity: 0, y: -5, visibility: 'hidden' as 'hidden' }

  const animation = isDropdownOpen ? visible : hidden

  return ({
    animate: animation,
    initial
  })
}