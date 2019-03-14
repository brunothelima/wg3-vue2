<?php
  $modules = ['WgFoundation'];
?>
<html>
  <head>
    <title>WG - Foundation</title>
    <?php foreach($modules as $module): ?>
      <link rel="stylesheet" href="../wg_modules/<?=$module?>/dist/main.min.css">
    <?php endforeach; ?>
    <!-- <base href="/exp/widgrid/wg_view/"> -->
  </head>
  <body>
    
    <div class="WgView" id="WgView">
      <wg-container>
        {{ $t('WgCore.hello') }}<br>
        {{ $t('WgFoundation.hello') }}<br>
      </wg-container>
    </div>
    
    <?php foreach($modules as $module): ?>
      <script src="../wg_modules/<?=$module?>/dist/main.min.js"></script>
    <?php endforeach; ?>
    <script src="../wg_core/dist/core.min.js"></script>
  </body>
</html>