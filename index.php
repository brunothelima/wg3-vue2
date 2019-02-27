<?php
  $modules = [
    'WgFoundation',
    'WgContent',
  ];
  $skin = json_encode([
    ['property' => 'gutter', 'value' => '8px']
  ]);
?>
<html>
  <head>
    <title>WG - Foundation</title>
    <?php foreach($modules as $module): ?>
      <link rel="stylesheet" href="./src/<?=$module?>/dist/main.min.css">
    <?php endforeach; ?>
    <script id="data" type="application/json"></script>
  </head>
  <body>
    
    <div class="widgrid" id="widgrid">
      <wg-hero></wg-hero>
      <wg-hero></wg-hero>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vuex/dist/vuex.js"></script>
    
    <?php foreach($modules as $module): ?>
      <script src="./src/<?=$module?>/dist/main.min.js"></script>
    <?php endforeach; ?>

    <script type="module">
      import Widgrid from './src/widgrid.js';
      const widgrid = Widgrid('#widgrid');
    </script>
  </body>
</html>