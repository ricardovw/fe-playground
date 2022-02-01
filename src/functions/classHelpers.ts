export interface classHandlerOpts {
  _opacity: boolean,
  _position: boolean,
  _color: boolean,
  _radius: boolean,
}

export const classHandler = (key: string, refs: classHandlerOpts): string => {
  const { _opacity, _position, _color, _radius } = refs
  const opacityClass = _opacity ? 'opacity-50' : ' opacity-100'
  const positionClass = _position ? `${key}-pon` : `${key}-poff`
  const colorClass = _color ? `${key}-con` : `${key}-coff`
  const radiusClass = _radius ? `${key}-ron` : `${key}-roff`

  return `${opacityClass} ${positionClass} ${colorClass} ${radiusClass}`
}
