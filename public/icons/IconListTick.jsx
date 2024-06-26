const IconListTick = ({ tickColor, bgColor, size }) => {
  return (
<svg width={size} height={size} viewBox="0 0 306 306">
<path d="M306 153C306 237.5 237.5 306 153 306C68.5004 306 0 237.5 0 153C0 68.5004 68.5004 0 153 0C237.5 0 306 68.5004 306 153Z" className={bgColor}/>
<path d="M129.929 209.5L76.2542 155.825L89.6729 142.406L129.929 182.663L216.327 96.2646L229.746 109.683L129.929 209.5Z" className={tickColor}/>
</svg>

  )
}

export default IconListTick
