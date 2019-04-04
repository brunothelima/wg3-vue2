<?php 

  include './image_handler.php';
  include './ImageResize/ImageResize.php';
  include './ImageResize/smartcrop.php';

  use \Gumlet\ImageResize;
  use xymak\image\smartcrop;

  $query = $_GET;
  
  if ( empty($query['src']) ) {
    return;
  }
  
  header("Content-type: {$original['mime']}");
  
  $img = './' . ImageHandler::createHash($query) .'.jpg';
  
  if (file_exists($img)) {
    readfile($img);
    return;
  }

  $props = ImageHandler::extractProps($query);
  $image = new ImageResize('./' . $query['src']);
  $sizes = getimagesize('./' . $query['src']);
  $original = ['width' => $sizes[0], 'height' => $sizes[1]];
  
  if (isset($query['ratio'])) {
    $props = ImageHandler::calcRatio($query['ratio'], $props, $original);
  }
  
  $resize = ImageHandler::calcResize($props, $original);
  
  if ( isset($query['width']) && isset($query['height']) ) {
    $image = $image->resize($resize['width'], $resize['height'], true);
    $image = ImageResize::createFromString($image->getImageAsString());      
  }
  
  if ( isset($query['left']) && isset($query['top']) ) {
    
    $extract = ImageHandler::calcExtract($props, $original, $resize);  
    $image->freecrop($props['width'], $props['height'], $extract['left'], $extract['top']);
    $image->save($img);

    readfile($img);
    return;
  }

  if (isset($query['smart'])) {

    $smartcrop = new smartcrop('./' . $query['src'], [
      'width' => $props['width'],
      'height' => $props['height']
    ]);
    
    $analysis = $smartcrop->analyse();

    $image = $image->resize($resize['width'], $resize['height'], true);
    $image = ImageResize::createFromString($image->getImageAsString());      
    
    $image->freecrop(
      $analysis['topCrop']['width'], 
      $analysis['topCrop']['height'],
      $analysis['topCrop']['x'], 
      $analysis['topCrop']['y']
    );
    
    $image->save($img);

    readfile($img);
    exit;
  }

  $image->crop($props['width'], $props['height']);

  $image->save($img);
  
  readfile($img);
  exit;

?>