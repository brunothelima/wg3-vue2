<?php 
  header('Contet-type: image/jpeg');

  require('./image_handler.php');

  $query = $_GET;
  
  if ( empty($query['src']) ) {
    return;
  }
  
  $props = ImageHandler::extractProps($query);
  $file = imagecreatefromjpeg('./' . $query['src']);
  
  $original = getimagesize('./' . $query['src']);
  $original = [ 'width' => $original[0], 'height' => $original[1] ];
  $img = './' . ImageHandler::createHash($query) .'.jpg';
  
  if (isset($props['left']) && isset($props['top'])) {
  
    $resize = ImageHandler::calcResize($props, $original);
    $extract = ImageHandler::calcExtract($props, $original, $resize);
    
    $file = imagescale($file, $resize['width'], $resize['height']); 
  
    $file = imagecrop($file, [
      'width' => $props['width'], 
      'height' => $props['height'],
      'x' => $extract['left'],
      'y' => $extract['top']
    ]);
    
    imagejpeg($file, $img);

    return;
  }
  
  if (isset($query['ratio'])) {
    $props = ImageHandler::calcRatio($query['ratio'], $props, $original);
  }
  
  // if ($query['attention']) {
  //   $props['position'] = sharp.strategy.attention;
  // }
  
  $file = imagescale($file, $props['width'], $props['height']); 
  
  imagejpeg($file, $img);
  
?>