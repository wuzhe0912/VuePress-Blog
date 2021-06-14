module.exports = {
  "title": "Pitt Wu's Blog",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "Vue.js 2.x",
            "link": "/docs/vue2/01-router"
          },
          {
            "text": "Vue.js 3.x",
            "link": "/docs/vue3/01-initial"
          },
          {
            "text": "PHP",
            "link": "/docs/php/01-grammar"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/wuzhe0912",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/vue2/": [
        "01-router"
      ],
      "/docs/vue3/": [
        "01-initial",
        "02-grammar",
        "03-todos",
        "04-api"
      ],
      "/docs/php/": [
        "01-grammar",
        "02-array",
        "03-function"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Pitt Wu",
    "authorAvatar": "/avatar.jpg",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}