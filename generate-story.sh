#!/bin/bash
print_help () {
	echo "Usage"
	echo "      $0 new-story-name"
	exit
}

if [ $# -lt 1 ]; then
	print_help
fi

STORY_NAME="${1^}"
STORY_NAME_LOWER="$(tr '[:upper:]' '[:lower:]' <<< ${STORY_NAME})"
generate_component() {
	cat << EOF
import { ${STORY_NAME}Props } from "./_types";

export const Basic${STORY_NAME} = ({}: ${STORY_NAME}Props) => {};
EOF
}

generate_types() {
	cat << EOF
import { BaseProps } from "../../shared/_types";
export interface ${STORY_NAME}Props extends BaseProps {};

EOF
}
generate_styled_component() {
	cat << EOF
import styled from "styled-components";
import { Basic${STORY_NAME} } from "./_component";

export const ${STORY_NAME} = styled(Basic${STORY_NAME})\`\`;
EOF
}
generate_stories() {
	cat << EOF
import { Story, Meta } from "@storybook/react";
import { ${STORY_NAME}Props } from "./_types";
import { ${STORY_NAME} } from "./${STORY_NAME}";

export default {
  title: "${STORY_NAME}",
  component: ${STORY_NAME},
} as Meta;

const Template: Story<${STORY_NAME}Props> = (args) => <${STORY_NAME} {...args} />;

export const ${STORY_NAME}Base = Template.bind({});
${STORY_NAME}Base.args = {};
EOF
}

mkdir src/stories/$STORY_NAME_LOWER

generate_component > src/stories/$STORY_NAME_LOWER/_component.tsx
generate_types > src/stories/$STORY_NAME_LOWER/_types.ts
generate_styled_component > src/stories/$STORY_NAME_LOWER/$STORY_NAME.tsx
generate_stories > src/stories/$STORY_NAME_LOWER/$STORY_NAME.stories.tsx
