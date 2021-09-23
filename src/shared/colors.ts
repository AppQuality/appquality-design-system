const PERCENT_20 = 20;
const PERCENT_40 = 40;
const PERCENT_60 = 60;
const PERCENT_80 = 80;

const mix = (color1: string, color2: string, weight?: number): string => {
  const d2h = (d: number): string => d.toString(16); // convert a decimal value to hex
  const h2d = (h: string): number => parseInt(h, 16); // convert a hex value to decimal
  const expandColor = (h: string): string => {
    let newH = h;
    if (h.length === 3) {
      newH = "";
      newH += h[0] + h[0];
      newH += h[1] + h[1];
      newH += h[2] + h[2];
    }
    return newH;
  }; // convert a hex value to decimal
  color1 = color1.replace(/#/g, "");
  color1 = expandColor(color1);
  color2 = color2.replace(/#/g, "");
  color2 = expandColor(color2);
  weight = typeof weight !== "undefined" ? weight : PERCENT_40; // set the weight to 50, if that argument is omitted

  var color = "#";

  for (let i = 0; i <= 5; i += 2) {
    // loop through each of the 3 hex pairs—red, green, and blue
    const v1 = h2d(color1.substr(i, 2)), // extract the current pairs
      v2 = h2d(color2.substr(i, 2));
    // combine the current pairs from each source color, according to the specified weight
    let val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));

    while (val.length < 2) {
      val = "0" + val;
    } // prepend a '0' if val results in a single digit

    color += val; // concatenate val to our new color string
  }

  return color; // PROFIT!
};

export const white = "#fff";
export const black = "#000";

export const gray = "#b2cbd9";

export const gray100 = mix(white, gray, PERCENT_80);
export const gray200 = mix(white, gray, PERCENT_60);
export const gray300 = mix(white, gray, PERCENT_40);
export const gray400 = mix(white, gray, PERCENT_20);
export const gray500 = gray;
export const gray600 = mix(black, gray, PERCENT_20);
export const gray700 = mix(black, gray, PERCENT_40);
export const gray800 = mix(black, gray, PERCENT_60);
export const gray900 = mix(black, gray, PERCENT_80);

// scss-docs-end gray-colors-map
// fusv-enable

// scss-docs-start color-variables
export const blue = "#266a9a";
export const indigo = "#6610f2";
export const purple = "#6f42c1";
export const pink = "#d63384";
export const red = "#d71116";
export const orange = "#ff9900";
export const yellow = "#ffc107";
export const green = "#3ead52";
export const teal = "#20c997";
export const cyan = "#55a0be";
// scss-docs-end color-variables

// fusv-disable
export const blue100 = mix(white, blue, PERCENT_80);
export const blue200 = mix(white, blue, PERCENT_60);
export const blue300 = mix(white, blue, PERCENT_40);
export const blue400 = mix(white, blue, PERCENT_20);
export const blue500 = blue;
export const blue600 = mix(black, blue, PERCENT_20);
export const blue700 = mix(black, blue, PERCENT_40);
export const blue800 = mix(black, blue, PERCENT_60);
export const blue900 = mix(black, blue, PERCENT_80);

export const indigo100 = mix(white, indigo, PERCENT_80);
export const indigo200 = mix(white, indigo, PERCENT_60);
export const indigo300 = mix(white, indigo, PERCENT_40);
export const indigo400 = mix(white, indigo, PERCENT_20);
export const indigo500 = indigo;
export const indigo600 = mix(black, indigo, PERCENT_20);
export const indigo700 = mix(black, indigo, PERCENT_40);
export const indigo800 = mix(black, indigo, PERCENT_60);
export const indigo900 = mix(black, indigo, PERCENT_80);

export const purple100 = mix(white, purple, PERCENT_80);
export const purple200 = mix(white, purple, PERCENT_60);
export const purple300 = mix(white, purple, PERCENT_40);
export const purple400 = mix(white, purple, PERCENT_20);
export const purple500 = purple;
export const purple600 = mix(black, purple, PERCENT_20);
export const purple700 = mix(black, purple, PERCENT_40);
export const purple800 = mix(black, purple, PERCENT_60);
export const purple900 = mix(black, purple, PERCENT_80);

