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
      'cost'    => 40,
    ],
		'intern'               => [
      'icon'    => '<i class="fas fa-male"></i>',
      'earning' => '0.3/s',
		  'cost'    => 500,
    ],
		'employee'             => [
      'icon'    => '<i class="fas fa-user-tie"></i>',
      'earning' => '0.5/s',
		  'cost'    => 1500,
    ],
		'real_state'           => [
      'icon'    => '<i class="fas fa-horse-head"></i>',
      'earning' => '1/s',
		  'cost'    => 50100,
    ],
		'companies'            => [
      'icon'    => '<i class="fas fa-building"></i>',
      'earning' => '3/s',
		  'cost'    => 500700,
    ],
//		'wife'                 => [
//      'icon'    => '<i class="fas fa-ring"></i>',
//      'earning' => '...',
//		  'cost'    => 500700,
//    ],
		'factory'              => [
      'icon'    => '<i class="fas fa-industry"></i>',
      'earning' => '10/s',
		  'cost'    => 1450400,
    ],
		'bank'                 => [
      'icon'    => '<i class="fas fa-money-check-alt"></i>',
      'earning' => '50/s',
		  'cost'    => 15000900,
    ],
		'university'           => [
      'icon'    => '<i class="fas fa-university"></i>',
      'earning' => '100/s',
		  'cost'    => 500560000,
    ],
		'mining_space_station' => [
      'icon'    => '<i class="fas fa-satellite"></i>',
      'earning' => '200/s',
		  'cost'    => 50000000000000,
    ],
	];

	function prepare_name($slug) {
		$slug = str_replace(['_'], [' '], $slug);
		return $slug;
	}

  $counter = 0;
  $active = 'active';
	foreach ($workers as $worker => $data) {

	  if ($counter === 3) {
	    $active = '';
    }
	  $counter++;
	  ?>

		<div class="store-button-layer-1 store-button-layer-1-<?php echo $worker; ?> <?php echo $active; ?>">
			<div class="store-button-layer-2">
				<div class="store-add-worker">
          <a onclick="add_worker('<?php echo $worker; ?>')">
            <div class="worker-icon"><?php echo $data['icon']; ?></div>
            <div class="worker-name"><?php echo prepare_name($worker) . ' (' . $data['earning'] . ')'; ?></div>
            <div class="cost-space"></div>
            <div class="cost-icon">
              <i class="fas fa-dollar-sign"></i>&nbsp;<span class="cost-element" workersname="<?php echo prepare_name($worker); ?>"><?php echo $data['cost']; ?></span>
            </div>
          </a>
        </div>
			</div>
		</div>

	<?php } ?>
</div>
