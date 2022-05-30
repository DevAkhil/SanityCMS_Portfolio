export default {
  name: "post",
  title: "Post",
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
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "string",
    },
    {
      title: "Does this project have a video?",
      name: "hasVideo",
      type: "boolean",
    },
    {
      title: "YouTube Video ID",
      description:
        "If the project has a video place the YouTube ID Here (eg N9zbTkltkP0) ",
      name: "videoID",
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
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
