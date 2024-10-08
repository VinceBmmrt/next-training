type IconProps = {
  className?: string;
};

export default function PaypalIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0,0,256,256"
      className={className}
    >
      <g
        fill="#112959"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
      </g>
      <g
        fillOpacity="0.8902"
        fill="#ffffff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M20.055,7.713c-0.677,-0.842 -1.673,-1.41 -2.764,-1.615c-0.518,-2.127 -2.414,-3.098 -4.246,-3.098h-5.988c-0.632,0 -1.179,0.409 -1.368,1.009c-0.015,0.04 -0.026,0.082 -0.036,0.125l-2.619,12.128c-0.009,0.041 -0.015,0.083 -0.019,0.125c-0.009,0.062 -0.015,0.126 -0.015,0.173c0,0.794 0.648,1.44 1.444,1.44h2.316l-0.267,1.262c-0.008,0.04 -0.014,0.081 -0.018,0.121c-0.009,0.063 -0.016,0.126 -0.016,0.173c0.002,0.797 0.65,1.444 1.446,1.444h3.259c0.056,0 0.111,-0.005 0.166,-0.015c0.549,-0.063 1.011,-0.437 1.191,-0.963c0.021,-0.05 0.038,-0.103 0.05,-0.156l0.904,-3.866h1.398c3.365,0 5.38,-1.445 5.989,-4.295c0.416,-1.953 -0.209,-3.249 -0.807,-3.992zM5.137,16l2.375,-11h5.533c0.293,0 1.5,0.061 2.078,1.013h-4.706c-0.626,0 -1.17,0.401 -1.363,0.99c-0.019,0.049 -0.033,0.1 -0.043,0.151l-1.034,5.093l-0.794,3.753zM18.906,11.287c-0.406,1.901 -1.613,2.713 -4.033,2.713h-1.857c-0.823,0 -1.338,0.652 -1.405,1.198l-0.89,3.802h-2.127l1.271,-6h1.444c4.259,0 5.665,-2.394 6.094,-4.402c0.027,-0.128 0.045,-0.256 0.057,-0.382c0.378,0.151 0.749,0.393 1.038,0.751c0.473,0.59 0.61,1.37 0.408,2.32z"></path>
        </g>
      </g>
    </svg>
  );
}