export const pink100 = mix(white, pink, PERCENT_80);
export const pink200 = mix(white, pink, PERCENT_60);
export const pink300 = mix(white, pink, PERCENT_40);
export const pink400 = mix(white, pink, PERCENT_20);
export const pink500 = pink;
export const pink600 = mix(black, pink, PERCENT_20);
export const pink700 = mix(black, pink, PERCENT_40);
export const pink800 = mix(black, pink, PERCENT_60);
export const pink900 = mix(black, pink, PERCENT_80);

export const red100 = mix(white, red, PERCENT_80);
export const red200 = mix(white, red, PERCENT_60);
export const red300 = mix(white, red, PERCENT_40);
export const red400 = mix(white, red, PERCENT_20);
export const red500 = red;
export const red600 = mix(black, red, PERCENT_20);
export const red700 = mix(black, red, PERCENT_40);
export const red800 = mix(black, red, PERCENT_60);
export const red900 = mix(black, red, PERCENT_80);

export const orange100 = mix(white, orange, PERCENT_80);
export const orange200 = mix(white, orange, PERCENT_60);
export const orange300 = mix(white, orange, PERCENT_40);
export const orange400 = mix(white, orange, PERCENT_20);
export const orange500 = orange;
export const orange600 = mix(black, orange, PERCENT_20);
export const orange700 = mix(black, orange, PERCENT_40);
export const orange800 = mix(black, orange, PERCENT_60);
export const orange900 = mix(black, orange, PERCENT_80);

export const yellow100 = mix(white, yellow, PERCENT_80);
export const yellow200 = mix(white, yellow, PERCENT_60);
export const yellow300 = mix(white, yellow, PERCENT_40);
export const yellow400 = mix(white, yellow, PERCENT_20);
export const yellow500 = yellow;
export const yellow600 = mix(black, yellow, PERCENT_20);
export const yellow700 = mix(black, yellow, PERCENT_40);
export const yellow800 = mix(black, yellow, PERCENT_60);
export const yellow900 = mix(black, yellow, PERCENT_80);

export const green100 = mix(white, green, PERCENT_80);
export const green200 = mix(white, green, PERCENT_60);
export const green300 = mix(white, green, PERCENT_40);
export const green400 = mix(white, green, PERCENT_20);
export const green500 = green;
export const green600 = mix(black, green, PERCENT_20);
export const green700 = mix(black, green, PERCENT_40);
export const green800 = mix(black, green, PERCENT_60);
export const green900 = mix(black, green, PERCENT_80);

export const teal100 = mix(white, teal, PERCENT_80);
export const teal200 = mix(white, teal, PERCENT_60);
export const teal300 = mix(white, teal, PERCENT_40);
export const teal400 = mix(white, teal, PERCENT_20);
export const teal500 = teal;
export const teal600 = mix(black, teal, PERCENT_20);
export const teal700 = mix(black, teal, PERCENT_40);
export const teal800 = mix(black, teal, PERCENT_60);
export const teal900 = mix(black, teal, PERCENT_80);

export const cyan100 = mix(white, cyan, PERCENT_80);
export const cyan200 = mix(white, cyan, PERCENT_60);
export const cyan300 = mix(white, cyan, PERCENT_40);
export const cyan400 = mix(white, cyan, PERCENT_20);
export const cyan500 = cyan;
export const cyan600 = mix(black, cyan, PERCENT_20);
export const cyan700 = mix(black, cyan, PERCENT_40);
export const cyan800 = mix(black, cyan, PERCENT_60);
export const cyan900 = mix(black, cyan, PERCENT_80);

export const disabled = gray300;
export const disabledElement = gray300;
export const infoDisabled = cyan300;
export const disabledFont = gray900;
export const disabledDark = gray900;
