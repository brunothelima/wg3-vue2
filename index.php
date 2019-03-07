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
      <link rel="stylesheet" href="wg_modules/<?=$module?>/dist/main.min.css">
    <?php endforeach; ?>
    <base href="/widgrid3/">
  </head>
  <body>
    
    <div class="WG3" id="WG3">
      <wg-hero></wg-hero>
      <wg-hero></wg-hero>
    </div>
    
    <script src="wg_vendors/vue/dist/vue.min.js"></script>
    <script src="wg_vendors/vuex/dist/vuex.min.js"></script>
    
    <?php foreach($modules as $module): ?>
      <script src="wg_modules/<?=$module?>/dist/main.min.js"></script>
    <?php endforeach; ?>

    <script type="module">
      import Widgrid from './index.js';
      const WG3 = new Widgrid('#WG3');
    </script>
  </body>
</html>