import { Record } from '@servicenow/sdk/core'

export const defaultAssignment = Record({
    $id: Now.ID['default-maintenance-assignment'],
    table: 'sysrule_assignment',
    data: {
        name: 'Default Maintenance Request Assignment',
        table: 'x_snc_maintenance_request',
        active: true,
        order: 100,
        script: Now.include('./assignment-rules/default-assignment.js'),
    },
})
