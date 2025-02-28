import { defineArrayMember, defineField, defineType } from "sanity";

import { imageRowPreviewConfig } from "../../configs/imageRowPreviewConfig";

export default defineType({
  type: "object",
  name: "rowOfThree",
  title: "Image Row (3)",
  preview: imageRowPreviewConfig,
  fields: [
    defineField({
      name: "images",
      title: "Images",
      description:
        "A selection of 3 images that will be presented as a row. On smaller devices, we may only show the first image, so order matters.",
      type: "array",
      of: [defineArrayMember({ type: "accessibleImage" })],
      validation: (Rule) => Rule.length(3),
    }),
  ],
});
