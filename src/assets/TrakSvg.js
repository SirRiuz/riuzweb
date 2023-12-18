import * as React from "react"
const TrakSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={512}
      height={512}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#C4C4C4"
        d="M56.452 46.552C7.353 89.516-1.512 204.259.192 256.259c-1.704 60.526 7.673 179.019 63.932 214.823 56.259 35.803 147.468 40.066 194.351 40.918 51.145 0 109.962 0 186.679-38.361 53.702-38.361 63.931-112.526 66.489-217.38 2.557-104.854-7.672-176.46-61.374-217.38C407.554 6.335 303.653-1.185 258.475.52 211.592-2.04 105.552 3.588 56.452 46.552Z"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="#000" d="M-174.08-174.08h860.16v860.16h-860.16z" />
    </g>
    <path
      fill="#fff"
      d="M114.003 214.932v-9.961h77.71v9.961h-33.179V310h-11.206v-95.068h-33.325Zm112.939 29.223h-5.639c-5.176 0-9.424 1.953-12.744 5.86-3.321 3.906-4.981 8.813-4.981 14.721V310h-10.84v-75.293h10.84v9.888c1.856-3.272 4.321-5.835 7.398-7.691 3.125-1.855 6.713-2.783 10.766-2.783h5.2v10.034Zm1.319 45.117c0-6.298 2.099-11.352 6.299-15.161 4.248-3.808 10.205-5.957 17.871-6.445l24.756-1.611v-7.032c0-4.98-1.514-8.837-4.541-11.572-3.028-2.783-7.276-4.175-12.745-4.175-7.617 0-14.355 2.637-20.214 7.911l-5.713-7.764c7.47-6.592 16.577-9.888 27.319-9.888 8.105 0 14.551 2.149 19.336 6.445 4.785 4.297 7.178 10.132 7.178 17.505v38.379c0 1.416.415 2.539 1.245 3.369.879.782 2.075 1.172 3.589 1.172h3.735V310h-5.859c-3.614 0-6.617-.928-9.009-2.783-2.344-1.905-3.687-4.419-4.029-7.544-2.539 3.662-5.908 6.543-10.107 8.642-4.15 2.1-8.74 3.15-13.769 3.15-7.325 0-13.379-2.051-18.165-6.153-4.785-4.15-7.177-9.497-7.177-16.04Zm10.547 0c0 3.809 1.538 6.983 4.614 9.522 3.125 2.49 7.08 3.735 11.865 3.735 6.152 0 11.328-1.953 15.527-5.859 4.248-3.955 6.373-8.716 6.373-14.282v-7.617l-23.072 1.611c-4.931.342-8.716 1.636-11.352 3.882-2.637 2.246-3.955 5.249-3.955 9.008Zm67.309-84.301h10.84v63.501l34.644-33.765h13.623l-38.379 36.475L366.762 310h-14.283l-35.522-35.376V310h-10.84V204.971Z"
    />
    <path fill="#06C167" d="M381 290h20v20h-20z" />
  </svg>
)
export default TrakSvg

