export default {
  name: "graphic",
  title: "Graphic Design",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "company",
      title: "Company Made For",
      type: "string",
    },
    {
      name: "software",
      title: "Software Used",
      type: "string",
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
