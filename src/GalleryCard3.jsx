import React from 'react'
import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types'

const GalleryCard3 = (props) => {
  return (
    <div className="w-full h-72 flex relative items-center flex-col justify-center">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="absolute top-0 left-0 right-auto w-full bottom-auto h-72 object-cover rounded-lg"
      />
    </div>
  )
}

GalleryCard3.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&w=1500',
}

GalleryCard3.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard3
