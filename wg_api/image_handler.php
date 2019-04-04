<?php 
class ImageHandler {
    
    public static function extractProps($query = []) {
      return [
        'top' => (isset($query['top'])) ? intval($query['top']) : 0,
        'left' => (isset($query['left'])) ? intval($query['left']) : 0,
        'width' => (isset($query['width'])) ? intval($query['width']) : null,
        'height' => (isset($query['height'])) ? intval($query['height']) : null
      ];
    }
    
    public static function orderProps($props = []) {
      $ordered = [];
      foreach ($props as $key => $value) {
        $ordered[$key] = $value;
      }
      return $ordered;
    }
    
    public static function createHash($props = []) {
      $json = json_encode(self::orderProps($props));
      return md5($json);
    }
    
    public static function calcResize($props = [], $original = []) {
      
      $ratio = ($props['width'] > $props['height']) 
        ? ($original['height'] / $original['width'])
        : ($original['width'] / $original['height']);
        
      if ($props['width'] > $props['height']) {
        $props['height'] = intval($props['width'] * $ratio);
      } else {
        $props['width'] = intval($props['height'] * $ratio);
      }
      
      return [
        'width' => $props['width'],
        'height' => $props['height'],
      ];
    }
    
    public static function calcExtract($props = [], $original = [], $resize = []) {
    
      $top = $props['top'] * ($resize['height'] / $original['height']);
      $left = $props['left'] * ($resize['width'] / $original['width']);
    
      $left = ($props['width'] > $props['height']) ? 0 : intval($left);
      $top = ($props['width'] < $props['height']) ? 0 : intval($top);
    
      if ($resize['height'] < ($top + ($props['height'] / 2))) {
        $top += $resize['height'] - ($top + ($props['height'] / 2));
      }
      if ($resize['width'] < ($left + ($props['width'] / 2))) {
        $left += $resize['width'] - ($left + ($props['width'] / 2));
      }
    
      $top -= $props['height'] / 2;
      $top = ($top < 0) ? 0 : $top;
      $left -= $props['width'] / 2;
      $left = ($left < 0) ? 0 : $left;
    
      return [
        'height' => $props['height'],
        'width' => $props['width'],
        'top' => $top,
        'left' => $left,
      ];
    }
    
    public static function calcRatio($ratio = '', $props = [], $original = []) {

      $ratios = [
        '1:1' => 1,
        '4:3' => 0.75,
        '3:4' => 1.3333,
        '16:9' => 0.5625,
        '9:16' => 1.7777
      ];
    
      if (!$props['width'] && !$props['height']) {
        $props['width'] = intval($props['height'] * $ratios[strrev($ratio)]);
        $props['height'] = $original['height'];
      }
    
      if ($props['width'] && !$props['height']) {
        $props['height'] = intval($props['width'] * $ratios[$ratio]);
      }
    
      if (!$props['width'] && $props['height']) {
        $props['width'] = intval($props['height'] * $ratios[strrev($ratio)]);
      }

      return $props;
    }
  }
?>