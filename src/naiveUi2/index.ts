import { getComponentMap, getPropsMap } from './mapping'

export function naiveUi2() {
  return {
    uiName: 'naive-ui2',
    map: getPropsMap(),
    lib: 'naive-ui',
    prefix: 'n',
  }
}

export function naiveUi2Components(isZh: boolean) {
  return {
    map: getComponentMap(isZh),
    isSeperatorByHyphen: true,
    prefix: 'n',
    lib: 'naive-ui',
    isReact: false,
  }
}
