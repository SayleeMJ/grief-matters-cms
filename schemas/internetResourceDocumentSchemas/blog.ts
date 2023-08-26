import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import { internetResourcePreviewConfig } from "../../configs/internetResourcePreviewConfig";
import { validateImportField } from "../fields";

export default defineType({
  type: "document",
  name: "blog",
  title: "Blog",
  icon: DocumentsIcon,
  preview: internetResourcePreviewConfig,
  initialValue: {
    validated: "false",
  },
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
    }),
    defineField({
      title: "Resource Details",
      name: "resourceDetails",
      type: "resourceBase",
    }),
    validateImportField,
  ],
});
