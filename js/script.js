
/* ------------------------------------------------
   PUBLIC FUNCTIONS
   ------------------------------------------------ */

function start() {
  var stored_main_model = localStorage.getItem(MAIN_MODEL_KEY);
  if (stored_main_model === null) {
    main_model = Object.assign({}, base_main_model);
    _save();
  } else {
    main_model = JSON.parse(stored_main_model);
  }
  _update_ui();
  _prepare_workers();
  _prepare_running_intervals();
}

/**
 * This part prepares the new worker object
 *
 * @param worker
 */
function add_worker(worker) {
  var new_worker;
  switch (worker) {
    case WORKERS_STORE['cursor'].name:
      new_worker = Object.assign({}, base_cursor_model);
      break;
    case WORKERS_STORE['intern'].name:
      new_worker = Object.assign({}, base_intern_model);
      break;
    case WORKERS_STORE['employee'].name:
      new_worker = Object.assign({}, base_employee_model);
      break;
    case WORKERS_STORE['real_state'].name:
      new_worker = Object.assign({}, base_real_state_model);
      break;
    case WORKERS_STORE['companies'].name:
      new_worker = Object.assign({}, base_companies_model);
      break;
    // TODO: wife worker is a special type, it duplicates all the gains
    // case WORKERS_STORE['wife'].name:
    //  new_worker = Object.assign({}, base_worker_model);
    //  break;
    case WORKERS_STORE['factory'].name:
      new_worker = Object.assign({}, base_factory_model);
      break;
    case WORKERS_STORE['bank'].name:
      new_worker = Object.assign({}, base_bank_model);
      break;
    case WORKERS_STORE['university'].name:
      new_worker = Object.assign({}, base_university_model);
      break;
    case WORKERS_STORE['mining_space_station'].name:
      new_worker = Object.assign({}, base_mining_space_station_model);
      break;
  }

  if (!_has_enough_products(new_worker)) {
    return
  }

  _debit_workers_cost(new_worker);

  _proceed_adding_worker(new_worker);
}

/**
 * @param worker
 * @return boolean
 */
function _has_enough_products(worker) {
  return main_model.clicked_products >= worker.cost;
}

function _debit_workers_cost(worker) {
  main_model.clicked_products = main_model.clicked_products - worker.cost;
}

/**
 * Add 1 product
 */
function add_product() {
  main_model.clicked_products++;
  _update_ui();
}

/* ------------------------------------------------
   PRIVATE FUNCTIONS
   ------------------------------------------------ */

/**
 * The main intervals for the application are declared here.
 */
function _prepare_running_intervals() {
  running_intervals[EARNINGS_INTERVAL_KEY] = setInterval(_add_products, 1000);
  running_intervals[AUTOSAVE_INTERVAL_KEY] = setInterval(_save, AUTOSAVE_INTERVAL);
}

/**
 * Workers declarations
 */
function _prepare_workers() {
  main_model.workers.forEach(function(worker) {
    _add_worker_earnings(worker);
    _add_worker_to_assets(worker);
  });
  _sort_assets();
}

function _add_worker_earnings(worker) {
  main_model.earnings = main_model.earnings + worker.speed;
}

/**
 * Add add products in blocks of earnings
 */
function _add_products() {
  main_model.clicked_products = main_model.clicked_products + main_model.earnings;
  _update_ui();
}

function _proceed_adding_worker(new_worker) {
  new_worker.created_at = _get_seconds_from_miliseconds((new Date).getTime());
  main_model.workers.push(new_worker);
  _add_worker_earnings(new_worker);
  _add_worker_to_assets(new_worker);
  _sort_assets();
  _update_ui();
}

