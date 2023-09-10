import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import {
  categoriesField,
  populationsField,
  readyForReviewField,
  titleField,
  urlField,
  websiteReferenceField,
} from "../fields";
import { reviewableDocumentPreviewConfig } from "../../configs/reviewableDocumentPreviewConfig";

export default defineType({
  type: "document",
  name: "blog",
  title: "Blog",
  icon: DocumentsIcon,
  preview: reviewableDocumentPreviewConfig,
  fields: [
    titleField,
    defineField({
      title: "Description",
      name: "description",
      type: "text",
    }),
    urlField,
    websiteReferenceField,
    categoriesField,
    populationsField,
    readyForReviewField,
  ],
});
