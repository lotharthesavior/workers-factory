<?php

$workers = [
    'cursor'               => [
        'icon'           => '<i class="fas fa-hand-pointer"></i>',
        'earning'        => '0.1/s',
        'earnings_value' => 0.1,
        'cost'           => 15,
    ],
    'intern'               => [
        'icon'    => '<i class="fas fa-male"></i>',
        'earning' => '1/s',
        'earnings_value' => 1,
        'cost'    => 100,
    ],
    'employee'             => [
        'icon'    => '<i class="fas fa-user-tie"></i>',
        'earning' => '8/s',
        'earnings_value' => 8,
        'cost'    => 1000,
    ],
    'real_state'           => [
        'icon'    => '<i class="fas fa-horse-head"></i>',
        'earning' => '16/s',
        'earnings_value' => 16,
        'cost'    => 50100,
    ],
    'companies'            => [
        'icon'    => '<i class="fas fa-building"></i>',
        'earning' => '32/s',
        'earnings_value' => 32,
        'cost'    => 500700,
    ],
//		'wife'                 => [
//      'icon'    => '<i class="fas fa-ring"></i>',
//      'earning' => '...',
//		  'cost'    => 500700,
//    ],
    'factory'              => [
        'icon'    => '<i class="fas fa-industry"></i>',
        'earning' => '64/s',
        'earnings_value' => 64,
        'cost'    => 1450400,
    ],
    'bank'                 => [
        'icon'    => '<i class="fas fa-money-check-alt"></i>',
        'earning' => '128/s',
        'earnings_value' => 128,
        'cost'    => 15000900,
    ],
    'university'           => [
        'icon'    => '<i class="fas fa-university"></i>',
        'earning' => '256/s',
        'earnings_value' => 256,
        'cost'    => 500560000,
    ],
    'mining_space_station' => [
        'icon'    => '<i class="fas fa-satellite"></i>',
        'earning' => '512/s',
        'earnings_value' => 512,
        'cost'    => 50000000000000,
    ],
];

?>

<script>
    // BEGIN: base models (structs)

    var base_main_model = {
        // products: 0,
        clicked_products: 0,
        workers: [],
        earnings: 0
    };

    var base_worker_model = {
        name: '',
        created_at: 0,
        speed: 0,
        interval: 0,
        cost: 0
    };

    // worker type base models
    var base_cursor_model = Object.assign(
        {},
        base_worker_model,
        {
            name: 'cursor',
            speed: 0.1,
            interval: 9000,
            cost: <?php echo $workers['cursor']['cost']; ?>
        }
    );
    var base_intern_model = Object.assign(
        {},
        base_worker_model,
        {
            name: 'intern',
            speed: 1,
            interval: 7000,
            cost: <?php echo $workers['intern']['cost']; ?>
        }
    );
    var base_employee_model = Object.assign(
        {},
        base_worker_model,
        {
            name: 'employee',
            speed: 8,
            interval: 5000,
            cost: <?php echo $workers['employee']['cost']; ?>
        }
    );
    var base_real_state_model = Object.assign(
        {},
        base_worker_model,
        {
            name: 'real_state',
            speed: 1,
            interval: 1000,
            cost: <?php echo $workers['real_state']['cost']; ?>
        }
    );
    var base_companies_model = Object.assign(
        {},
        base_worker_model,
        {
            name: 'companies',
            speed: 3,
            interval: 300,
            cost: <?php echo $workers['companies']['cost']; ?>
        }
    );
    // TODO: wife worker is a special type, it duplicates all the gains
    // var base_wife_model = Object.assign({}, base_worker_model, {name: 'wife', speed: 0, interval: 300});
    var base_factory_model = Object.assign(
        {},
        base_worker_model,
        {
            name: 'factory',
            speed: 10,
            interval: 100,
            cost: <?php echo $workers['factory']['cost']; ?>
        }
    );
    var base_bank_model = Object.assign(
        {},
        base_worker_model,
        {
            name: 'bank',
            speed: 50,
            interval: 20,
            cost: <?php echo $workers['bank']['cost']; ?>
        }
    );
    var base_university_model = Object.assign(
        {},
        base_worker_model,
        {
            name: 'university',
            speed: 100,
            interval: 10,
            cost: <?php echo $workers['university']['cost']; ?>
        }
    );
    var base_mining_space_station_model = Object.assign(
        {},
        base_worker_model,
        {
            name: 'mining_space_station',
            speed: 200,
            interval: 5,
            cost: <?php echo $workers['mining_space_station']['cost']; ?>
        }
    );

    // END: base models
</script>
