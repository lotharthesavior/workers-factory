
function start() {
  var stored_main_model = localStorage.getItem(MAIN_MODEL_KEY);
  if (stored_main_model === null) {
    main_model = Object.assign({}, base_main_model);
    save();
  } else {
    main_model = JSON.parse(stored_main_model);
  }
  update_ui();
  prepare_workers();
  prepare_running_intervals();
}

function prepare_running_intervals() {
  running_intervals[EARNINGS_INTERVAL_KEY] = setInterval(add_products, 1000);
  running_intervals[AUTOSAVE_INTERVAL_KEY] = setInterval(save, AUTOSAVE_INTERVAL);
}

function prepare_workers() {
  main_model.workers.forEach(function(worker) {
    add_worker_earnings(worker);
    add_worker_to_assets(worker);
  });
  sort_assets();
}

function add_worker_earnings(worker) {
  main_model.earnings = main_model.earnings + worker.speed;
}

function add_product() {
  main_model.clicked_products++;
  update_ui();
}

function add_products() {
  main_model.clicked_products = main_model.clicked_products + main_model.earnings;
  update_ui();
}

function add_worker(worker) {
  var new_worker;
  switch (worker) {
    case 'cursor':
      new_worker = Object.assign({}, base_cursor_model);
      break;
    case 'intern':
      new_worker = Object.assign({}, base_intern_model);
      break;
    case 'employee':
      new_worker = Object.assign({}, base_employee_model);
      break;
    case 'real_state':
      new_worker = Object.assign({}, base_real_state_model);
      break;
    case 'companies':
      new_worker = Object.assign({}, base_companies_model);
      break;
    // TODO: wife worker is a special type, it duplicates all the gains
    // case 'wife':
    //  new_worker = Object.assign({}, base_worker_model);
    //  break;
    case 'factory':
      new_worker = Object.assign({}, base_factory_model);
      break;
    case 'bank':
      new_worker = Object.assign({}, base_bank_model);
      break;
    case 'university':
      new_worker = Object.assign({}, base_university_model);
      break;
    case 'mining_space_station':
      new_worker = Object.assign({}, base_mining_spacestation_model);
      break;
  }
  proceed_adding_worker(new_worker);
}

function proceed_adding_worker(new_worker) {
  new_worker.created_at = get_seconds_from_miliseconds((new Date).getTime());
  main_model.workers.push(new_worker);
  add_worker_earnings(new_worker);
  add_worker_to_assets(new_worker);
  sort_assets();
  update_ui();
}

function add_worker_to_assets(new_worker) {
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
    new_asset_worker.classList.add(WORKERS_ICONS[worker.name]);
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

function sort_assets() {
  var list = document.getElementById('workers');
  var items = list.childNodes;
  var itemsArr = [];
  for (var i in items) {
    if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
      itemsArr.push(items[i]);
    }
  }
  
  itemsArr.sort(function(a, b) {
    var a_name = a.getAttribute('id').split('_')[1];
    var a_earning = get_base_model_from_worker_name(a_name).speed;

    var b_name = b.getAttribute('id').split('_')[1];
    var b_earning = get_base_model_from_worker_name(b_name).speed;

    return a_earning === b_earning
      ? 0
      : (a_earning > b_earning ? 1 : -1);
  });

  for (i = 0; i < itemsArr.length; ++i) {
    list.appendChild(itemsArr[i]);
  }
}

function get_base_model_from_worker_name(name) {
  switch (name) {
    case 'cursor':
      return base_cursor_model;
      break;
    case 'intern':
      return base_intern_model;
      break;
    case 'employee':
      return base_employee_model;
      break;
    case 'real_state':
    case 'real':
      return base_real_state_model;
      break;
    case 'companies':
      return base_companies_model;
      break;
// TODO: wife worker is a special type, it duplicates all the gains
//     case 'wife':
//       break;
    case 'factory':
      return base_factory_model;
      break;
    case 'bank':
      return base_bank_model;
      break;
    case 'university':
      return base_university_model;
      break;
    case 'mining_spacestation':
    case 'mining':
      return base_mining_spacestation_model;
      break;
  }
}

function update_ui() {
  document.querySelector('#products .count').innerHTML = main_model.clicked_products;
  document.querySelector('#products-per-second .count').innerHTML = main_model.earnings;
  // document.querySelector('#workers .count').innerHTML = main_model.workers.length;
}

function save() {
  localStorage.setItem(MAIN_MODEL_KEY, JSON.stringify(main_model));
}

// BEGIN: helpers

function get_seconds_from_miliseconds(miliseconds) {
  return parseInt(Math.floor(miliseconds / 1000));
}

// END: helpers
