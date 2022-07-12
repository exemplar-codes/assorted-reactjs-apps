// flash top of page
import { useState, useEffect } from "react";

function FlashPage(props) {
  const [showFlash, setShowFlash] = useState(true);
  const [widthPercentage, setWidthPercentage] = useState(0);

  useEffect(() => {
    if (widthPercentage < 100) {
      setTimeout(() => {
        setWidthPercentage((prevWidth) => prevWidth + 10);
      }, (props.time * 1000) / 10);
    } else {
      setShowFlash(false);
    }
  }, [widthPercentage]);

  return (
    <>
      {showFlash && (
        <div
          id="flash"
          style={{
            height: "2px",
            backgroundColor: "hotpink",
            textAlign: "right",
            width: `${widthPercentage}%`,
          }}
        >{`${widthPercentage}%`}</div>
      )}
    </>
  );
}

FlashPage.defaultProps = {
  time: 1,
};
export default FlashPage;
