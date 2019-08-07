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
    cost: 40
  }
);
var base_intern_model = Object.assign(
  {},
  base_worker_model,
  {
    name: 'intern',
    speed: 0.3,
    interval: 7000,
    cost: 500
  }
);
var base_employee_model = Object.assign(
  {},
  base_worker_model,
  {
    name: 'employee',
    speed: 0.5,
    interval: 5000,
    cost: 1500
  }
);
var base_real_state_model = Object.assign(
  {},
  base_worker_model,
  {
    name: 'real_state',
    speed: 1,
    interval: 1000,
    cost: 50100
  }
);
var base_companies_model = Object.assign(
  {},
  base_worker_model,
  {
    name: 'companies',
    speed: 3,
    interval: 300,
    cost: 500700
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
    cost: 1450400
  }
);
var base_bank_model = Object.assign(
  {},
  base_worker_model,
  {
    name: 'bank',
    speed: 50,
    interval: 20,
    cost: 15000900
  }
);
var base_university_model = Object.assign(
  {},
  base_worker_model,
  {
    name: 'university',
    speed: 100,
    interval: 10,
    cost: 500560000
  }
);
var base_mining_space_station_model = Object.assign(
  {},
  base_worker_model,
  {
    name: 'mining_space_station',
    speed: 200,
    interval: 5,
    cost: 50000000000000
  }
);

// END: base models
