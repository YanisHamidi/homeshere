import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard3 = (props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        style={{
          top: '0px',
          left: '0px',
          right: 'auto',
          width: '100%',
          bottom: 'auto',
          height: '300px',
          position: 'absolute',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
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
