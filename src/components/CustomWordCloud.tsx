"use client";

import { useTheme } from "next-themes";
import D3WordCloud from "react-d3-cloud";

const fontSizeMapper = (word: { value: number }) => Math.log2(word.value) * 5;

const CustomWordCloud = () => {
  const theme = useTheme();

  return (
    <D3WordCloud
      height={550}
      font="times"
      fontSize={fontSizeMapper}
      rotate={0}
      padding={10}
      fill={theme.theme === "dark" ? "white" : "black"}
      data={[
        { text: "React", value: 1000 },
        { text: "Vue", value: 200 },
        { text: "Angular", value: 800 },
        { text: "Svelte", value: 100 },
        { text: "Ember", value: 10 },
        { text: "Preact", value: 2000 },
        { text: "Inferno", value: 3000 },
        { text: "Backbone", value: 1000 },
        { text: "jQuery", value: 100 },
        { text: "Lodash", value: 1000 },
        { text: "Underscore", value: 2000 },
        { text: "Moment", value: 800 },
        { text: "Express", value: 100 },
        { text: "Koa", value: 10 },
        { text: "Meteor", value: 2000 },
        { text: "Aurelia", value: 3000 },
        { text: "Knockout", value: 1000 },
        { text: "Polymer", value: 100 },
        { text: "Mithril", value: 1000 },
        { text: "Nuxt", value: 2000 },
        { text: "Next", value: 800 },
        { text: "Sapper", value: 100 },
        { text: "Gatsby", value: 10 },
        { text: "Gridsome", value: 2000 },
        { text: "Nest", value: 3000 },
        { text: "Feathers", value: 1000 },
        { text: "Fastify", value: 100 },
        { text: "Hapi", value: 1000 },
        { text: "Loopback", value: 2000 },
        { text: "Strapi", value: 800 },
        { text: "Adonis", value: 100 },
        { text: "Nuxt", value: 10 },
        { text: "Next", value: 2000 },
        { text: "Sapper", value: 3000 },
        { text: "Gatsby", value: 1000 },
        { text: "Gridsome", value: 100 },
        { text: "Nest", value: 1000 },
      ]}
    />
  );
};

export default CustomWordCloud;
