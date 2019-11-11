function calculate() {
    var SERVERS = document.MIGRATIONS.SERVERS.value;

    if (SERVERS < 0) {
        document.getElementById("COST_LOW").innerHTML = "Can't migrate a negative number of servers";
        document.getElementById("COST_HIGH").innerHTML = "Can't migrate a negative number of servers";
        return;
    }

    if (SERVERS == 0) {
        document.getElementById("COST_LOW").innerHTML = "$ 0";
        document.getElementById("COST_HIGH").innerHTML = "$ 0";
        return;
    }
    var red1 = document.getElementById("red1");
    var red2 = document.getElementById("red2");
    var RM_Licence = 0;
    if (RM.checked) {
        var RM_Licence = 50;
    }

    var ARCHITECT_RATE = 300;
    var MIGRATION_ENGINEER_RATE = 225;
    if (OffShore.checked) {
        var MIGRATION_ENGINEER_RATE = 75;;
    }
    var PROJECT_MANAGER_RATE = 200;
    var MIN_HOURS_PER_SERVER = 4;
    var MAX_HOURS_PER_SERVER = 8;
    var RM_COST = RM_Licence * SERVERS

    var MINIMUM_ENGAGEMENT = ARCHITECT_RATE * 1 + MIGRATION_ENGINEER_RATE * 8 + PROJECT_MANAGER_RATE * 2 + RM_COST;
    var MIN_ENGINEERING_HOURS = SERVERS * MIN_HOURS_PER_SERVER;
    var MAX_ENGINEERING_HOURS = SERVERS * MAX_HOURS_PER_SERVER;

    var MIN_PROJECT_MANAGER_HOURS = MIN_ENGINEERING_HOURS * .2;
    var MAX_PROJECT_MANAGER_HOURS = MAX_ENGINEERING_HOURS * .2;

    var MIN_ENG_COST = MIN_ENGINEERING_HOURS * MIGRATION_ENGINEER_RATE;
    var MAX_ENG_COST = MAX_ENGINEERING_HOURS * MIGRATION_ENGINEER_RATE;

    var MIN_PM_COST = MIN_PROJECT_MANAGER_HOURS * PROJECT_MANAGER_RATE;
    var MAX_PM_COST = MAX_PROJECT_MANAGER_HOURS * PROJECT_MANAGER_RATE;



    var MIN_COST = MIN_PM_COST + MIN_ENG_COST + RM_COST;
    var MAX_COST = MAX_PM_COST + MAX_ENG_COST + RM_COST;

    if (MIN_COST < MINIMUM_ENGAGEMENT) {
        document.getElementById("COST_LOW").innerHTML = "$ " + MINIMUM_ENGAGEMENT.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    } else {
        document.getElementById("COST_LOW").innerHTML = "$ " + MIN_COST.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    if (MAX_COST < MINIMUM_ENGAGEMENT) {
        document.getElementById("COST_HIGH").innerHTML = "$ " + MINIMUM_ENGAGEMENT.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    } else {
        document.getElementById("COST_HIGH").innerHTML = "$ " + MAX_COST.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
}