function _add_worker_to_assets(new_worker) {
  var asset_worker_name = 'asset_' + new_worker.name;
  var found_element = document.querySelector('#' + asset_worker_name);

  if (found_element === null) {
    // add containers
    var layer_1 = document.createElement('div');
    layer_1.setAttribute('id', asset_worker_name);
    layer_1.classList.add('layer-1');
    var layer_2 = document.createElement('div');
    layer_2.classList.add('layer-2');
    // add list and count
    var list = document.createElement('div');
    list.classList.add('list');
    var count = document.createElement('span');
    count.classList.add('count');
    layer_2.appendChild(list);
    layer_2.appendChild(count);

    layer_1.appendChild(layer_2);
    document.getElementById('workers').appendChild(layer_1);
  }

  // update ui - asset
  var list_area = document.querySelector('#' + asset_worker_name + ' .layer-2 .list');
  while (list_area.firstChild) {
    list_area.removeChild(list_area.firstChild);
  }
  main_model.workers.filter(function(worker){
    return worker.name === new_worker.name;
  }).forEach(function(worker){
    // create element
    var new_asset_worker = document.createElement('i');
    new_asset_worker.classList.add('asset_worker');
    new_asset_worker.classList.add('asset_worker_' + worker.name);
    new_asset_worker.classList.add('fas');
    new_asset_worker.classList.add(WORKERS_STORE[worker.name].icon);
    document.querySelector('#' + asset_worker_name + ' .layer-2 .list').appendChild(new_asset_worker);
  });
  var cleaner = document.createElement('div');
  cleaner.classList.add('cleaner');
  document.querySelector('#' + asset_worker_name + ' .layer-2 .list').appendChild(cleaner);

  // update ui - earning
  document.querySelector('#' + asset_worker_name + ' .layer-2 .count').innerHTML = "+" + main_model.workers.filter(function(worker){
    return worker.name === new_worker.name;
  }).map((w) => w.speed).reduce(function(total, num){
    return total + num;
  }).toFixed(1) + '/s';
}

function _sort_assets() {
  var list = document.getElementById('workers');
  var items = list.childNodes;
  var itemsArr = [];
  for (var i in items) {
    if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
      itemsArr.push(items[i]);
    }
  }

  itemsArr.sort(function(a, b) {
    var a_name = a.getAttribute('id').split('asset_')[1];
    var a_earning = _get_base_model_from_worker_name(a_name).speed;

    var b_name = b.getAttribute('id').split('asset_')[1];
    var b_earning = _get_base_model_from_worker_name(b_name).speed;

    return a_earning === b_earning
      ? 0
      : (a_earning > b_earning ? 1 : -1);
  });

  for (i = 0; i < itemsArr.length; ++i) {
    list.appendChild(itemsArr[i]);
  }
}

function _get_base_model_from_worker_name(name) {
  switch (name) {
    case WORKERS_STORE['cursor'].name:
      return base_cursor_model;
      break;
    case WORKERS_STORE['intern'].name:
      return base_intern_model;
      break;
    case WORKERS_STORE['employee'].name:
      return base_employee_model;
      break;
    case WORKERS_STORE['real_state'].name:
      return base_real_state_model;
      break;
    case WORKERS_STORE['companies'].name:
      return base_companies_model;
      break;
// TODO: wife worker is a special type, it duplicates all the gains
//     case WORKERS_STORE['wife'].name:
//       break;
    case WORKERS_STORE['factory'].name:
      return base_factory_model;
      break;
    case WORKERS_STORE['bank'].name:
      return base_bank_model;
      break;
    case WORKERS_STORE['university'].name:
      return base_university_model;
      break;
    case WORKERS_STORE['mining_space_station'].name:
      return base_mining_space_station_model;
      break;
  }
}

function _update_ui() {
  // products count
  document.querySelector('#products .count').innerHTML = main_model.clicked_products.toFixed(0).commarize();
  // products per second count
  document.querySelector('#products-per-second .count').innerHTML = main_model.earnings.toFixed(1);
  // update store availability
  document.querySelector('.store-button-layer-1').classList.remove('active');
  var base_models_list = [
    base_cursor_model,
    base_intern_model,
    base_employee_model,
    base_real_state_model,
    base_companies_model,
    base_factory_model,
    base_bank_model,
    base_university_model,
    base_mining_space_station_model
  ];
  base_models_list.some(function(current_base_model){
    if (main_model.clicked_products >= current_base_model.cost) {
      document.querySelector('.store-button-layer-1-' + current_base_model.name).classList.add('active');
    } else {
      return true;
    }
  });
}

function _save() {
  localStorage.setItem(MAIN_MODEL_KEY, JSON.stringify(main_model));
}

// BEGIN: helpers

function _get_seconds_from_miliseconds(miliseconds) {
  return parseInt(Math.floor(miliseconds / 1000));
}

// END: helpers
