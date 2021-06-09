import { DefaultTheme } from "styled-components";

export const grid = (theme: DefaultTheme) => {
  let style = "";

  const colSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const gutters = { ...theme.grid.sizes, 0: "0px" };
  style += `
	.row {
		--gutter-x: ${theme.grid.gutter.x};
		--gutter-y: ${theme.grid.gutter.y};
	  display: flex;
	  flex-wrap: wrap;
	  margin-top: calc(var(--gutter-y) * -1); 
	  margin-right: calc(var(--gutter-x) / -2); 
	  margin-left: calc(var(--gutter-x) / -2); 
		
		${Object.entries(gutters)
      .map(
        ([gKey, gVal]) => `
			&.g-${gKey},
			&.gx-${gKey} {
				--gutter-x: ${gVal};
			}
			
			&.g-${gKey},
			&.gy-${gKey} {
				--gutter-y: ${gVal};
			}
		`
      )
      .join("")}
	  > * {
			box-sizing: border-box;
			flex-shrink: 0;
			width: 100%;
			max-width: 100%; 
			padding-right: calc(var(--gutter-x) / 2); 
			padding-left: calc(var(--gutter-x) / 2); 
			margin-top: var(--gutter-y);
	    @include make-col-ready();
	  }
	}
	
	.row-cols-auto > * {
	  flex: 0 0 auto;
	  width: auto;
	}
	
	${colSizes
    .map(
      (colSize) => `
		
		.col-${colSize} {
			flex: 0 0 auto;
			width: ${100 * (colSize / Math.max(...colSizes))}%;
		}
	`
    )
    .join("")}
	`;

  style += Object.entries(theme.grid.breakpoints)
    .map(
      ([bpKey, bpValue]) => `
		@media (min-width: ${bpValue}) {
			
			.row {
				${Object.entries(gutters)
          .map(
            ([gKey, gVal]) => `
					&.g-${bpKey}-${gKey},
					&.gx-${bpKey}-${gKey} {
						--gutter-x: ${gVal};
					}
					
					&.g-${bpKey}-${gKey},
					&.gy-${bpKey}-${gKey} {
						--gutter-y: ${gVal};
					}
				`
          )
          .join("")}
			}
		  .row-cols-${bpKey}-auto > * {
			  flex: 0 0 auto;
			  width: auto;
		  }
			.col {
				flex: 1 0 0%; 
			}
			${colSizes
        .map(
          (colSize) => `
				
        .col-${bpKey}-${colSize} {
			    flex: 0 0 auto;
			    width: ${100 * (colSize / Math.max(...colSizes))}%;
        }
			`
        )
        .join("")}
		}`
    )
    .join("");
  return style;
};
