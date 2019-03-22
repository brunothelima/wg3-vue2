<?php $modules = ['WgFoundation']; ?>
<html>
  <head>
    <title>WG - Foundation</title>
    <!-- Meta tags -->
    <?php foreach($modules as $module): ?>
      <link rel="stylesheet" href="../wg_modules/<?=$module?>/dist/main.min.css">
    <?php endforeach; ?>
    <!-- <base href="/exp/widgrid/wg_view/"> -->
  </head>
  <body>
    <div class="WgView" id="WgView">
      <wg-i18n-selector />
      <wg-container>{{ $t('WgFoundation.hello') }}<br></wg-container>
    </div>
    <?php foreach($modules as $module): ?>
      <script src="../wg_modules/<?=$module?>/dist/main.min.js"></script>
    <?php endforeach; ?>
    <script src="../wg_core/dist/core.min.js"></script>
  </body>
</html>