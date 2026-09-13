export default function ProjectCard({ project, isFirst, isLast }) {
  const { title, subtitle, url, image, color, description, tags, imageSide } = project
  const imageIsRight = imageSide === 'right'

  const imageBlock = (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`flex w-full relative justify-center sm:justify-start ${imageIsRight ? 'order-1 sm:order-2' : ''}`}
    >
      <div
        className={`flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 ${
          imageIsRight ? 'sm:ml-auto' : ''
        }`}
      >
        <img
          className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
          src={image}
          alt={title}
        />
        <span
          className="flex group-hover:-top-14 ease-jump duration-200 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
          style={{ backgroundColor: color }}
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </span>
      </div>
    </a>
  )

  const textBlock = (
    <div className={`w-full ${imageIsRight ? 'order-2 sm:order-1' : ''}`}>
      <h3 className="font-bold text-2xl md:text-4xl" style={{ color }}>
        {title}
      </h3>
      <span className="text-base md:text-lg" style={{ color }}>
        {subtitle}
      </span>
      <p className="text-justify text-sm md:text-base mt-2 whitespace-pre-line">{description}</p>
      <ul className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <li key={tag} className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
            #{tag}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className={`flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative ${isFirst ? 'mt-8' : ''}`}>
      {!isLast && (
        <div
          className={`h-[1px] bg-[#1788ae] absolute top-1/2 hidden sm:block ${
            imageIsRight ? 'left-1/2 right-1/4' : 'left-1/4 right-1/2'
          }`}
        ></div>
      )}
      <div
        className="w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        style={{ borderColor: color }}
      ></div>

      {imageIsRight ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  )
}
