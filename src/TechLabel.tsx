import { getTechLogo, getProductLogo } from './tech-logos'

/** Tool or technology name with its small official logo (text only if none exists). */
export function TechLabel({ name, size = 14 }: { name: string; size?: number }) {
  const logo = getTechLogo(name)
  return (
    <>
      {logo && (
        <img
          src={logo.src}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          className={`shrink-0 object-contain ${logo.dark ? 'dark:bg-white dark:rounded-[3px] dark:p-px' : ''}`}
          style={{ width: size, height: size }}
        />
      )}
      {name}
    </>
  )
}

/** Product logo fetched from the product's own site. */
export function ProductLogo({ name, size = 28 }: { name: string; size?: number }) {
  const logo = getProductLogo(name)
  if (!logo) return null
  return (
    <span className="shrink-0 rounded-md overflow-hidden bg-white inline-block" style={{ width: size, height: size }}>
      <img
        src={logo.src}
        alt={`${name} logo`}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className="object-contain"
        style={{ width: size, height: size, transform: `scale(${logo.zoom})` }}
      />
    </span>
  )
}
