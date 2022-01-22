export const lightTheme = {
    body: "#FCF6F4",
    text: "#000000",
    fontFamily: "'Source Sans Pro', sans-serif",
    bodyRgba: "252, 246, 244",
    textRgba: "0,0,0",
};

export const darkTheme = {
    body: "#000000",
    text: "#FCF6F4",
    fontFamily: "'Source Sans Pro', sans-serif",
    textRgba: "252, 246, 244",
    bodyRgba: "0,0,0",
}

export const breakpoints = {
    sm: 20, //em
    md: 30, //em
    lg: 45, //em
    xl: 60, //em
    xxl: 75, //em
}

export const mediaQueries = key => {
    return style => `@media (max-width: ${key}em) { ${style} }`
}