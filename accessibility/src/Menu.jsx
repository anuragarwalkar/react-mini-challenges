import { createRef, useEffect, useState } from "react";

function Menu({ items = [] }) {
  const [activeItem, setActiveItem] = useState(0);
  const [refs] = useState(Array.from({length: items.length}, () => createRef()));

  useEffect(() => {
    setTimeout(() => {
        refs[0].current.focus();
    }, 0)
  }, []);

  const onKeyDown = (e) => {
    if (e.keyCode === 40) {
        if((activeItem + 1) < items.length) {
            setActiveItem( i => i + 1);
            refs[activeItem + 1]?.current.focus();
        }else {
            setActiveItem(0)
            refs[0]?.current.focus();
        }
    }else if (e.keyCode === 38) {
        if((activeItem - 1) >= 0) {
            setActiveItem( i => i - 1);
            refs[activeItem - 1]?.current.focus();
        }else {
            setActiveItem(items.length -1)
            refs[items.length -1]?.current.focus();
        }
    }
  };

  return (
    <ul
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        paddingLeft: 0,
      }}
      onKeyDown={onKeyDown}
    >
      {items.map((item, index) => {
        return <li key={item} ref={refs[index]} tabIndex={index === activeItem ? 0 : -1}>{item}</li>;
      })}
    </ul>
  );
}

export default Menu;
