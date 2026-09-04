// Assignment script for maintenance requests
// Assigns to groups based on system category
var systemRef = current.system;
if (systemRef) {
    var systemGr = new GlideRecord('x_snc_maintenance_system');
    if (systemGr.get(systemRef.toString())) {
        var category = systemGr.getValue('category');
        if (category == 'infrastructure') {
            current.assignment_group.setDisplayValue('Infrastructure Team');
        } else if (category == 'application') {
            current.assignment_group.setDisplayValue('Application Team');
        } else if (category == 'network') {
            current.assignment_group.setDisplayValue('Network Team');
        } else if (category == 'database') {
            current.assignment_group.setDisplayValue('Database Team');
        }
    }
}
