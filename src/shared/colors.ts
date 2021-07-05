const mix = (color_1: string, color_2: string, weight?: number) => {
  function d2h(d: number) {
    return d.toString(16);
  } // convert a decimal value to hex
  function h2d(h: string) {
    return parseInt(h, 16);
  } // convert a hex value to decimal
  function expandColor(h: string) {
    if (h.length == 3) {
      let newH = "";
      newH += h[0] + h[0];
      newH += h[1] + h[1];
      newH += h[2] + h[2];
      h = newH;
    }
    return h;
  } // convert a hex value to decimal
  color_1 = color_1.replace(/#/g, "");
  color_1 = expandColor(color_1);
  color_2 = color_2.replace(/#/g, "");
  color_2 = expandColor(color_2);
  weight = typeof weight !== "undefined" ? weight : 50; // set the weight to 50, if that argument is omitted

  var color = "#";

  for (var i = 0; i <= 5; i += 2) {
    // loop through each of the 3 hex pairs—red, green, and blue
    var v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
      v2 = h2d(color_2.substr(i, 2)),
      // combine the current pairs from each source color, according to the specified weight
      val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));

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

export const gray100 = mix(white, gray, 80);
export const gray200 = mix(white, gray, 60);
export const gray300 = mix(white, gray, 40);
export const gray400 = mix(white, gray, 20);
export const gray500 = gray;
export const gray600 = mix(black, gray, 20);
export const gray700 = mix(black, gray, 40);
export const gray800 = mix(black, gray, 60);
export const gray900 = mix(black, gray, 80);

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
export const blue100 = mix(white, blue, 80);
export const blue200 = mix(white, blue, 60);
export const blue300 = mix(white, blue, 40);
export const blue400 = mix(white, blue, 20);
export const blue500 = blue;
export const blue600 = mix(black, blue, 20);
export const blue700 = mix(black, blue, 40);
export const blue800 = mix(black, blue, 60);
export const blue900 = mix(black, blue, 80);

export const indigo100 = mix(white, indigo, 80);
export const indigo200 = mix(white, indigo, 60);
export const indigo300 = mix(white, indigo, 40);
export const indigo400 = mix(white, indigo, 20);
export const indigo500 = indigo;
export const indigo600 = mix(black, indigo, 20);
export const indigo700 = mix(black, indigo, 40);
export const indigo800 = mix(black, indigo, 60);
export const indigo900 = mix(black, indigo, 80);

export const purple100 = mix(white, purple, 80);
export const purple200 = mix(white, purple, 60);
export const purple300 = mix(white, purple, 40);
export const purple400 = mix(white, purple, 20);
export const purple500 = purple;
export const purple600 = mix(black, purple, 20);
export const purple700 = mix(black, purple, 40);
export const purple800 = mix(black, purple, 60);
export const purple900 = mix(black, purple, 80);

export const pink100 = mix(white, pink, 80);
export const pink200 = mix(white, pink, 60);
export const pink300 = mix(white, pink, 40);
export const pink400 = mix(white, pink, 20);
export const pink500 = pink;
export const pink600 = mix(black, pink, 20);
export const pink700 = mix(black, pink, 40);
export const pink800 = mix(black, pink, 60);
export const pink900 = mix(black, pink, 80);

export const red100 = mix(white, red, 80);
export const red200 = mix(white, red, 60);
export const red300 = mix(white, red, 40);
export const red400 = mix(white, red, 20);
export const red500 = red;
export const red600 = mix(black, red, 20);
export const red700 = mix(black, red, 40);
export const red800 = mix(black, red, 60);
export const red900 = mix(black, red, 80);

export const orange100 = mix(white, orange, 80);
export const orange200 = mix(white, orange, 60);
export const orange300 = mix(white, orange, 40);
export const orange400 = mix(white, orange, 20);
export const orange500 = orange;
export const orange600 = mix(black, orange, 20);
export const orange700 = mix(black, orange, 40);
export const orange800 = mix(black, orange, 60);
export const orange900 = mix(black, orange, 80);

export const yellow100 = mix(white, yellow, 80);
export const yellow200 = mix(white, yellow, 60);
export const yellow300 = mix(white, yellow, 40);
export const yellow400 = mix(white, yellow, 20);
export const yellow500 = yellow;
export const yellow600 = mix(black, yellow, 20);
export const yellow700 = mix(black, yellow, 40);
export const yellow800 = mix(black, yellow, 60);
export const yellow900 = mix(black, yellow, 80);

export const green100 = mix(white, green, 80);
export const green200 = mix(white, green, 60);
export const green300 = mix(white, green, 40);
export const green400 = mix(white, green, 20);
export const green500 = green;
export const green600 = mix(black, green, 20);
export const green700 = mix(black, green, 40);
export const green800 = mix(black, green, 60);
export const green900 = mix(black, green, 80);

export const teal100 = mix(white, teal, 80);
export const teal200 = mix(white, teal, 60);
export const teal300 = mix(white, teal, 40);
export const teal400 = mix(white, teal, 20);
export const teal500 = teal;
export const teal600 = mix(black, teal, 20);
export const teal700 = mix(black, teal, 40);
export const teal800 = mix(black, teal, 60);
export const teal900 = mix(black, teal, 80);

export const cyan100 = mix(white, cyan, 80);
export const cyan200 = mix(white, cyan, 60);
export const cyan300 = mix(white, cyan, 40);
export const cyan400 = mix(white, cyan, 20);
export const cyan500 = cyan;
export const cyan600 = mix(black, cyan, 20);
export const cyan700 = mix(black, cyan, 40);
export const cyan800 = mix(black, cyan, 60);
export const cyan900 = mix(black, cyan, 80);

export const disabled = gray300;
export const disabledDark = gray600;
