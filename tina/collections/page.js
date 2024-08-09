/**
 * @type {import('tinacms').Collection}
 */
import { TinaCMS, Form } from 'tinacms'
export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
    {
      type: 'string',
      name: 'last_edited',
      label: 'Last Edited',
      ui: {
        component: 'hidden',
      },
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
    beforeSubmit: async ({ values, cms, form, tinaForm }) => {
      return {
        ...values,
        last_edited: new Date().toISOString(),
      }
    },
  },
};
