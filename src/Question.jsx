import React from 'react'
import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types'

const Question = (props) => {
  return (
    <div className="gap-4 flex-1 w-auto h-auto flex relative items-start flex-col">
      <span className="font-semibold leading-6">
        {props.Question}
      </span>
      <span className="text-gray-600 leading-6">
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
