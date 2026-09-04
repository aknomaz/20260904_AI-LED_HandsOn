import { gs, GlideRecord } from '@servicenow/glide'

export function setRequestDefaults(current: GlideRecord<'x_snc_maintenance_request'>, previous: GlideRecord<'x_snc_maintenance_request'>) {
    // Set state to new (1)
    current.setValue('state', '1');

    // Validate that the referenced system is active
    var systemId = current.getValue('system');
    if (systemId) {
        var systemGr = new GlideRecord('x_snc_maintenance_system');
        if (systemGr.get(systemId)) {
            if (systemGr.getValue('active') != '1' && systemGr.getValue('active') != 'true') {
                gs.addErrorMessage('The selected system is not active. Please select an active system.');
                current.setAbortAction(true);
                return;
            }
        }
    }

    // Set requested_by to current user if empty
    if (!current.getValue('requested_by')) {
        current.setValue('requested_by', gs.getUserID());
    }
}
