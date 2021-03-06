const LightSVG = ({
  width,
  height,
  animated,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 375.303 351.574"
      preserveAspectRatio="xMaxYMax">
      <defs>
        <radialGradient
          id="radial-gradient"
          cx="0.5"
          cy="0.5"
          r="0.5"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#771993" />
          <stop
            offset="1"
            stopColor="#b23ffa"
            stopOpacity="0"
          />
        </radialGradient>
        <radialGradient
          id="radial-gradient-2"
          cx="0.5"
          cy="0.5"
          r="0.5"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#e2c9ea">
            {animated === 'true' && (
              <animate
                attributeName="stop-color"
                values="#e2c9ea; #bf71d6; #e2c9ea"
                dur="5s"
                repeatCount="indefinite"
              />
            )}
          </stop>
          <stop
            offset="1"
            stopColor="#bf71d6"
            stopOpacity="0.961"
          />
        </radialGradient>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#f8d0fa">
            {animated === 'true' && (
              <animate
                attributeName="stop-color"
                values="#f8d0fa; #c729c7; #f8d0fa"
                dur="10s"
                repeatCount="indefinite"
              />
            )}
          </stop>
          <stop offset="1" stopColor="#c729c7">
            {animated === 'true' && (
              <animate
                attributeName="stop-color"
                values="#c729c7; #f8d0fa; #c729c7"
                dur="10s"
                repeatCount="indefinite"
              />
            )}
          </stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#c0f0f4">
            {animated === 'true' && (
              <animate
                attributeName="stop-color"
                values="#c0f0f4; #58c6e0; #c0f0f4"
                dur="6s"
                repeatCount="indefinite"
              />
            )}
          </stop>
          <stop offset="1" stopColor="#58c6e0">
            {animated === 'true' && (
              <animate
                attributeName="stop-color"
                values="#58c6e0; #c0f0f4; #58c6e0;"
                dur="6s"
                repeatCount="indefinite"
              />
            )}
          </stop>
        </linearGradient>
      </defs>
      <path
        id="Path_39"
        d="M1068,1168.929s-46.122,2.158-90.1,23.05-84.65,65.932-84.65,65.932l-52.275,48.579L692.959,1321.35v104.738L1068,1416.015Z"
        transform="translate(-692.959 -1092.426)"
        fill="url(#radial-gradient)"
      />
      <path
        id="Path_36"
        d="M1068,1168.929s-46.122,2.057-90.1,21.966-85.82,57.672-85.82,57.672l-60.083,45.091-139.035,20.529V1414L1068,1404.4Z"
        transform="translate(-692.959 -1062.426)"
        fill="url(#radial-gradient-2)"
      />
      <path
        id="Path_37"
        d="M675.855,1176.868s18.339-107.053,41.76-100.12,23.69,113.036,51.925,127.853,43.126-82.994,61.014-68.586-1.062,105.687,10.537,126.219,19.426-52.617,35.859-44.092,14.269,62.368,29.873,78.19,21.335-22.715,32.544-14.9.44,30.062,12.291,46.155,18.37,28.285,43.05,40.809,55.668,9.286,55.668,9.286V1428H675.855Z"
        transform="translate(-675.813 -1076.426)"
        fill="url(#linear-gradient)"
      />
      <path
        id="Path_38"
        d="M679.248,1235.562s86.613,2.921,149.12,29.131,72.337,44.651,103.678,71.156,40.034,40.6,71.353,44.3,51.151-8.464,51.151-8.464v34.152h-375.3Z"
        transform="translate(-679.248 -1059.426)"
        fill="rgba(142,229,222,0.43)"
      />
      <path
        id="Path_35"
        d="M679.248,1235.562s86.613,2.8,149.12,27.962,69.566,47.228,100.907,72.67,38.216,28.683,69.535,32.231,55.74-18.038,55.74-18.038V1399h-375.3Z"
        transform="translate(-679.248 -1047.426)"
        fill="url(#linear-gradient-2)"
      />
    </svg>
  );
};

export default LightSVG;
