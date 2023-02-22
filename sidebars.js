/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    {
      type: 'doc',
      label: 'Home',
      id: 'index',
    },
    {
      type: 'link',
      label: 'Core',
      href: '/docs/ox_core',
    },
    {
      type: 'link',
      label: 'MySQL',
      href: '/docs/oxmysql',
    },
    {
      type: 'link',
      label: 'Library',
      href: '/docs/ox_lib',
    },
    {
      type: 'link',
      label: 'Target',
      href: '/docs/ox_target',
    },
    {
      type: 'link',
      label: 'Inventory',
      href: '/docs/ox_inventory',
    },
    {
      type: 'link',
      label: 'Doorlock',
      href: '/docs/ox_doorlock',
    },
  ],
  ox_target: [
    {
      type: 'link',
      label: '← Home',
      href: '/docs',
    },
    {
      type: 'category',
      label: 'Target',
      link: {
        type: 'generated-index',
        title: 'Ox Target',
        description: 'A performant and flexible "third-eye" stand-alone targeting resource, with additional support for ox, esx, and qb.',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'ox_target',
        },
      ],
    },
  ],
  ox_core: [
    {
      type: 'link',
      label: '← Home',
      href: '/docs',
    },
    {
      type: 'category',
      label: 'Core',
      link: {
        type: 'generated-index',
        title: 'Ox Core',
        description: 'An experimental framework for FiveM. Limited support and breaking changes guaranteed.',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'ox_core',
        },
      ],
    },
  ],
  oxmysql: [
    {
      type: 'link',
      label: '← Home',
      href: '/docs',
    },
    {
      type: 'category',
      label: 'OxMySQL',
      link: {
        type: 'generated-index',
        title: 'OxMySQL',
        description:
          'MySQL/MariaDB wrapper for FXServer built on the node-mysql2 connector, offering improved performance and functionality.',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'oxmysql',
        },
      ],
    },
  ],
  ox_lib: [
    {
      type: 'link',
      label: '← Home',
      href: '/docs',
    },
    {
      type: 'category',
      label: 'Library',
      link: {
        type: 'generated-index',
        title: 'Ox Library',
        description: 'Provides shared code through exports and loadable modules to utilise in other resources.',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'ox_lib',
        },
      ],
    },
  ],
  ox_inventory: [
    {
      type: 'link',
      label: '← Home',
      href: '/docs',
    },
    {
      type: 'category',
      label: 'Inventory',
      link: {
        type: 'generated-index',
        title: 'Ox Inventory',
        description:
          'A slot-based inventory with metadata support, implementing its own items, weapons, shops, and more.',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'ox_inventory',
        },
      ],
    },
  ],
  ox_doorlock: [
    {
      type: 'link',
      label: '← Home',
      href: '/docs',
    },
    {
      type: 'category',
      label: 'Doorlock',
      link: {
        type: 'generated-index',
        title: 'Ox Doorlock',
        description:
          'Door management resource.',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'ox_doorlock',
        },
      ],
    },
  ],
};

module.exports = sidebars;
