---
title: Vue.js 2.x(01)：Vue Router
date: 2021-03-01
categories: 
 - JavaScript
tags:
 - Vue.js 2.x
---
## Basic Setting(基本設定)

## Dynamic Route Matching(動態路由)

## Nested Routes(巢狀路由)

## Named Routes(命名路由)

## Named Views(命名視圖)

## alias(別名)
### 建立 component 並設定 router
``` html
<!-- views/alias.vue -->
<template lang="pug">
  .component-wrapper
    .box 內容渲染
    .box 查看路徑變化：{{ $route.path }}
    BackBtn
</template>

<script>
import BackBtn from '@/components/BackBtn';

export default {
  name: 'alias',

  components: {
    BackBtn,
  },

  data() {
    return {};
  },
};
</script>
```
``` js
const routes = [
  // ...
  {
    path: '/alias',
    alias: '/story',
    component: () => import('../views/Alias.vue'),
  },
];
```
這個設定，在當我進入 alias 頁面時，除了網址`/alias`，可以看到預期的畫面外，將網址改為`/story`，也可以拿到相同的畫面，因此被稱為別名。
### array 格式
alias 除了單一字串外，也可以用陣列的形式呈現，讓多個別名都呈現相同的頁面內容。
``` js
const routes = [
  // ...
  {
    path: '/alias',
    alias: ['/story', '/story1', '/story2'],
    component: () => import('../views/Alias.vue'),
  },
];
```
## redirect(轉址)
承前所述，我在 router 設定上，添加一組設定。
``` js
const routes = [
  // ...
  {
    path: '/alias123',
    redirect: '/alias',
  },
];
```
在這個設定中，我可以看到有一個算是隨意輸入的`path: '/alias123'`，換言之，當我在網址故意輸入`/alias123`時，會被設定的 redirect 轉回`/alias`頁面。

也因此，redirect 常用於設定 404 頁面，也就是當使用者故意隨便輸入網址參數時，會統一跳轉到我所希望前往的頁面。
``` html
<!-- views/NotFound.vue -->
<template lang="pug">
  .component-wrapper
    .box oops! this page is not found.
    BackBtn
</template>

<script>
import BackBtn from '@/components/BackBtn';

export default {
  name: 'NotFound',

  components: {
    BackBtn,
  },

  data() {
    return {};
  },
};
</script>
```
``` js
const routes = [
  // ...
  {
    path: '/notfound',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '*',
    redirect: '/notfound',
  },
];
```
path 設定星號代表吃到所有路徑頁面，但在 router 的設定中，路徑的配對是依序配對，也就是如果上方已有 path 被配對到，則會自動吃到該頁面，只有當上方所有頁面都吃不到時，才會吃最後一個星號，也因此才被我們拿來攔截所有隨意亂打的網址。