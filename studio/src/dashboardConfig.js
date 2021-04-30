export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "608be0711ec504c6bbef75dd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-daz9te1f",
                  apiId: "c4b6c10a-e4b7-4317-b00d-47a72cfa6dc0",
                },
                {
                  buildHookId: "608be07140cb6fd9d5fbf0cf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wbp5339f",
                  apiId: "e29c2482-28f7-43dc-bea1-9fa56c4780ba",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/imshuffling/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wbp5339f.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
