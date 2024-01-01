import './App.css'
import ImageSlider from './ImageSlider'

const images = [
  { url: 'https://source.unsplash.com/ljEXet84nL8', },
  { url: 'https://source.unsplash.com/fZy2Ws4kc7Q', },
  { url: 'https://source.unsplash.com/VSiWvrAY1F8', },
  { url: 'https://source.unsplash.com/RqfFauPXJx0', },
  { url: 'https://source.unsplash.com/hn1_U1yCNAQ', }
]


function App() {

  return (
    <>
      <ImageSlider data={images} />
    </>
  )
}

export default App
