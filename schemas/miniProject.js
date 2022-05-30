export default {
  name: "miniProject",
  title: "Mini Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "technologies",
      title: "Technologies Used",
      type: "string",
    },

    {
      title: "YouTube Video ID",
      description:
        "If the project has a video place the YouTube ID Here (eg N9zbTkltkP0) ",
      name: "videoID",
      type: "string",
    },

    {
      title: "GitHub Link",
      name: "gitURL",
      type: "url",
    },
    {
      title: "Live Website Link",
      name: "liveURL",
      type: "url",
    },
  ],
};
