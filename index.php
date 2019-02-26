<?php
  $ccps = json_encode([
    ['property' => 'gutter', 'value' => '8px']
  ]);
?>
<html>
  <head>
    <title>WG - Foundation</title>
    <link rel="stylesheet" href="./dist/widgrid.min.css">
  </head>
  <body>
    <div class="widgrid" id="widgrid">
      <wg-hero></wg-hero>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vuex/dist/vuex.js""></script>
    <script src="./dist/widgrid.min.js"></script>
  </body>
</html>