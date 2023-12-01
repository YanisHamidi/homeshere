import React from 'react'

import PropTypes from 'prop-types'

const Question = (props) => {
  return (
    <div
      style={{
        gap: '16px',
        flex: '1',
        width: 'auto',
        height: 'auto',
        display: 'flex',
        position: 'relative',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <span
        style={{
          fontWeight: '700',
          lineHeight: 1.6,
        }}
      >
        {props.Question}
      </span>
      <span
        style={{
          color: '#595959',
          lineHeight: 1.6,
        }}
      >
        {props.Answer}
      </span>
    </div>
  )
}

Question.defaultProps = {
  Answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  Question: 'What types of cars do you sell?',
}

Question.propTypes = {
  Answer: PropTypes.string,
  Question: PropTypes.string,
}

export default Question
