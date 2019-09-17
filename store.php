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

    function prepare_name( $slug ) {
        $slug = str_replace( [ '_' ], [ ' ' ], $slug );

        return $slug;
    }

    $counter = 0;
    $active  = 'active';
    foreach ( $workers as $worker => $data ) {

        if ( $counter === 3 ) {
            $active = '';
        }
        $counter ++;
        ?>

        <div class="store-button-layer-1 store-button-layer-1-<?php echo $worker; ?> <?php echo $active; ?>">
            <div class="store-button-layer-2">
                <div class="store-add-worker">
                    <a onclick="add_worker('<?php echo $worker; ?>')">
                        <div class="worker-icon"><?php echo $data['icon']; ?></div>
                        <div class="worker-name"><?php echo prepare_name( $worker ) . ' (' . $data['earning'] . ')'; ?></div>
                        <div class="cost-space"></div>
                        <div class="cost-icon">
                            <i class="fas fa-dollar-sign"></i>&nbsp;<span class="cost-element"
                                                                          workersname="<?php echo prepare_name( $worker ); ?>"><?php echo $data['cost']; ?></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    <?php } ?>
</div>
