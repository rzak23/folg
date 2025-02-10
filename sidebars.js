/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  // menu materi
  docs:[
    'intro',
    'web/persiapan',
    {
      type: 'category',
      label: 'HTML',
      collapsed: true,
      items: [
        'web/html/index_html',
        'web/html/heading',
        'web/html/paragraf',
        'web/html/format',
        'web/html/tabel',
        'web/html/order_list'
      ]
    },
    {
      type: 'category',
      label: 'CSS',
      collapsed: true,
      items: [
        'web/css/index_css'
      ]
    },
    {
      type: 'category',
      label: 'Javascript',
      collapsed: true,
      items: [
        'web/javascript/index_javascript'
      ]
    },
    {
      type: 'category',
      label: 'PHP',
      collapsed: true,
      items: [
        'web/php/index_php',
        'web/php/save',
        'web/php/hello',
        'web/php/variabel',
        'web/php/aritmatika'
      ]
    }
  ],
  // menu contoh
  contoh: [
    'contoh'
  ],
  git: [
    'git',
    'git/install',
    {
      type: 'category',
      label: 'Github',
      collapsed: true,
      items: [
        'git/github/github',
        'git/github/buat-akun',
        'git/github/buat-repo',
        'git/github/setup-pertama',
        'git/github/clone-repo'
      ]
    }
  ],
  codeigniter: [
    'codeigniter/intro',
    'codeigniter/install',
    'codeigniter/struktur-folder',
    'codeigniter/route',
    'codeigniter/konfigurasi',
    'codeigniter/spark-command'
  ],
  laragon: [
    'laragon/index_laragon',
    'laragon/jalan_laragon',
    'laragon/versi_laragon'
  ],
  flyenv: [
    'flyenv/index_flyenv',
    'flyenv/install',
    'flyenv/konfigurasi_db'
  ]
};
