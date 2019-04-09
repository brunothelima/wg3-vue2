<?php 

include 'smartcrop.php';

use xymak\image\smartcrop;

class ImageHandler {

  private static $ratios = [
    '1:1' => 1,
    '4:3' => 0.75,
    '3:4' => 1.3333,
    '16:9' => 0.5625,
    '9:16' => 1.7777
  ];

  public static function extractConfig($query = []) {
    return [
      'y' => (isset($query['y'])) ? intval($query['y']) : 0,
      'x' => (isset($query['x'])) ? intval($query['x']) : 0,
      'w' => (isset($query['w'])) ? intval($query['w']) : null,
      'h' => (isset($query['h'])) ? intval($query['h']) : null
    ];
  }
    
  public static function extractHash($config = []) {
    if (empty($config)) {
      throw new Exception('Missing/Empty param $config for hash extraction.');
    }
    asort($config);
    $json = json_encode($config);
    return md5($json);
  }
  
  public static function calcMinResolution($config = [], $original = []) {

    if (empty($config)) {
      throw new Exception('Missing/Empty param $config for min resolution calculation.');
    }
    
    if (empty($original)) {
      throw new Exception('Missing/Empty param $orginal for min resolution calculation.');
    }
    
    $ratio = ($config['w'] > $config['h']) 
      ? ($original['h'] / $original['w'])
      : ($original['w'] / $original['h']);
      
    if ($config['w'] > $config['h']) {
      $config['h'] = intval($config['w'] * $ratio);
    } else {
      $config['w'] = intval($config['h'] * $ratio);
    }
    
    return $config;
  }
    
  public static function calcFocalPoint($config = [], $original = [], $minRes = []) {

    if (empty($config)) {
      throw new Exception('Missing/Empty param $config for the focal point calculation.');
    }
    
    if (empty($original)) {
      throw new Exception('Missing/Empty param $orginal for the focal point calculation.');
    }

    if (empty($original)) {
      throw new Exception('Missing/Empty param $minRes for the focal point calculation.');
    }
  
    $config['y'] *= $minRes['h'] / $original['h'];
    $config['x'] *= $minRes['w'] / $original['w'];
  
    $config['x'] = ($config['w'] > $config['h']) ? 0 : $config['x'];
    $config['y'] = ($config['w'] < $config['h']) ? 0 : $config['y'];
  
    if ($minRes['h'] < ($config['y'] + ($config['h'] / 2))) {
      $config['y'] += $minRes['h'] - ($config['y'] + ($config['h'] / 2));
    }
    if ($minRes['w'] < ($config['x'] + ($config['w'] / 2))) {
      $config['x'] += $minRes['w'] - ($config['x'] + ($config['w'] / 2));
    }
  
    $config['y'] -= $config['h'] / 2;
    $config['x'] -= $config['w'] / 2;
    
    $config['y'] = ($config['y'] < 0) ? 0 : $config['y'];
    $config['x'] = ($config['x'] < 0) ? 0 : $config['x'];
  
    return $config;
  }
    
  public static function calcRatio($ratio = '', $config = [], $original = []) {

    if (!isset(self::$ratios[$ratio])) {
      throw new Exception('Missing/Invalid param $ratio. There is no correspondent value for the given param.');
    }
    
    if (empty($config)) {
      throw new Exception('Missing/Empty param $config for the ratio calculation.');
    }

    if (empty($original)) {
      throw new Exception('Missing/Empty param $original for the ratio calculation.');
    }

    if (!$config['w'] && !$config['h']) {
      $config['w'] = intval($config['h'] * self::$ratios[strrev($ratio)]);
      $config['h'] = $original['h'];
    }
  
    if ($config['w'] && !$config['h']) {
      $config['h'] = intval($config['w'] * self::$ratios[$ratio]);
    }
  
    if (!$config['w'] && $config['h']) {
      $config['w'] = intval($config['h'] * self::$ratios[strrev($ratio)]);
    }

    return $config;
  }

  public static function analyse($src, $config) {
    $analysis = new smartcrop($src, [
      'width' => $config['w'],
      'height' => $config['h'],
    ]);
    return $analysis->analyse(); 
  }
}
?>