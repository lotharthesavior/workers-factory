<div id="store">
	<div class="ads-layer-1">
		<div class="ads-layer-2">
			<div class="ads-layer-3">
				<div id="ads-1">ADS</div>
			</div>
		</div>
	</div>
	<div id="store-title">store</div>

	<?php
	$workers = [
		'cursor'               => [
      'icon'    => '<i class="fas fa-hand-pointer"></i>',
      'earning' => '0.1/s',
    ],
		'intern'               => [
      'icon'    => '<i class="fas fa-male"></i>',
      'earning' => '0.3/s',
    ],
		'employee'             => [
      'icon'    => '<i class="fas fa-user-tie"></i>',
      'earning' => '0.5/s',
    ],
		'real_state'           => [
      'icon'    => '<i class="fas fa-horse-head"></i>',
      'earning' => '1/s',
    ],
		'companies'            => [
      'icon'    => '<i class="fas fa-building"></i>',
      'earning' => '3/s',
    ],
		'wife'                 => [
      'icon'    => '<i class="fas fa-ring"></i>',
      'earning' => '...',
    ],
		'factory'              => [
      'icon'    => '<i class="fas fa-industry"></i>',
      'earning' => '10/s',
    ],
		'bank'                 => [
      'icon'    => '<i class="fas fa-money-check-alt"></i>',
      'earning' => '50/s',
    ],
		'university'           => [
      'icon'    => '<i class="fas fa-university"></i>',
      'earning' => '100/s',
    ],
		'mining_space_station' => [
      'icon'    => '<i class="fas fa-satellite"></i>',
      'earning' => '200/s',
    ],
	];

	function prepare_name($slug) {
		$slug = str_replace(['_'], [' '], $slug);
		return $slug;
	}

	foreach ($workers as $worker => $data) { ?>

		<div class="store-button-layer-1">
			<div class="store-button-layer-2">
				<div id="store-add-cursor"><a onclick="add_worker('<?php echo $worker; ?>')"><?php echo $data['icon']; ?><span><?php echo prepare_name($worker) . ' (' . $data['earning'] . ')'; ?></span></a></div>
			</div>
		</div>

	<?php } ?>
</div>
