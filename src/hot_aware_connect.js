import { connect } from 'react-redux'

export default function hotAwareConnect(fn1, fn2) {
  let mergeProps

  if (module.hot) {
    let version = Number(new Date())
    mergeProps = (stateProps, dispatchProps, parentProps) => ({
      ...parentProps,
      ...stateProps,
      ...dispatchProps,
      key: `${parentProps.key}__${version}`
    })
  }

  return connect(
    fn1,
    fn2,
    mergeProps
  )
}
