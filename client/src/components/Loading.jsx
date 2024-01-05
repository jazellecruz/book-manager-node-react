
const Loading = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      style={{margin: "auto", background: "transparent", display: "block", shaperendering: "auto"}} 
      className="loading-svg"  
      viewBox="0 0 100 100" 
      preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" 
        fill="none" stroke="#47245d" 
        strokeWidth="6" 
        r="42" 
        strokeDasharray="197.92033717615698 67.97344572538566">
        <animateTransform attributeName="transform" 
          type="rotate" repeatCount="indefinite" 
          dur="0.9615384615384615s" 
          values="0 50 50;360 50 50" 
          keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  )
}

export default Loading
