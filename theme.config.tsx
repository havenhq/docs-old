import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <span>Haven</span>,
	project: {
		link: "https://github.com/havenhq/haven",
	},
	/*chat: {
    link: 'https://discord.com',
  },*/
	docsRepositoryBase: "https://github.com/havenhq/docs",
	footer: {
		text: "With <3 from Justus and Konsti.",
	},
};

export default config;
