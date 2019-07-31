<?php 

  header("Access-Control-Allow-Origin: *");

  include 'vendors/imageHandler.php';
  include 'vendors/ImageResize.php';
  
  use \Gumlet\ImageResize;

  /**
   * Possible params to recieve as configuration:
   *  'w' => (Int) The new image width
   *  'h' => (Int) The new image height
   *  'x' => (Int) The focal point x axis
   *  'y' => (Int) The focal point y axis
   *  'smart' => (Boolean) Smart crop flag
   *  'ratio' => (String) Dimension ratio for the new image
   */
  $params = $_GET; // Given params for the new image
  $src  = 'originals/' . $params['src']; // Original image path
  $dest = 'cache/'; // Destiny path for the new image to be created

  $original         = getimagesize($src); // The original image dimensions
  $original['mime'] = str_replace('image/', '', $original['mime']); // The image extension
  $original['w']    = $original[0]; // Assign the first value to a new key 'w' for width
  $original['h']    = $original[1]; // Assign the first value to a new key 'h' for height
  
  $hash = ImageHandler::extractHash($params); // The new image name
  $dest .= $hash .'.' . $original['mime']; // Complete path to the new image

  header("Content-type: {$original['mime']}");

  /**
   * If a image exists in the $dest path with the same hash name,
   *  $dest is imediatly returned
   */
  if (file_exists($dest)) {
    readfile($dest);
    exit;
  }
  
  $output = new ImageResize($src); // Image data instance to manipulate
  $config  = ImageHandler::extractConfig($params); // The given configuration params for the new image
  
  if (isset($params['ratio'])) {
    $config = ImageHandler::calcRatio($params['ratio'], $config, $original);
  }

  $minRes = ImageHandler::calcMinResolution($config, $original); // Image minimal resolution params
  

  if ( (isset($params['w']) && isset($params['h'])) || isset($params['smart'])) {
    $output = $output->resize($minRes['w'], $minRes['h'], true);
    $output = ImageResize::createFromString($output->getImageAsString());      
  }
  
  if ( isset($params['x']) && isset($params['y']) ) {
    
    $focus = ImageHandler::calcFocalPoint($config, $original, $minRes);  
    
    $output->freecrop(
      $config['w'], 
      $config['h'], 
      $focus['x'], 
      $focus['y']
    );

    $output->save($dest);
    readfile($dest);
    exit;
  }

  if (isset($params['smart'])) {
    
    $analysis = ImageHandler::analyse($src, $config);
    
    $output->freecrop(
      $config['w'],
      $config['h'],
      $analysis['topCrop']['x'], 
      $analysis['topCrop']['y']
    );
    
    $output->save($dest);
    readfile($dest);
    exit;
  }

  $output->crop(
    !empty($config['w']) ? $config['w'] : $minRes['w'],
    !empty($config['h']) ? $config['h'] : $minRes['h']
  );

  $output->save($dest);
  readfile($dest);
  exit;
  
?>