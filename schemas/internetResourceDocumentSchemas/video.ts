import { defineField, defineType } from "sanity";
import { DocumentVideoIcon } from "@sanity/icons";

import {
  categoriesField,
  populationsField,
  readyForReviewField,
  titleField,
  requiredUrlField,
  websiteReferenceField,
} from "../fields";
import { reviewableDocumentPreviewConfig } from "../../configs/reviewableDocumentPreviewConfig";

export default defineType({
  type: "document",
  name: "video",
  title: "Video",
  icon: DocumentVideoIcon,
  preview: reviewableDocumentPreviewConfig,
  fields: [
    titleField,
    defineField({
      title: "Description",
      name: "description",
      type: "text",
    }),
    requiredUrlField,
    websiteReferenceField,
    categoriesField,
    populationsField,
    readyForReviewField,
  ],
});
