import React from 'react'
import Card from './Card'

function About(props) {
  document.title = "TextUtils | Pricing";
  const cardsContent = [
    { header: "Basic Plan", title: "Free", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, architecto assumenda natus tempora laboriosam earum dolorum voluptatem? Quod, optio at!", btnText: "Get Free" },
    { header: "Standard Plan", title: "For $15", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, animi vitae eius consectetur, numquam nostrum voluptatibus magni eos porro consequatur ipsa repellat voluptate perferendis possimus at? Dolore sed quam natus.", btnText: "Buy Plan" },
    { header: "Premium Plan", title: "For $30", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam cumque cupiditate temporibus minima quasi, nisi quod ut ipsum ab veniam deleniti mollitia eveniet doloribus? Necessitatibus, vel autem sed fugit rem excepturi odit est quas.", btnText: "Buy Plan" }
  ]
  return (
    <div className='container'>
      <h1 className={`text-center text-${props.theme.text} my-2`}>{props.title}</h1>
      <div className="row my-5 card-group">
        {
          cardsContent.map((elem, key) =>
            <div key={key} className="col-sm-4">
              <Card theme={props.theme} data={elem} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default About
