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
    <div style={{ 
      maxWidth: "1200px",
      width: "100%",
      height: "500px",
      margin: "0 auto"
      }}>
      <ImageSlider data={images} />
    </div>
  )
}

export default App
