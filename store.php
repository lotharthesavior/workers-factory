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
      'cost'    => 15,
    ],
		'intern'               => [
      'icon'    => '<i class="fas fa-male"></i>',
      'earning' => '0.3/s',
		  'cost'    => 40,
    ],
		'employee'             => [
      'icon'    => '<i class="fas fa-user-tie"></i>',
      'earning' => '0.5/s',
		  'cost'    => 100,
    ],
		'real_state'           => [
      'icon'    => '<i class="fas fa-horse-head"></i>',
      'earning' => '1/s',
		  'cost'    => 1100,
    ],
		'companies'            => [
      'icon'    => '<i class="fas fa-building"></i>',
      'earning' => '3/s',
		  'cost'    => 5700,
    ],
		'wife'                 => [
      'icon'    => '<i class="fas fa-ring"></i>',
      'earning' => '...',
		  'cost'    => 15800,
    ],
		'factory'              => [
      'icon'    => '<i class="fas fa-industry"></i>',
      'earning' => '10/s',
		  'cost'    => 45400,
    ],
		'bank'                 => [
      'icon'    => '<i class="fas fa-money-check-alt"></i>',
      'earning' => '50/s',
		  'cost'    => 150900,
    ],
		'university'           => [
      'icon'    => '<i class="fas fa-university"></i>',
      'earning' => '100/s',
		  'cost'    => 560000,
    ],
		'mining_space_station' => [
      'icon'    => '<i class="fas fa-satellite"></i>',
      'earning' => '200/s',
		  'cost'    => 1700600,
    ],
	];

	function prepare_name($slug) {
		$slug = str_replace(['_'], [' '], $slug);
		return $slug;
	}

	foreach ($workers as $worker => $data) { ?>

		<div class="store-button-layer-1 store-button-layer-1-<?php echo $worker; ?>">
			<div class="store-button-layer-2">
				<div class="store-add-worker">
          <a onclick="add_worker('<?php echo $worker; ?>')">
            <div class="worker-icon"><?php echo $data['icon']; ?></div>
            <div class="worker-name"><?php echo prepare_name($worker) . ' (' . $data['earning'] . ')'; ?></div>
            <div class="cost-space"></div>
            <div class="cost-icon">
              <i class="fas fa-dollar-sign"></i>&nbsp;<?php echo $data['cost']; ?>
            </div>
          </a>
        </div>
			</div>
		</div>

	<?php } ?>
</div>
