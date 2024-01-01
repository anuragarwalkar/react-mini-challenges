import { useState } from 'react';
import './style.css';

const ImageSlider = ({ data }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const onNextClick = () => {
        setActiveImageIndex(prev => prev < data.length - 1 ? prev + 1 : 0);
    }

    const onPrevClick = () => {
        setActiveImageIndex(prev => prev > 0 ? prev - 1 : data.length - 1);
    }

    return <>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            {/* <img src={data[activeImageIndex]?.url} className='image-slider-img'></img> */}
            <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
                {data.map(item => <img key={item?.url} src={item?.url} style={{ translate: `${-100 * activeImageIndex}%` }} className='image-slider-img'></img>)}
            </div>
            <button className='carousel-button prev' onClick={onPrevClick}>
                &#8656;
            </button>
            <button className='carousel-button next' onClick={onNextClick}>
                &#8658;
            </button>
            <div>
            {data.map((_, index) => {
                return <span key={index} onClick={() => setActiveImageIndex(index)} className={['dot', index === activeImageIndex && 'active'].join(' ')}></span>
            })}
            </div>
        </div>
    </>
}

export default ImageSlider;