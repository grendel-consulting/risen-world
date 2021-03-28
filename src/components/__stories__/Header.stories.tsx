import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";

import { PureHeader as Header, HeaderProps } from "../Header";

export default {
  title: `Header`,
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const HeaderWithTitle = Template.bind({});
HeaderWithTitle.args = {
  data: {
    site: {
      siteMetadata: {
        title: `Example Title`,
      },
    },
  },
};
