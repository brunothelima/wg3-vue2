<?php 
  header("Access-Control-Allow-Origin: *");
  echo json_encode([
		[
			'name' => 'widgrid',
			'props' => [
				[ 'name' => 'font-size', 'value' => '14px'],
				[ 'name' => 'font-family', 'value' => 'Arial, Helvetica, sans-serif'],
				[ 'name' => 'transition-duration', 'value' => '200ms'],
				[ 'name' => 'transition-timing-function', 'value' => 'ease-out'],
				[ 'name' => 'img-border-radius', 'value' => '0.25em'],
				[ 'name' => 'button-padding', 'value' => '1em'],
				[ 'name' => 'button-border-radius', 'value' => '0.25em'],
				[ 'name' => 'input-border-width', 'value' => '1px'],
				[ 'name' => 'input-border-style', 'value' => 'solid'],
				[ 'name' => 'input-border-radius', 'value' => '0.5em'],
				[ 'name' => 'color-info', 'value' => '#3B9DEA'],
				[ 'name' => 'color-error', 'value' => '#FA4646'],
				[ 'name' => 'color-warning', 'value' => '#DBC53D'],
				[ 'name' => 'color-success', 'value' => '#46CD72'],
			]
		]
  ]);
?>