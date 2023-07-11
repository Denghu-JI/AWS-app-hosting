
const color_sheet = {
    primary_1 : "#0AA8A7",
    primary_2 :  "#376f92",
    color_secondary :  "#376f92",
    body_color :  "#fff",
    body_color_dark :  "#1E262C",
    text_color :  "#777",
    text_dark :  "#222",
    text_light :  "#959595",
    border_color :  "#ECECEC",
    black :  "#000",
    white :  "#fff",
    light :  "#EDF6F5",
    light2 :  "#DDF3FD",
}

const logoCSS = { 
    height: '100%', 

}

const selectCSS = {
    backgroundColor: color_sheet.white,
    width: '30vw',
    minWidth: '200px',
    height: '80%'

}

const selectTextCSS = {
    color: "#06131f",
    fontWeight: "bold",
    // fontStyle: "italic"

}


const barCSS = {
    width: '100%', 
    height: '100%', 
    bgcolor: color_sheet.border_color,
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
}




export const inLabStyle = {
    color_sheet: color_sheet,
    logoCSS: logoCSS,
    barCSS: barCSS,
    selectCSS: selectCSS,
    selectTextCSS: selectTextCSS
}
