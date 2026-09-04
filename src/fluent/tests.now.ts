import { Test } from "@servicenow/sdk/core";
import "@servicenow/sdk/global";

// Test 1: Positive case - Active system maintenance request defaults
Test({
    $id: Now.ID['test_active_system_request'],
    name: 'Maintenance Request - Active System Sets Defaults',
    description: 'Inserts an active system, then creates a maintenance request referencing it. Validates the before-insert business rule sets state to 1 (New) and populates requested_by with the current user.',
    failOnServerError: true
}, (atf) => {
    // Step 1: Insert an active system
    const systemResult = atf.server.recordInsert({
        $id: Now.ID['insert_active_system'],
        table: 'x_snc_maintenance_system',
        fieldValues: {
            name: 'ATF Test System - Active',
            active: 'true',
            category: 'infrastructure',
        },
        assert: 'record_successfully_inserted',
    });

    // Step 2: Insert a maintenance request referencing the active system
    const requestResult = atf.server.recordInsert({
        $id: Now.ID['insert_request_active'],
        table: 'x_snc_maintenance_request',
        fieldValues: {
            short_description: 'ATF Test - Active System Request',
            system: systemResult.record_id,
        },
        assert: 'record_successfully_inserted',
    });

    // Step 3: Validate state is '1' (New) and requested_by is populated
    atf.server.recordValidation({
        $id: Now.ID['validate_request_defaults'],
        table: 'x_snc_maintenance_request',
        recordId: requestResult.record_id,
        fieldValues: 'state=1^requested_byISNOTEMPTY',
        assert: 'record_validated',
    });
});

// Test 2: Negative case - Inactive system aborts maintenance request insert
Test({
    $id: Now.ID['test_inactive_system_request'],
    name: 'Maintenance Request - Inactive System Aborts Insert',
    description: 'Inserts an inactive system (active=false), then attempts to create a maintenance request referencing it. Expects the insert to be aborted by the before-insert business rule which calls setAbortAction when the system is not active.',
    failOnServerError: true
}, (atf) => {
    // Step 1: Insert an inactive system
    const inactiveSystemResult = atf.server.recordInsert({
        $id: Now.ID['insert_inactive_system'],
        table: 'x_snc_maintenance_system',
        fieldValues: {
            name: 'ATF Test System - Inactive',
            active: 'false',
            category: 'application',
        },
        assert: 'record_successfully_inserted',
    });

    // Step 2: Attempt to insert a maintenance request referencing the inactive system
    // The business rule should abort the insert via setAbortAction
    atf.server.recordInsert({
        $id: Now.ID['insert_request_inactive'],
        table: 'x_snc_maintenance_request',
        fieldValues: {
            short_description: 'ATF Test - Inactive System Request',
            system: inactiveSystemResult.record_id,
        },
        assert: 'record_not_inserted',
    });
});
